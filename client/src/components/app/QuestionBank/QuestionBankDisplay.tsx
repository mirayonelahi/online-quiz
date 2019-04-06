import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
  Popover,
  PopoverInteractionKind,
  Tooltip,
  Button,
  FormGroup,
  InputGroup
} from '@blueprintjs/core';
import { QuestionStore } from 'src/models/QuestionStore';
import { SubjectStore } from 'src/models/SubjectStore';

export const QuestionBankDisplay = observer(
  (props: {
    questionStore: typeof QuestionStore.Type;
    subjectStore: typeof SubjectStore.Type;
  }) => {
    return (
      <Card
        elevation={Elevation.ONE}
        className="w-50 quesBankDisplay overflow-auto pa2"
      >
        <div className="bp3-control-group">
          <div className="bp3-select">
            <select
              name="searchPriority"
              id="searchPriority"
              placeholder="Select priority !!"
              onChange={(e: any) => {
                e.preventDefault();
                props.questionStore.searchStore.setsearchField(e.target.value);
                // console.log('searchField', props.todoStore.todoSearchStore.searchField);
                props.questionStore.onSearch(
                  props.questionStore.searchStore.searchField,
                  props.questionStore.searchStore.searchQuery
                );
              }}
            >
              <option value="title">Question</option>
              <option value="subject">Subject</option>
            </select>
          </div>
          <div className="bp3-input-group bp3-fill">
            <span className="bp3-icon bp3-icon-search" />
            <input
              className="bp3-input"
              id="searchQuery"
              name="searchQuery"
              type="text"
              placeholder="Search here"
              onChange={(e: any) => {
                e.preventDefault();
                props.questionStore.searchStore.setsearchQuery(e.target.value);
                // console.log('searchQuery', props.todoStore.todoSearchStore.searchQuery);
                props.questionStore.onSearch(
                  props.questionStore.searchStore.searchField,
                  props.questionStore.searchStore.searchQuery
                );
              }}
            />
          </div>
        </div>
        <p className="f6 tc mt2 b bg-light-green br2 pa1">List of Questions</p>
        <table
          className="bp3-html-table bp3-html-table-bordered
            bp3-html-table-striped bp3-interactive bp3-html-table-condensed w-100 ba b--light-silver"
        >
          <thead>
            <tr>
              <th className="f7">#</th>
              <th className="f7">Question</th>
              <th className="f7">Answer</th>
              <th className="f7">Explanation</th>
              <th className="f7">Subject</th>
              <th className="f7" />
            </tr>
          </thead>
          <tbody>
            {props.questionStore.questions.map(
              (question: any, index: number) => (
                <tr key={index}>
                  <td className="f7">{index + 1}</td>
                  <td className="f7">{question.title}</td>
                  <td className="f7">{question.answer}</td>
                  <td className="f7">{question.explanation}</td>
                  <td className="f7">{question.subject.title}</td>
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
                              props.questionStore.question.setIdTitleAnswerExplanationSubjectId(
                                question.id,
                                question.title,
                                question.answer,
                                question.explanation,
                                question.subject.id
                              );
                            }}
                          />
                        </Tooltip>
                        <div className="w-100">
                          <div className="bp3-control-group pa3 questionUpdateForm flex flex-column">
                            <p className="mb2 b f5 bg-light-green br3 pa1">
                              Edit Question
                            </p>
                            <div className="bp3-input-group w-100 questionUpdateFormUpper">
                              <FormGroup label="Question" labelFor="question">
                                <InputGroup
                                  id="question"
                                  placeholder="Whice one is prime number?"
                                  leftIcon="document"
                                  className="width35vw"
                                  value={props.questionStore.question.title}
                                  onChange={(e: any) => {
                                    props.questionStore.question.setTitle(
                                      e.target.value
                                    );
                                  }}
                                />
                              </FormGroup>
                            </div>
                            <div className="bp3-input-group w-100 questionUpdateFormUpper">
                              <FormGroup label="Answer" labelFor="answer">
                                <InputGroup
                                  id="answer"
                                  placeholder="5"
                                  leftIcon="document-open"
                                  className="width35vw"
                                  value={props.questionStore.question.answer}
                                  onChange={(e: any) => {
                                    props.questionStore.question.setAnswer(
                                      e.target.value
                                    );
                                  }}
                                />
                              </FormGroup>
                            </div>
                            <div className="bp3-input-group w-100 questionUpdateFormUpper">
                              <FormGroup
                                label="Explanation"
                                labelFor="explanation"
                              >
                                <InputGroup
                                  id="explanation"
                                  placeholder="5 is only divisible by 1 and 5"
                                  leftIcon="geosearch"
                                  className="width35vw"
                                  value={
                                    props.questionStore.question.explanation
                                  }
                                  onChange={(e: any) => {
                                    props.questionStore.question.setExplanation(
                                      e.target.value
                                    );
                                  }}
                                />
                              </FormGroup>
                            </div>
                            <div className="questionUpdateFormLower">
                              <div className="bp3-input-group w-100">
                                <FormGroup label="Subject" labelFor="subject">
                                  <div className="bp3-select bp3-fill">
                                    <select
                                      value={
                                        props.questionStore.question.subjectId
                                      }
                                      onChange={(e: any) => {
                                        e.preventDefault();
                                        props.questionStore.question.setSubjectId(
                                          parseInt(e.target.value, 10)
                                        );
                                      }}
                                    >
                                      {props.subjectStore.subjects.map(
                                        (
                                          subject: any,
                                          subjectIndex: number
                                        ) => (
                                          <option
                                            key={subjectIndex}
                                            value={subject.id}
                                          >
                                            {subject.title}
                                          </option>
                                        )
                                      )}
                                    </select>
                                  </div>
                                </FormGroup>
                              </div>
                              <Button
                                type="submit"
                                className="bp3-button bp3-icon-inbox-update
                              bp3-intent-success bp3-popover-dismiss pointer
                              br2Important mv1 bg-animate w-100 noOutline"
                                onClick={(e: any) => {
                                  props.questionStore.question.onUpdate(
                                    props.questionStore.question.id!
                                  );
                                  props.questionStore.getAll();
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
                            props.questionStore.question.onDelete(question.id);
                            props.questionStore.getAll();
                          }}
                        />
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
    );
  }
);
