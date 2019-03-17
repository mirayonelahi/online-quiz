import * as React from 'react';
import { observer } from 'mobx-react';
import { FormGroup, InputGroup, Button, Popover, PopoverInteractionKind, Tooltip, FileInput } from '@blueprintjs/core';

export const QuestionBankForm = observer(
  () => {
    return (
      <form className="w-50 questionBankForm">
        <div>
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
              />
            </FormGroup>
          </div>
        </div>
        <div>
          <div className="w-50 ph3 dib">
            <FormGroup
              label="Explanataion"
              labelFor="explanataion"
            >
              <InputGroup
                id="explanataion"
                placeholder="5 is only divisible by 1 and 5"
                leftIcon="geosearch"
              />
            </FormGroup>
          </div>
          <div className="w-50 ph3 dib">
            <FormGroup
              label="Subject"
              labelFor="subject"
            >
              <InputGroup
                id="subject"
                type="select"
                placeholder="Higher Mathmatics"
                leftIcon="book"
              />
            </FormGroup>
          </div>
        </div>
        <div className="w-100 ph3 flex">
          <Button
            icon="add"
            fill={true}
            intent="success"
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
                  <p className="mb2 b f5 bg-light-green br3 pa1">Import Questions</p>
                  <div className="bp3-input-group w-100">
                    <FormGroup
                      label="File"
                      labelFor="file"
                    >
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
                <p className="mb2 b f5 bg-light-green br3 pa1">Export Questions</p>
                <div className="bp3-input-group w-100">
                  <FormGroup
                      label="File"
                      labelFor="file"
                  >
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
