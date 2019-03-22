import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { InputGroup, FormGroup, Button } from '@blueprintjs/core';
import { Store } from 'src/models/Store';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const ExamSettingsQPaper = inject('store')(observer(
  (props: InjecttedPageProps) => {
    const { questionExamStore, questionStore, examStore } = props.store!;
    return (
      <div className="examSettingDisplayContent">
        <div className="questionExamHeader flex">
          <p className="tl f7 w-30">Date: </p>
          <div className="w-40">
            <p className="tc f5 mb0">exam.title</p>
            <p className="tc f7 mb3">exam.subject</p>
          </div>
          <p className="tr f7 w-30">Duration: </p>
        </div>
        <div className="questionExamForm">
          {
            questionExamStore.tempQuestionExams.map((tempQuestionExam: any, index: number) => (
            <div key={index}>
              <div className="questionExamInputCard flex">
                <div className="w-20 ph3">
                  <FormGroup label="Question" labelFor="questionId">
                    <div className="bp3-select bp3-fill">
                      <select
                        value={tempQuestionExam.questionId}
                        onChange={(e: any) => {
                          e.preventDefault();
                          tempQuestionExam.setQuestionId(parseInt(e.target.value, 10));
                          if (
                            questionExamStore.tempQuestionExams[
                              questionExamStore.tempQuestionExams.length - 1
                            ].questionId !== 0
                          ) {
                            questionExamStore.pushInTempQuestionExams();
                          }
                        }}
                      >
                        <option value={0}>Click to Choose</option>
                        {questionStore.questions.map((question: any, questionIndex: number) => (
                          <option
                            key={questionIndex}
                            value={question.id}
                          >
                            {question.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </FormGroup>
                </div>
                <div className="w-20 ph3">
                  <FormGroup
                    label="Option 1"
                    labelFor="option1"
                    labelInfo="(required)"
                  >
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
                  </FormGroup>
                </div>
                <div className="w-20 ph3">
                  <FormGroup
                    label="Option 2"
                    labelFor="option2"
                    labelInfo="(required)"
                  >
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
                  </FormGroup>
                </div>
                <div className="w-20 ph3">
                  <FormGroup
                    label="Option 3"
                    labelFor="option3"
                    labelInfo="(required)"
                  >
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
                  </FormGroup>
                </div>
                <div className="w-20 ph3">
                  <FormGroup
                    label="Option 4"
                    labelFor="option4"
                    labelInfo="(required)"
                  >
                    <InputGroup
                      id="option4"
                      placeholder="Option 4"
                      leftIcon="numerical"
                      rightElement={
                        <Button
                          intent="danger"
                          minimal={true}
                          className={`${index < questionExamStore.tempQuestionExams.length - 1 ?
                             'bp3-icon-delete' : 'dn'}`}
                          onClick={(e: any) => {
                            if (index < questionExamStore.tempQuestionExams.length - 1) {
                              e.preventDefault();
                              questionExamStore.deleteFromTempQuestionExams(index);
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
                  </FormGroup>
                </div>
              </div>
            </div>
            ))
          }
          
        </div>
        <div  className="questionExamList">
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
                <th className="f7"/>
              </tr>
            </thead>
            <tbody>
              {
                questionExamStore.questionExams.filter(
                  (questionExam: any) => questionExam.examId === examStore.exam.id).map(
                    (questionExam: any, questionExamIndex: number) => (
                      <tr>
                      <td className="f7">{questionExamIndex}</td>
                      <td className="f7">{questionExam.question.title}</td>
                      <td className="f7">{questionExam.question.answer}</td>
                      <td className="f7">{questionExam.option1}</td>
                      <td className="f7">{questionExam.option2}</td>
                      <td className="f7">{questionExam.option3}</td>
                      <td className="f7">{questionExam.option4}</td>
                      <td className="f7">edit/delete
                      </td>
                    </tr>
                    )
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
));
