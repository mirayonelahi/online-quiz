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
      <Card interactive={true} elevation={Elevation.TWO} className="w-100">
        <form className="w-100 questionBankForm">
          <div>
            <div className="w-50 ph3 dib">
              <FormGroup
                helperText="Enter Question"
                label="Question"
                labelFor="question"
                labelInfo="(required)"
              >
                <InputGroup
                  id="question"
                  placeholder="Whice one is prime number?"
                  leftIcon="document"
                  // value={props.examStore.exam.title}
                  // onChange={}
                />
              </FormGroup>
            </div>
            <div className="w-50 ph3 dib">
              <FormGroup
                helperText="Enter Answer"
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
          <div className="w-100 ph3">
            <FormGroup
              helperText="Enter Explanation"
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
      </Card>
    </Card>
  );
});
