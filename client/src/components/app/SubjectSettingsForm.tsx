import * as React from 'react';
import { observer } from 'mobx-react';
import { FormGroup, InputGroup, Button, Popover, PopoverInteractionKind, Tooltip, FileInput } from '@blueprintjs/core';

export const SubjectSettingsForm = observer(() => {
    return ( 
        <form className="w-50 subjectSettingsForm flex flex-column">
          <div className="flex">
            <div className="w-50 ph3">
              <FormGroup
                label="Title"
                labelFor="title"
                labelInfo="(required)"
              >
                <InputGroup
                  id="title"
                  placeholder="Zoology"
                  leftIcon="book"
                />
              </FormGroup>
            </div>
            <div className="w-50 ph3">
              <FormGroup
                label="Code"
                labelFor="code"
                labelInfo="(required)"
              >
                <InputGroup
                  id="code"
                  placeholder="1102"
                  leftIcon="numerical"
                />
              </FormGroup>
            </div>
          </div>
          <div>
            <div className="w-100 ph3 flex">
              <Button icon="add" fill={true} intent="success">
                Add Subjects
              </Button>
              <Popover
                interactionKind={PopoverInteractionKind.CLICK}
                popoverClassName=""
                className=""
                position="auto"
              >
                <Tooltip content="Import Subjects" position="auto">
                  <Button 
                    className="bp3-button bp3-icon-import bp3-intent-primary bp3-popover-dismiss pointer
                      bg-animate noOutline"
                  >
                    {/* <span className="bp3-icon-edit"/> */}
                  </Button>
                </Tooltip>
                  <div className="w-100">
                    <div className="bp3-control-group pa3 flex flex-column">
                      <p className="mb2 b f5 bg-light-green br3 pa1">Import Subjects</p>
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
                <Tooltip content="Export Subjects" position="auto">
                  <Button 
                    className="bp3-button bp3-icon-export bp3-intent-primary bp3-popover-dismiss pointer
                      bg-animate noOutline"
                  >
                    {/* <span className="bp3-icon-edit"/> */}
                  </Button>
                </Tooltip>
                <div className="w-100">
                  <div className="bp3-control-group pa3 flex flex-column">
                    <p className="mb2 b f5 bg-light-green br3 pa1">Export Subjects</p>
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
          </div>
        </form>
    );
  }
);