import * as React from 'react';
import { observer } from 'mobx-react';
import { FormGroup, InputGroup, Button, Popover, PopoverInteractionKind, Tooltip, FileInput } from '@blueprintjs/core';
import { SubjectStore } from 'src/models/SubjectStore';

export const SubjectSettingsForm = observer((props: { subjectStore: typeof SubjectStore.Type }) => {
    return ( 
        <form className="w-50 subjectSettingsForm flex flex-column">
          {props.subjectStore.tempSubjects.map((tempSubject: any, index: number) => (
            <div key={index}>
              <div className="subjectInputCard flex">
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
                      rightElement={
                        <Button
                          intent="danger"
                          minimal={true} 
                          className={`${index > 0 ? 'bp3-icon-delete' : 'dn'}`}
                          onClick={(e: any) => {
                            if (index > 0) {
                              e.preventDefault();
                              props.subjectStore.deleteFromTempSubjects(index);
                              console.log(props.subjectStore.tempSubjects.length);
                            }
                          }
                          }
                        />
                      }
                      value={tempSubject.title}
                      onChange={(e: any) => {
                        e.preventDefault();
                        tempSubject.setTitle(e.target.value);
                        if (props.subjectStore.tempSubjects[props.subjectStore.tempSubjects.length - 1].title !== '') {
                          props.subjectStore.pushInTempSubjects();
                          console.log(props.subjectStore.tempSubjects.length);
                        }
                      }}
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
                      value={tempSubject.code}
                      onChange={(e: any) => {
                        e.preventDefault();
                        tempSubject.setCode(e.target.value);
                      }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          ))
          }
          <div>
            <div className="w-100 ph3 flex">
              <Button
                icon="add"
                fill={true}
                intent="success"
                onClick={(e: any) => {
                  e.preventDefault();
                  props.subjectStore.save();
                }}
              >
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