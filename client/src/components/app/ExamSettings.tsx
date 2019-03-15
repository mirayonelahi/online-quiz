import * as React from 'react';
import { observer } from 'mobx-react';
import { ExamStore } from 'src/models/ExamStore';
import {
  Card,
  Elevation,
  FormGroup,
  InputGroup,
  Button
} from '@blueprintjs/core';
import { DateInput, TimePicker, TimePrecision } from '@blueprintjs/datetime';

export const ExamSettings = observer(
  (props: { examStore: typeof ExamStore.Type }) => {
    return (
      <Card elevation={Elevation.THREE} className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Exam Settings</h2>
        <Card interactive={true} elevation={Elevation.TWO} className="w-100">
          <form className="w-100 examSettingsForm">
            <div className="w-50 ph3">
              <FormGroup
                helperText="Enter title"
                label="Title"
                labelFor="title"
                labelInfo="(required)"
              >
                <InputGroup
                  id="title"
                  placeholder="Title"
                  // value={props.examStore.exam.title}
                  // onChange={}
                />
              </FormGroup>
            </div>
            <div className="w-50 ph3">
              <FormGroup
                helperText="Enter subject"
                label="Subject"
                labelFor="subject"
                labelInfo="(required)"
              >
                <InputGroup id="subject" placeholder="Subject" />
              </FormGroup>
            </div>
            <div className="w-50 ph3">
              <FormGroup
                helperText="Enter duration of exam"
                label="Exam Duration"
                labelFor="duration"
                labelInfo="(required)"
              >
                <TimePicker
                  precision={TimePrecision.SECOND}
                  showArrowButtons={true}
                />
              </FormGroup>
            </div>
            <div className="w-50 ph3">
              <FormGroup
                helperText="Enter probable date of exam"
                label="Date"
                labelInfo="(required)"
              >
                <DateInput
                  formatDate={date => date.toLocaleString()}
                  onChange={e => e}
                  parseDate={str => new Date(str)}
                  placeholder={'M/D/YYYY'}
                />
              </FormGroup>
            </div>
            <div className="w-100 ph3">
              <Button
                icon="add"
                fill={true}
                intent="success"
                //  onClick=
              >
                Add Exam
              </Button>
            </div>
          </form>
        </Card>
      </Card>
    );
  }
);
