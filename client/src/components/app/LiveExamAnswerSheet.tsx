import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Card, Elevation, RadioGroup, Radio } from '@blueprintjs/core';
import { Store } from 'src/models/Store';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown-now';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const LiveExamAnswerSheet = inject('store')(
  observer((props: InjecttedPageProps) => {
    const {
      examStore,
      questionExamStore,
      resultStore,
      // controller
    } = props.store!;
    let localExam = JSON.parse(localStorage.localExam);
    console.log('localExam->', localExam);
    let total = questionExamStore.questionExams.filter((questionExam: any) =>
        questionExam.examId === examStore.exam.id).length;
    localStorage.total = JSON.stringify(total);
    
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="w-100">
        <div className="answerSheet">
          <div className="answerSheetHeader flex tc mt3 bg-light-green br3">
            <div className="w-30 flex flex-column justify-center">
              <div className="mv3">
                <p className="tl pl2 f6 mb0">
                  Negative Mark: {localExam.negativeMark}
                </p>
                <p className="tl pl2 f6 mb0">
                  Total: {localStorage.total}
                </p>
              </div>
            </div>
            <div className="w-40 mv2 flex flex-column justify-center">
              <p className="tc f3 mb1 b">{localExam.title}</p>
              <p className="tc f6 mb1">Subject: {localExam.subject.title}</p>
              <p className="tc f6 mb1">
                Time Left:{' '}
                <Countdown
                  date={
                    Date.parse(localStorage.examStartTime) +  (parseInt(localStorage.examDuration, 10) * 60 * 1000)
                  }
                />{' '}
              </p>
            </div>
            <div className="w-30 flex flex-column justify-center">
              <div className="mv3">
                <p className="tr pr2 f6 mb0">Date: {localExam.date}</p>
                <p className="tr pr2 f6 mb0">
                  Duration: {localExam.duration}
                </p>
              </div>
            </div>
          </div>
          <div className="answerSheetContent w-100 flex mv3">
            <div className="w-100 ph2 flex flex-wrap">
              {questionExamStore.questionExams
                .filter(
                  (questionExam: any) =>
                    questionExam.examId === examStore.exam.id
                )
                .map((questionExam: any, index: number) => (
                  <Card key={index} className="pa3 ma2 w-48">
                    {resultStore.tempResults[index].setQuestionExamId(
                      parseInt(questionExam.id!, 10)
                    )}
                    {resultStore.tempResults[index].setExamId(
                      parseInt(questionExam.examId!, 10)
                    )}
                    <p className="f6 b">
                      <span>{index + 1}. </span> {questionExam.question.title}
                    </p>
                    <RadioGroup
                      onChange={(e: any) => {
                        resultStore.tempResults[index].setGivenAnswer(
                          e.currentTarget.value
                        );
                        if (resultStore.tempResults[index].givenAnswer === '') {
                          resultStore.tempResults[index].setMarks(0);
                        } else if (
                          resultStore.tempResults[index].givenAnswer ===
                          questionExam.question.answer
                        ) {
                          resultStore.tempResults[index].setMarks(1);
                        } else {
                          resultStore.tempResults[index].setMarks(
                            0 + examStore.exam.negativeMark
                          );
                        }
                      }}
                      selectedValue={
                        resultStore.tempResults[index].givenAnswer!
                      }
                    >
                      <Radio
                        label={`${questionExam.option1}`}
                        value={`${questionExam.option1}`}
                      />
                      <Radio
                        label={`${questionExam.option2}`}
                        value={`${questionExam.option2}`}
                      />
                      <Radio
                        label={`${questionExam.option3}`}
                        value={`${questionExam.option3}`}
                      />
                      <Radio
                        label={`${questionExam.option4}`}
                        value={`${questionExam.option4}`}
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
            resultStore.save();
          }}
        >
          Submit Paper
        </Link>
      </Card>
    );
  })
);
