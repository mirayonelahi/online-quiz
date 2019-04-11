import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Card, Elevation } from '@blueprintjs/core';
import { Store } from 'src/models/basics/Store';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const LiveExamResultSheet = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { examStore, resultStore } = props.store!;
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="w-100">
        <div className="resultSheet">
        <div className="resultSheetHeader flex tc mt3 bg-light-green br3">
            <div className="w-30 flex flex-column justify-center">
              <div className="mv3">
                <p className="tl pl2 f6 mb0">Date: {examStore.exam.date}</p>
                <p className="tl pl2 f6 mb0">
                  Negative Mark: {examStore.exam.negativeMark}
                </p>
                <p className="tl pl2 f6 mb0">
                  Duration: {examStore.exam.duration}
                </p>
                <p className="tl pl2 f6 mb0">
                  Total: {resultStore.results.filter((result: any) =>
                      result.examId === examStore.exam.id).length}
                </p>
              </div>
            </div>
            <div className="w-40 flex flex-column justify-center">
              <p className="tc f3 mb1 b">{examStore.exam.title}</p>
              <p className="tc f6 mb1">Subject: {examStore.exam.subject!.title}</p>
            </div>
            <div className="w-30 flex flex-column justify-center">
              <div className="mv3">
                <p className="tr pr2 f6 mb0">
                  Obtained Marks: {resultStore.results.filter((result: any) =>
                      result.examId === examStore.exam.id).reduce(
                        (obtainedMark: number, curr: any) => obtainedMark + curr.marks, 0)
                      }
                </p>
                <p className="tr pr2 f6 mb0">
                  Not Answered: {resultStore.results.filter((result: any) =>
                      result.marks === 0 && result.examId === examStore.exam.id).length}
                </p>
                <p className="tr pr2 f6 mb0">
                  Wrong Answered: {resultStore.results.filter((result: any) =>
                      result.marks < 0 && result.examId === examStore.exam.id).length}
                </p>
                <p className="tr pr2 f6 mb0">
                  Correct Answered: {resultStore.results.filter((result: any) =>
                      result.marks > 0 && result.examId === examStore.exam.id).length}
                </p>
              </div>
            </div>
          </div>
          <div className="answerSheetContent w-100 flex mv3">
            <div className="w-100 ph2 flex flex-wrap">
              {resultStore.results
                .filter(
                  (result: any) =>
                    result.examId === examStore.exam.id
                )
                .map((result: any, index: number) => (
                  <Card key={index} className="pa3 ma2 w-48">
                    <p className="f6 b"><span>{index + 1}. </span> {result.question_exam.question.title}</p>
                    <div>
                      <div className="flex">
                        <div
                          className={`resultRadioDesign 
                          ${result.question_exam.option1 === result.givenAnswer ?
                            'bg-light-red ' : ''}
                          ${(result.question_exam.option1 === result.question_exam.question.answer)
                            && result.givenAnswer !== null ?
                              'bg-light-green ' : ''}
                          ${(result.question_exam.option1 === result.question_exam.question.answer)
                            && result.givenAnswer === null ?
                              'bg-yellow ' : ''}
                          `} 
                        />
                        <p> {result.question_exam.option1}</p>
                      </div>
                      <div className="flex">
                        <div
                          className={`resultRadioDesign 
                          ${result.question_exam.option2 === result.givenAnswer ?
                            'bg-light-red ' : ''}
                          ${(result.question_exam.option2 === result.question_exam.question.answer)
                            && result.givenAnswer !== null ?
                              'bg-light-green ' : ''}
                          ${(result.question_exam.option2 === result.question_exam.question.answer)
                              && result.givenAnswer === null ?
                              'bg-yellow ' : ''}
                          `}
                        />
                        <p> {result.question_exam.option2}</p>
                      </div>
                      <div className="flex">
                        <div
                          className={`resultRadioDesign 
                          ${result.question_exam.option3 === result.givenAnswer ?
                            'bg-light-red ' : ''}
                          ${(result.question_exam.option3 === result.question_exam.question.answer)
                            && result.givenAnswer !== null ?
                              'bg-light-green ' : ''}
                          ${(result.question_exam.option3 === result.question_exam.question.answer)
                              && result.givenAnswer === null ?
                              'bg-yellow ' : ''}
                          `}
                        />
                        <p> {result.question_exam.option3}</p>
                      </div>
                      <div className="flex">
                        <div
                          className={`resultRadioDesign 
                          ${result.question_exam.option4 === result.givenAnswer ?
                            'bg-light-red ' : ''}
                          ${(result.question_exam.option4 === result.question_exam.question.answer)
                            && result.givenAnswer !== null ?
                              'bg-light-green ' : ''}
                          ${(result.question_exam.option4 === result.question_exam.question.answer)
                              && result.givenAnswer === null ?
                              'bg-yellow ' : ''}
                          `}
                        />
                        <p> {result.question_exam.option4}</p>
                      </div>
                    </div>
                    <p className="f6">
                      <span className="b">Explanation: </span> {result.question_exam.question.explanation}
                    </p>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </Card>
    );
  })
);
