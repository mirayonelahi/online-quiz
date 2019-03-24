import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Card, Button, Elevation, RadioGroup, Radio } from '@blueprintjs/core';
import { Store } from 'src/models/Store';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const LiveExamAnswerSheet = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { examStore, questionExamStore, resultStore } = props.store!;
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="w-100">
        <div className="answerSheet">
          <div className="answerSheetHeader flex tc mt3 bg-light-green br3">
            <div className="w-30 flex flex-column justify-center">
              <div>
                <p className="tl pl2 f6 mb0">Date: {examStore.exam.date}</p>
                <p className="tl pl2 f6 mb0">
                  Negative Mark: {examStore.exam.negativeMark}
                </p>
              </div>
            </div>
            <div className="w-40 mv3">
              <p className="tc f4 mb1 b">{examStore.exam.title}</p>
              {/* <p className="tc f6 mb0 b">
                exam.subject {examStore.exam.subject!.title}
              </p> */}
            </div>
            <div className="w-30 flex flex-column justify-center">
              <div>
                <p className="tr pr2 f6 mb0">
                  Duration: {examStore.exam.duration}
                </p>
                <p className="tr pr2 f6 mb0">Time Left: </p>
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
                    <p className="f6 b"><span>{index + 1}. </span> {questionExam.question.title}</p>
                    <RadioGroup
                      label="Meal Choice"
                      onChange={e => {
                        resultStore.getAll();
                      }}
                      selectedValue={resultStore.result.givenAnswer}
                    >
                      <Radio label={`${questionExam.option1}`} value={`${questionExam.option1}`} />
                      <Radio label={`${questionExam.option2}`} value={`${questionExam.option2}`} />
                      <Radio label={`${questionExam.option3}`} value={`${questionExam.option3}`} />
                      <Radio label={`${questionExam.option4}`} value={`${questionExam.option4}`} />
                    </RadioGroup>
                  </Card>
                ))}
            </div>
          </div>
        </div>
        <Button
          icon="manually-entered-data"
          fill={true}
          intent="success"
          className="answerSheetButton"
        >
          Submit Paper
        </Button>
      </Card>
    );
  })
);
