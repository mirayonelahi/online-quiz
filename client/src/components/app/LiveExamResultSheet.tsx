import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Card, Elevation } from '@blueprintjs/core';
import { Store } from 'src/models/Store';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const LiveExamResultSheet = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { examStore, questionExamStore, resultStore } = props.store!;
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="w-100">
        <div className="resultSheet">
        <div className="resultSheetHeader flex tc mt3 bg-light-green br3">
            <div className="w-30 flex flex-column justify-center">
              <div className="mv3">
                <p className="tr pl2 f6 mb0">Date: {examStore.exam.date}</p>
                <p className="tl pl2 f6 mb0">
                  Negative Mark: {examStore.exam.negativeMark}
                </p>
                <p className="tr pl2 f6 mb0">
                  Duration: {examStore.exam.duration}
                </p>
                <p className="tl pl2 f6 mb0">
                  Total: {questionExamStore.questionExams.filter((questionExam: any) =>
                      questionExam.examId === examStore.exam.id).length}
                </p>
              </div>
            </div>
            <div className="w-40 flex flex-column justify-center">
              <p className="tc f3 mb1 b">{examStore.exam.title}</p>
              {/* <p className="tc f6 mb1">Subject: {examStore.exam.subject!.title}</p> */}
            </div>
            <div className="w-30 flex flex-column justify-center">
              <div className="mv3">
                <p className="tl pr2 f6 mb0">
                  Obtained Marks: {questionExamStore.questionExams.filter((questionExam: any) =>
                      questionExam.examId === examStore.exam.id).length}
                </p>
                <p className="tl pr2 f6 mb0">
                  Not Answered: {questionExamStore.questionExams.filter((questionExam: any) =>
                      questionExam.examId === examStore.exam.id).length}
                </p>
                <p className="tl pr2 f6 mb0">
                  Wrong Answered: {questionExamStore.questionExams.filter((questionExam: any) =>
                      questionExam.examId === examStore.exam.id).length}
                </p>
                <p className="tl pr2 f6 mb0">
                  Correct Answered: {questionExamStore.questionExams.filter((questionExam: any) =>
                      questionExam.examId === examStore.exam.id).length}
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
                    {resultStore.tempResults[index].setQuestionExamId(questionExam.id!)}
                    <p className="f6 b"><span>{index + 1}. </span> {questionExam.question.title}</p>
                    <div>
                      Result
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </Card>
    );
  })
);
