import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
  FormGroup,
  InputGroup,
  Button
} from '@blueprintjs/core';

export const QuestionBank = observer(() => {
  return (
    <Card elevation={Elevation.THREE} className="w-100">
      <h2 className="f2 tc mt3 bg-light-green br3">Question Bank</h2>
      <Card interactive={true} elevation={Elevation.TWO} className="w-100 flex">
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
          <div className="w-100 ph3">
            <Button
              icon="add"
              fill={true}
              intent="success"
            >
              Add Question
            </Button>
          </div>
        </form>
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
          <p className="f6 tc mt2 b">List of Questions</p>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="f7">1</td>
                <td className="f7">Higher Mathmatics</td>
                <td className="f7">eta answer</td>
                <td className="f7">5 is only divisible by 1 and 5</td>
                <td className="f7">Botany</td>
              </tr>
              <tr>
                <td className="f7">2</td>
                <td className="f7">Zoology</td>
                <td className="f7">eta arekta</td>
                <td className="f7">None</td>
                <td className="f7">Zoology</td>
              </tr>
              <tr>
                <td className="f7">3</td>
                <td className="f7">Botany</td>
                <td className="f7">aita oita</td>
                <td className="f7">None</td>
                <td className="f7">Higher Mathmatics</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </Card>
    </Card>
  );
});
