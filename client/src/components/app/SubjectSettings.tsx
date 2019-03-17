import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
  FormGroup,
  Button,
  InputGroup,
  Popover,
  PopoverInteractionKind,
  FileInput,
  Tooltip,
} from '@blueprintjs/core';
import { Subject } from 'src/models/Subject';

export const SubjectSettings = observer(
  (props: { subject: typeof Subject.Type }) => {
    return (
      <Card elevation={Elevation.THREE} className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Subject Settings</h2>
        <Card interactive={true} elevation={Elevation.TWO} className="w-100 flex">
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
                  <th className="f7">Subjects</th>
                  <th className="f7">Code</th>
                  <th className="f7"/>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="f7">1</td>
                  <td className="f7">Botany</td>
                  <td className="f7">1102</td>
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
                            // onClick={(e: any) => {
                            // }}
                          >
                            {/* <span className="bp3-icon-edit"/> */}
                          </Button>
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
                                  />
                                </FormGroup>
                              </div>
                              <Button 
                                type="submit"
                                className="bp3-button bp3-icon-inbox-update
                                  bp3-intent-success bp3-popover-dismiss pointer
                                  br2Important mv1 bg-animate w-100 noOutline"
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
                          // onClick={(e: any) => {
                          // }}
                        />
                        </Tooltip>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Card>
      </Card >
    );
  }
);
