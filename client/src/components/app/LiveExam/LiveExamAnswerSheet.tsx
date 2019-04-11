import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Card, Elevation, RadioGroup, Radio } from '@blueprintjs/core';
import { Store } from 'src/models/basics/Store';
import { Link, Redirect } from 'react-router-dom';
import Countdown from 'react-countdown-now';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const LiveExamAnswerSheet = inject('store')(
  observer((props: InjecttedPageProps) => {
    const {
      examStore,
      questionExamStore,
      resultStore
      // controller
    } = props.store!;
    let localExam = JSON.parse(localStorage.localExam);
    let total = questionExamStore.questionExams.filter(
      (questionExam: any) => questionExam.examId === examStore.exam.id
    ).length;
    localStorage.total = JSON.stringify(total);
    let localTempResults = JSON.parse(localStorage.localTempResults);
    // localStorage.setItem('examFinished', JSON.stringify(true));
    // localStorage.removeItem('examFinished');

    return (
      <Card interactive={true} elevation={Elevation.TWO} className="w-100">
      {console.log('ami kola', localStorage.examFinished)}
        <div className="answerSheet">
          <div className="answerSheetHeader flex tc mt3 bg-light-green br3">
            <div className="w-30 flex flex-column justify-center">
              <div className="mv3">
                <p className="tl pl2 f6 mb0">
                  Negative Mark: {localExam.negativeMark}
                </p>
                <p className="tl pl2 f6 mb0">Total: {localStorage.total}</p>
              </div>
            </div>
            <div className="w-40 mv2 flex flex-column justify-center">
              <p className="tc f3 mb1 b">{localExam.title}</p>
              <p className="tc f6 mb1">Subject: {localExam.subject.title}</p>
              <p className="tc f6 mb1">
                Time Left:{' '}
                <Countdown
                  date={
                    Date.parse(localStorage.examStartTime) +
                    parseInt(localExam.duration, 10) * 60 * 100
                  }
                  // {console.log('date', date)}
                  onComplete={() => {
                    localStorage.setItem('examFinished', JSON.stringify(true));
                    console.log(localStorage.examFinished);
                    resultStore.setTempResults(localTempResults);
                    resultStore.save();
                    window.location.reload();
                    // {() => <Redirect to="/liveExamResultSheet" />}
                    // {localStorage.examFinished === 'true' ? resultStore.setTempResults(localTempResults) : ''} 
                    // {localStorage.examFinished === 'true' ? resultStore.save() : ''}
                    // {localStorage.examFinished === 'true' ? localStorage.examFinished = JSON.stringify(false) : ''} 
                  }}
                />
                {/* {localStorage.examFinished === 'true' ? console.log('notunjaam') : console.log('aaa')}
                 {localStorage.examFinished === 'false' ? console.log('notunaaaam') : ''} */}
              </p>
            </div>
            <div className="w-30 flex flex-column justify-center">
              <div className="mv3">
                <p className="tr pr2 f6 mb0">Date: {localExam.date}</p>
                <p className="tr pr2 f6 mb0">Duration: {localExam.duration}</p>
              </div>
            </div>
          </div>
          <div className="answerSheetContent w-100 flex mv3">
            <div className="w-100 ph2 flex flex-wrap">
              {questionExamStore.questionExams
                .filter(
                  (questionExam: any) => questionExam.examId === localExam.id
                )
                .map((questionExam: any, index: number) => (
                  <Card key={index} className="pa3 ma2 w-48">
                    {/* {resultStore.tempResults[index].setQuestionExamId(
                      parseInt(questionExam.id!, 10)
                    )} */}
                    {/* {resultStore.tempResults[index].setExamId(
                      parseInt(questionExam.examId!, 10)
                    )} */}
                    <p className="dn">
                      {
                        (localTempResults[index].questionExamId =
                          questionExam.id)
                      }
                      {(localTempResults[index].examId = questionExam.examId)}
                    </p>
                    <p className="f6 b">
                      <span>{index + 1}. </span> {questionExam.question.title}
                    </p>
                    <RadioGroup
                      onChange={(e: any) => {
                        // resultStore.tempResults[index].setGivenAnswer(
                        //   e.currentTarget.value
                        // );
                        localTempResults[index].givenAnswer =
                          e.currentTarget.value;
                        // if (resultStore.tempResults[index].givenAnswer === '') {
                        //   resultStore.tempResults[index].setMarks(0);
                        // } else if (
                        //   resultStore.tempResults[index].givenAnswer ===
                        //   questionExam.question.answer
                        // ) {
                        //   resultStore.tempResults[index].setMarks(1);
                        // } else {
                        //   resultStore.tempResults[index].setMarks(
                        //     0 + examStore.exam.negativeMark
                        //   );
                        // }
                        if (localTempResults[index].givenAnswer === '') {
                          localTempResults[index].marks = 0;
                        } else if (
                          localTempResults[index].givenAnswer ===
                          questionExam.question.answer
                        ) {
                          localTempResults[index].marks = 1;
                        } else {
                          localTempResults[index].marks =
                            0 + localExam.negativeMark;
                        }
                        console.log(localTempResults);
                        // console.log(questionExam.option1 === localTempResults[index].givenAnswer);
                      }}
                      selectedValue={localTempResults[index].givenAnswer!}
                    >
                      <Radio
                        label={questionExam.option1}
                        value={questionExam.option1}
                      />
                      <Radio
                        label={questionExam.option2}
                        value={questionExam.option2}
                      />
                      <Radio
                        label={questionExam.option3}
                        value={questionExam.option3}
                      />
                      <Radio
                        label={questionExam.option4}
                        value={questionExam.option4}
                      />
                    </RadioGroup>
                  </Card>
                ))}
            </div>
          </div>
        </div>
        <Link
          to="/liveExamResultSheet"
          className="sidebarLinks answerSheetButton bp3-button
           bp3-icon-manually-entered-data bp3-fill bp3-intent-success"
          onClick={(e: any) => {
            resultStore.setTempResults(localTempResults);
            resultStore.save();
            // localStorage.examFinished = JSON.stringify(false);
          }}
        >
          Submit Paper
        </Link>
         {/* {localStorage.examFinished === 'true' ? resultStore.setTempResults(localTempResults) : ''} 
         {localStorage.examFinished === 'true' ? resultStore.save() : ''} */}
        {localStorage.examFinished === 'true' ? <Redirect to="/liveExamResultSheet" />  : ''}
        {/* {localStorage.examFinished === 'true' ? <Redirect to="/liveExamResultSheet" /> : ''} */}
      </Card>
    );
  })
);
