import * as React from 'react';
import { observer } from 'mobx-react';
import {
   Card, Elevation, Popover, PopoverInteractionKind, Tooltip, Button, FormGroup, InputGroup
   } from '@blueprintjs/core';

export const QuestionBankDisplay = observer(
  () => {
    return (
      <Card elevation={Elevation.ONE} className="w-50 quesBankDisplay overflow-auto pa2">
        <div className="bp3-control-group">
          <div className="bp3-select">
            <select>
              <option value="2">Question</option>
              <option value="1">Subject</option>
              <option value="1">Id</option>
            </select>
          </div>
          <div className="bp3-input-group bp3-fill">
            <span className="bp3-icon bp3-icon-search"/>
            <input type="text" className="bp3-input" placeholder="Search" />
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
              <th className="f7"/>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="f7">1</td>
              <td className="f7">Higher Mathmatics</td>
              <td className="f7">eta answer</td>
              <td className="f7">5 is only divisible by 1 and 5</td>
              <td className="f7">Botany</td>
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
                      />
                    </Tooltip>
                    <div className="w-100">
                      <div className="bp3-control-group pa3 questionUpdateForm flex flex-column">
                        <p className="mb2 b f5 bg-light-green br3 pa1">Edit Question</p>
                        <div className="bp3-input-group w-100 questionUpdateFormUpper">
                          <FormGroup
                            label="Question"
                            labelFor="question"
                          >
                            <InputGroup
                              id="question"
                              placeholder="Whice one is prime number?"
                              leftIcon="document"
                              className="width35vw"
                            />
                          </FormGroup>
                        </div>
                        <div className="bp3-input-group w-100 questionUpdateFormUpper">
                          <FormGroup
                            label="Answer"
                            labelFor="answer"
                          >
                            <InputGroup
                              id="answer"
                              placeholder="5"
                              leftIcon="document-open"
                              className="width35vw"
                            />
                          </FormGroup>
                        </div>
                        <div className="bp3-input-group w-100 questionUpdateFormUpper">
                          <FormGroup
                            label="Explanataion"
                            labelFor="explanataion"
                          >
                            <InputGroup
                              id="explanataion"
                              placeholder="5 is only divisible by 1 and 5"
                              leftIcon="geosearch"
                              className="width35vw"
                            />
                          </FormGroup>
                        </div>
                        <div className="questionUpdateFormLower">
                          <div className="bp3-input-group w-100">
                            <FormGroup
                              label="Subject"
                              labelFor="subject"
                            >
                              <InputGroup
                                id="subject"
                                type="select"
                                placeholder="Higher Mathmatics"
                                leftIcon="book"
                                className="width35vw"
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
                    />
                  </Tooltip>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    );
  }
);
