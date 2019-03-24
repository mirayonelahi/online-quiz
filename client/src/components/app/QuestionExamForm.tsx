import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { InputGroup, Button } from '@blueprintjs/core';
import { Store } from 'src/models/Store';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const QuestionExamForm = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { questionExamStore, questionStore, examStore } = props.store!;
    return (
      <div className="questionExamForm">
        {questionExamStore.tempQuestionExams.map(
          (tempQuestionExam: any, index: number) => (
            <div key={index}>
              <div className="questionExamInputCard flex mb2">
                <div className="w-20 pr1">
                  <div className="bp3-select bp3-fill">
                    <select
                      value={tempQuestionExam.questionId}
                      onChange={(e: any) => {
                        e.preventDefault();
                        tempQuestionExam.setQuestionId(
                          parseInt(e.target.value, 10)
                        );
                        if (examStore.exam.id! > 0) {
                          tempQuestionExam.setExamId(examStore.exam.id);
                        } else {
                          if (examStore.exam.id! === 0) {
                            tempQuestionExam.setExamIdPlus1(
                              examStore.exams[examStore.exams.length - 1].id
                            );
                          } else if (examStore.exam.id === undefined || null) {
                            if (examStore.exams.length === 0) {
                              tempQuestionExam.setExamId(1);
                            } else if (examStore.exams.length !== 0) {
                              tempQuestionExam.setExamIdPlus1(
                                examStore.exams[examStore.exams.length - 1].id
                              );
                            }
                          }
                        }

                        if (
                          questionExamStore.tempQuestionExams[
                            questionExamStore.tempQuestionExams.length - 1
                          ].questionId !== 0
                        ) {
                          questionExamStore.pushInTempQuestionExams();
                        }
                      }}
                    >
                      <option value={0}>Choose Question</option>
                      {questionStore.questions.map(
                        (question: any, questionIndex: number) => (
                          <option key={questionIndex} value={question.id}>
                            {question.title}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                <div className="w-20 ph1">
                  <InputGroup
                    id="option1"
                    placeholder="Option 1"
                    leftIcon="numerical"
                    value={tempQuestionExam.option1}
                    onChange={(e: any) => {
                      e.preventDefault();
                      tempQuestionExam.setOption1(e.target.value);
                    }}
                  />
                </div>
                <div className="w-20 ph1">
                  <InputGroup
                    id="option2"
                    placeholder="Option 2"
                    leftIcon="book"
                    value={tempQuestionExam.option2}
                    onChange={(e: any) => {
                      e.preventDefault();
                      tempQuestionExam.setOption2(e.target.value);
                    }}
                  />
                </div>
                <div className="w-20 ph1">
                  <InputGroup
                    id="option3"
                    placeholder="1102"
                    leftIcon="numerical"
                    value={tempQuestionExam.option3}
                    onChange={(e: any) => {
                      e.preventDefault();
                      tempQuestionExam.setOption3(e.target.value);
                    }}
                  />
                </div>
                <div className="w-20 pl1">
                  <InputGroup
                    id="option4"
                    placeholder="Option 4"
                    leftIcon="numerical"
                    rightElement={
                      <Button
                        intent="danger"
                        minimal={true}
                        className={`${
                          index < questionExamStore.tempQuestionExams.length - 1
                            ? 'bp3-icon-delete'
                            : 'dn'
                        }`}
                        onClick={(e: any) => {
                          if (
                            index <
                            questionExamStore.tempQuestionExams.length - 1
                          ) {
                            e.preventDefault();
                            questionExamStore.deleteFromTempQuestionExams(
                              index
                            );
                          }
                        }}
                      />
                    }
                    value={tempQuestionExam.option4}
                    onChange={(e: any) => {
                      e.preventDefault();
                      tempQuestionExam.setOption4(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    );
  })
);
