import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
  FormGroup,
  Button,
  InputGroup,
  Popover,
  PopoverInteractionKind
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
            <div className="w-100 ph3">
              <Button icon="add" fill={true} intent="success">
                Add Subjects
              </Button>
            </div></div>
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
            <p className="f6 tc mt2 b">List of Subject</p>
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
                  <td className="f7 flex justify-center">
                    <div className="">
                      <Popover
                          interactionKind={PopoverInteractionKind.CLICK}
                          popoverClassName=""
                          className=""
                          position="auto"
                      >
                        <Button 
                          className="bp3-button bp3-icon-edit bp3-minimal bp3-popover-dismiss pointer
                            bg-animate noOutline"
                          // onClick={(e: any) => {
                          // }}
                        >
                          {/* <span className="bp3-icon-edit"/> */}
                        </Button>
                        <div className="w-100">
                          <div className="bp3-control-group pa3 subjectUpdateForm flex flex-column">
                            <p className="mb2 b f5">Edit this Subject</p>
                            <div className="bp3-input-group w-100 subjectUpdateFormUpper">
                              <span className="bp3-icon bp3-icon-book"/>
                              <input
                                type="text"
                                className="bp3-input"
                                placeholder="Edited title"
                                // value={
                                // }
                                // onChange={(e: any) => {
                                // }} 
                              />
                            </div>
                            <div className="subjectUpdateFormLower">
                              <div className="bp3-input-group w-100">
                                <span className="bp3-icon bp3-icon-numerical"/>
                                <input
                                  type="text"
                                  className="bp3-input w-100"
                                  placeholder="Edited code"
                                  // value={
                                  // }
                                  // onChange={(e: any) => {
                                  // }} 
                                />
                                </div>
                                <Button 
                                  type="submit"
                                  className="bp3-button bp3-icon-inbox-update
                                    bp3-intent-success bp3-popover-dismiss pointer
                                    br2 mv1 bg-animate w-100 noOutline"
                                  // onClick={(e: any) => {
                                  // }}
                                >
                                Update
                                </Button>
                            </div>
                          </div>
                        </div>
                      </Popover>
                      <button 
                        className="bp3-button bp3-icon-delete bp3-minimal bg-animate noOutline"
                        // onClick={(e: any) => {
                        // }}
                      />
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
