import * as React from 'react';
import { observer } from 'mobx-react';
import {
  FormGroup,
  InputGroup,
  Button,
  Popover,
  PopoverInteractionKind,
  Tooltip,
  FileInput
} from '@blueprintjs/core';
import { QuestionStore } from 'src/models/question/QuestionStore';
import { SubjectStore } from 'src/models/subject/SubjectStore';

export const QuestionBankForm = observer(
  (props: {
    questionStore: typeof QuestionStore.Type;
    subjectStore: typeof SubjectStore.Type;
  }) => {
    return (
      <form className="w-50 questionBankForm">
        {props.questionStore.tempQuestions.map(
          (tempQuestion: any, index: number) => (
            <div key={index}>
              <div className="w-50 ph3 dib">
                <FormGroup
                  label="Question"
                  labelFor="question"
                  labelInfo="(required)"
                >
                  <InputGroup
                    id="question"
                    placeholder="Whice one is prime number?"
                    leftIcon="document"
                    rightElement={
                      <Button
                        intent="danger"
                        minimal={true}
                        className={`${index < props.questionStore.tempQuestions.length - 1 ? 'bp3-icon-delete' : 'dn'}`}
                        onClick={(e: any) => {
                          if (index < props.questionStore.tempQuestions.length - 1) {
                            e.preventDefault();
                            props.questionStore.deleteFromTempQuestions(index);
                          }
                        }}
                      />
                    }
                    value={tempQuestion.title}
                    onChange={(e: any) => {
                      e.preventDefault();
                      tempQuestion.setTitle(e.target.value);
                      if (
                        props.questionStore.tempQuestions[
                          props.questionStore.tempQuestions.length - 1
                        ].title !== ''
                      ) {
                        props.questionStore.pushInTempQuestions();
                      }
                    }}
                  />
                </FormGroup>
              </div>
              <div className="w-50 ph3 dib">
                <FormGroup
                  label="Answer"
                  labelFor="answer"
                  labelInfo="(required)"
                >
                  <InputGroup
                    id="answer"
                    placeholder="5"
                    leftIcon="document-open"
                    value={tempQuestion.answer}
                    onChange={(e: any) => {
                      e.preventDefault();
                      tempQuestion.setAnswer(e.target.value);
                    }}
                  />
                </FormGroup>
              </div>
              <div>
                <div className="w-50 ph3 dib">
                  <FormGroup label="Explanation" labelFor="explanataion">
                    <InputGroup
                      id="explanataion"
                      placeholder="5 is only divisible by 1 and 5"
                      leftIcon="geosearch"
                      value={tempQuestion.explanation}
                      onChange={(e: any) => {
                        e.preventDefault();
                        tempQuestion.setExplanation(e.target.value);
                      }}
                    />
                  </FormGroup>
                </div>
                <div className="w-50 ph3 dib">
                  <FormGroup label="Subject" labelFor="subject">
                    <div className="bp3-select bp3-fill">
                      <select
                        value={tempQuestion.subjectId}
                        onChange={(e: any) => {
                          e.preventDefault();
                          tempQuestion.setSubjectId(parseInt(e.target.value, 10));
                        }}
                      >
                        <option value={0}>Click to Choose</option>
                        {props.subjectStore.subjects.map((subject: any, subjectIndex: number) => (
                          <option
                            key={subjectIndex}
                            value={subject.id}
                          >
                            {subject.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </FormGroup>
                </div>
              </div>
            </div>
          )
        )}
        <div className="w-100 ph3 flex">
          <Button
            icon="add"
            fill={true}
            intent="success"
            onClick={(e: any) => {
              e.preventDefault();
              props.questionStore.save();
            }}
          >
            Add Question
          </Button>
          <Popover
            interactionKind={PopoverInteractionKind.CLICK}
            popoverClassName=""
            className=""
            position="auto"
          >
            <Tooltip content="Import Questions" position="auto">
              <Button
                className="bp3-button bp3-icon-import bp3-intent-primary bp3-popover-dismiss pointer
                      bg-animate noOutline"
              />
            </Tooltip>
            <div className="w-100">
              <div className="bp3-control-group pa3 flex flex-column">
                <p className="mb2 b f5 bg-light-green br3 pa1">
                  Import Questions
                </p>
                <div className="bp3-input-group w-100">
                  <FormGroup label="File" labelFor="file">
                    <FileInput id="file" text="Browse" />
                  </FormGroup>
                </div>
                <Button
                  type="submit"
                  className="bp3-button bp3-icon-import
                          bp3-intent-success bp3-popover-dismiss pointer
                          br2Important bg-animate w-100 noOutline"
                >
                  Import
                </Button>
              </div>
            </div>
          </Popover>
          <Popover
            interactionKind={PopoverInteractionKind.CLICK}
            popoverClassName=""
            className=""
            position="auto"
          >
            <Tooltip content="Export Questions" position="auto">
              <Button
                className="bp3-button bp3-icon-export bp3-intent-primary bp3-popover-dismiss pointer
                      bg-animate noOutline"
              />
            </Tooltip>
            <div className="w-100">
              <div className="bp3-control-group pa3 flex flex-column">
                <p className="mb2 b f5 bg-light-green br3 pa1">
                  Export Questions
                </p>
                <div className="bp3-input-group w-100">
                  <FormGroup label="File" labelFor="file">
                    <FileInput id="file" text="Browse" />
                  </FormGroup>
                </div>
                <Button
                  type="submit"
                  className="bp3-button bp3-icon-export
                        bp3-intent-success bp3-popover-dismiss pointer
                        br2Important bg-animate w-100 noOutline"
                >
                  Export
                </Button>
              </div>
            </div>
          </Popover>
        </div>
      </form>
    );
  }
);
