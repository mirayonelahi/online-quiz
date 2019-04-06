import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { InputGroup, Button, Popover, PopoverInteractionKind, Tooltip, FormGroup } from '@blueprintjs/core';
import { Store } from 'src/models/Store';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const QuestionExamList = inject('store')(
    observer((props: InjecttedPageProps) => {
        const { questionExamStore, questionStore, examStore } = props.store!;
        return (
          <div className="questionExamList">
          <table
            className="bp3-html-table bp3-html-table-bordered
            bp3-html-table-striped bp3-interactive bp3-html-table-condensed w-100 ba b--light-silver"
          >
            <thead>
              <tr>
                <th className="f7">#</th>
                <th className="f7">Ques</th>
                <th className="f7">answer</th>
                <th className="f7">option 1</th>
                <th className="f7">option 2</th>
                <th className="f7">option 3</th>
                <th className="f7">option 4</th>
                <th className="f7" />
              </tr>
            </thead>
            <tbody>
              {questionExamStore.questionExams
                .filter(
                  (questionExam: any) =>
                    questionExam.examId === examStore.exam.id
                )
                .map((questionExam: any, questionExamIndex: number) => (
                  <tr key={questionExamIndex}>
                    <td className="f7">{questionExamIndex + 1}</td>
                    <td className="f7">{questionExam.question.title}</td>
                    <td className="f7">{questionExam.question.answer}</td>
                    <td className="f7">{questionExam.option1}</td>
                    <td className="f7">{questionExam.option2}</td>
                    <td className="f7">{questionExam.option3}</td>
                    <td className="f7">{questionExam.option4}</td>
                    <td className="f7 paddingA0 flex justify-center">
                      <div className="">
                        <Popover
                          interactionKind={PopoverInteractionKind.CLICK}
                          popoverClassName=""
                          className=""
                          position="auto"
                        >
                          <Tooltip content="Edit" position="auto">
                            <Button
                              className="bp3-button bp3-icon-edit bp3-minimal bp3-popover-dismiss pointer
                            bg-animate noOutline"
                              onClick={(e: any) => {
                                questionExamStore.questionExam.setIdQuestionIdOption1Option2Option3Option4ExamId(
                                  questionExam.id,
                                  questionExam.questionId,
                                  questionExam.option1,
                                  questionExam.option2,
                                  questionExam.option3,
                                  questionExam.option4,
                                  questionExam.examId
                                );
                              }}
                            />
                          </Tooltip>
                          <div className="w-100">
                            <div className="bp3-control-group pa3 flex flex-column">
                              <p className="mb2 b f5 bg-light-green br3 pa1">
                                Edit Question
                              </p>
                              <div className="bp3-input-group w-100">
                                <FormGroup label="Question" labelFor="question">
                                  <div className="bp3-select bp3-fill">
                                    <select
                                      id="question"
                                      value={questionExamStore.questionExam.questionId}
                                      onChange={(e: any) => {
                                        e.preventDefault();
                                        questionExamStore.questionExam.setQuestionId(
                                          parseInt(e.target.value, 10)
                                        );
                                      }}
                                    >
                                      {questionStore.questions.map(
                                        (question: any, questionIndex: number) => (
                                          <option key={questionIndex} value={question.id}>
                                            {question.title}
                                          </option>
                                        )
                                      )}
                                    </select>
                                  </div>
                                </FormGroup>
                              </div>
                              <div className="bp3-input-group w-100">
                                <FormGroup label="Option 1" labelFor="option1">
                                  <InputGroup
                                    id="option1"
                                    placeholder="Option 1"
                                    leftIcon="document-open"
                                    className="width35vw"
                                    value={questionExamStore.questionExam.option1}
                                    onChange={(e: any) => {
                                      questionExamStore.questionExam.setOption1(
                                        e.target.value
                                      );
                                    }}
                                  />
                                </FormGroup>
                              </div>
                              <div className="bp3-input-group w-100">
                                <FormGroup
                                  label="Option 2"
                                  labelFor="option2"
                                >
                                  <InputGroup
                                    id="option2"
                                    placeholder="Option 2"
                                    leftIcon="geosearch"
                                    className="width35vw"
                                    value={questionExamStore.questionExam.option2}
                                    onChange={(e: any) => {
                                      questionExamStore.questionExam.setOption2(
                                        e.target.value
                                      );
                                    }}
                                  />
                                </FormGroup>
                              </div>
                              <div className="bp3-input-group w-100">
                                <FormGroup
                                  label="Option 3"
                                  labelFor="option3"
                                >
                                  <InputGroup
                                    id="option3"
                                    placeholder="Option 3"
                                    leftIcon="geosearch"
                                    className="width35vw"
                                    value={questionExamStore.questionExam.option3}
                                    onChange={(e: any) => {
                                      questionExamStore.questionExam.setOption3(
                                        e.target.value
                                      );
                                    }}
                                  />
                                </FormGroup>
                              </div>
                              <div className="bp3-input-group w-100">
                                <FormGroup
                                  label="Option 4"
                                  labelFor="option4"
                                >
                                  <InputGroup
                                    id="option4"
                                    placeholder="Option 4"
                                    leftIcon="geosearch"
                                    className="width35vw"
                                    value={questionExamStore.questionExam.option4}
                                    onChange={(e: any) => {
                                      questionExamStore.questionExam.setOption4(
                                        e.target.value
                                      );
                                    }}
                                  />
                                </FormGroup>
                              </div>
                              <div className="">
                                <Button
                                  type="submit"
                                  className="bp3-button bp3-icon-inbox-update
                                bp3-intent-primary bp3-popover-dismiss pointer
                                br2Important mv1 bg-animate w-100 noOutline"
                                  onClick={(e: any) => {
                                    questionExamStore.questionExam.onUpdate(
                                      questionExamStore.questionExam.id!
                                    );
                                    questionExamStore.getAll();
                                  }}
                                >
                                  Update
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Popover>
                        <Tooltip content="Delete" position="auto">
                          <button
                            className="bp3-button bp3-icon-delete bp3-minimal bg-animate noOutline"
                            onClick={(e: any) => {
                              e.preventDefault();
                              questionExamStore.questionExam.onDelete(
                                questionExam.id
                              );
                              questionExamStore.getAll();
                            }}
                          />
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        );
    }
    )
    );
