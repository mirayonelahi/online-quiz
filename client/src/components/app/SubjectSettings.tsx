import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
  FormGroup,
  Button,
  TagInput,
  InputGroup
} from '@blueprintjs/core';
import { Subject } from 'src/models/Subject';

export const SubjectSettings = observer(
  (props: { subject: typeof Subject.Type }) => {
    return (
      <Card elevation={Elevation.THREE} className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Subject Settings</h2>
        <Card interactive={true} elevation={Elevation.TWO} className="w-100 flex">
          <form className="w-50 subjectSettingsForm">
            <div className="w-100 ph3">
              <FormGroup
                helperText="Enter Subject Title"
                label="Title"
                labelFor="title"
                labelInfo="(required)"
              >
                <TagInput
                  addOnBlur={true}
                  leftIcon="book"
                  addOnPaste={true}
                  separator=","
                  onChange={(values: string[]) => {
                    props.subject.setSubjects(values);
                  }}
                  placeholder="Biology, Zoology, Mathmatics"
                  rightElement={
                    <Button
                      icon="cross"
                      minimal={true}
                      onClick={(e: any) => {
                        props.subject.setSubjects([]);
                      }}
                    />
                  }
                  values={props.subject.subjects}
                />
              </FormGroup>
            </div>
            <div className="w-100 ph3">
              <FormGroup
                helperText="Enter subject code"
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
            <div className="w-100 ph3">
              <Button icon="add" fill={true} intent="success">
                Add Subject
              </Button>
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
            <p className="f6 tc mt2 b">List of Subjects</p>
            <table 
              className="bp3-html-table bp3-html-table-bordered
               bp3-html-table-striped bp3-interactive bp3-html-table-condensed w-100 ba b--light-silver"
            >
              <thead>
                <tr>
                  <th className="f7">#</th>
                  <th className="f7">Subject</th>
                  <th className="f7">Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="f7">1</td>
                  <td className="f7">Botany</td>
                  <td className="f7">1101</td>
                </tr>
                <tr>
                  <td className="f7">2</td>
                  <td className="f7">Zoology</td>
                  <td className="f7">1102</td>
                </tr>
                <tr>
                  <td className="f7">3</td>
                  <td className="f7">Higher Mathmatics</td>
                  <td className="f7">1108</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Card>
      </Card >
    );
  }
);
