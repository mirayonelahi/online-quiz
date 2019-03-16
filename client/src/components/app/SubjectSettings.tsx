import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
  FormGroup,
  Button,
  InputGroup
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="f7">1</td>
                  <td className="f7">Botany</td>
                </tr>
                <tr>
                  <td className="f7">2</td>
                  <td className="f7">Zoology</td>
                </tr>
                <tr>
                  <td className="f7">3</td>
                  <td className="f7">Higher Mathmatics</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Card>
      </Card >
    );
  }
);
