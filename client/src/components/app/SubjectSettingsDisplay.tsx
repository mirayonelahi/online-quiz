import * as React from 'react';
import { observer } from 'mobx-react';
import {
   Card, Elevation, Popover, PopoverInteractionKind, Tooltip, Button, FormGroup, InputGroup
   } from '@blueprintjs/core';
import { SubjectStore } from 'src/models/SubjectStore';
 
export const SubjectSettingsDisplay = observer((props: { subjectStore: typeof SubjectStore.Type }) => {
    return ( 
      <Card elevation={Elevation.ONE} className="w-50 subjectSettingsDisplay overflow-auto pa2">
        <div className="bp3-control-group">
          <div className="bp3-select">
            <select>
              <option value="1">Subject</option>
              <option value="2">Code</option>
            </select>
          </div>
          <div className="bp3-input-group bp3-fill">
            <span className="bp3-icon bp3-icon-search"/>
            <input type="text" className="bp3-input" placeholder="Search" />
          </div>
        </div>
        <p className="f6 tc mt2 b bg-light-green br2 pa1">List of Subject</p>
        <table 
          className="bp3-html-table bp3-html-table-bordered
            bp3-html-table-striped bp3-interactive bp3-html-table-condensed w-100 ba b--light-silver"
        >
          <thead>
            <tr>
              <th className="f7">#</th>
              <th className="f7">Id</th>
              <th className="f7">Subjects</th>
              <th className="f7">Code</th>
              <th className="f7"/>
            </tr>
          </thead>
          <tbody>
              {
                props.subjectStore.subjects.map((subject: any, index: number) => (
                  <tr>
                    <td className="f7">{index}</td>
                    <td className="f7">{subject.id}</td>
                    <td className="f7">{subject.title}</td>
                    <td className="f7">{subject.code}</td>
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
                                props.subjectStore.Subject.setIdTitleCode(subject.id, subject.title, subject.code);
                              }}
                            />
                          </Tooltip>
                          <div className="w-100">
                            <div className="bp3-control-group pa3 subjectUpdateForm flex flex-column">
                              <p className="mb2 b f5 bg-light-green br3 pa1">Edit Subject</p>
                              <div className="bp3-input-group w-100 subjectUpdateFormUpper">
                                <FormGroup
                                  label="Title"
                                  labelFor="title"
                                >
                                  <InputGroup
                                    id="title"
                                    placeholder="Zoology"
                                    leftIcon="book"
                                    className="width25vw"
                                    value={props.subjectStore.Subject.title}
                                    onChange={(e: any) => {
                                      props.subjectStore.Subject.setTitle(e.target.value);
                                    }}
                                  />
                                </FormGroup>
                              </div>
                              <div className="subjectUpdateFormLower">
                                <div className="bp3-input-group w-100">
                                  <FormGroup
                                    label="Code"
                                    labelFor="code"
                                    labelInfo="(required)"
                                  >
                                    <InputGroup
                                      id="code"
                                      placeholder="1102"
                                      leftIcon="numerical"
                                      className="width25vw"
                                      value={props.subjectStore.Subject.code}
                                      onChange={(e: any) => {
                                        props.subjectStore.Subject.setCode(e.target.value);
                                      }}
                                    />
                                  </FormGroup>
                                </div>
                                <Button 
                                  type="submit"
                                  className="bp3-button bp3-icon-inbox-update
                                    bp3-intent-success bp3-popover-dismiss pointer
                                    br2Important mv1 bg-animate w-100 noOutline"
                                  onClick={(e: any) => {
                                    props.subjectStore.Subject.onUpdate(props.subjectStore.Subject.id!);
                                    props.subjectStore.getAll();
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
                              props.subjectStore.Subject.onDelete(subject.id);
                              props.subjectStore.getAll();
                            }}
                          />
                          </Tooltip>
                      </div>
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </Card>
    );
  }
);
 