import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
  FormGroup,
  InputGroup,
  Button,
  NumericInput
} from '@blueprintjs/core';
import { DateInput, TimePicker, TimePrecision } from '@blueprintjs/datetime';
import { ExamSettingsQPaper } from './ExamSettingsQPaper';
import { ExamSettingsTable } from './ExamSettingsTable';
import { Controller } from 'src/models/Controller';

export const ExamSettings = observer(
  (props: {
    controller: typeof Controller.Type;
  }) => {
    return (
      <Card className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Exam Settings</h2>
        <Card interactive={true} elevation={Elevation.TWO} className="w-100">
          <div className="flex">
            <form className="w-25 examSettingsForm">
              <div className="w-100 pr3">
                <FormGroup
                  label="Title"
                  labelFor="title"
                  labelInfo="(required)"
                >
                  <InputGroup
                    id="title"
                    placeholder="ct03"
                    leftIcon="clipboard"
                  />
                </FormGroup>
              </div>
              <div className="w-100 pr3">
                <FormGroup
                  label="Subject"
                  labelFor="subject"
                  labelInfo="(required)"
                >
                  <InputGroup
                    id="subject"
                    placeholder="Zoology"
                    leftIcon="book"
                  />
                </FormGroup>
              </div>
              <div className="w-100 pr3 dib">
                <FormGroup
                  label="Negative Marking"
                  labelFor="negativeMarking"
                >
                  <NumericInput
                    id="negativeMarking"
                    max={0.00}
                    min={-5.00}
                    fill={true}
                    leftIcon="remove"
                    stepSize={.250}
                    value={0}
                  />
                </FormGroup>
              </div>
              <div className="w-100 pr3">
                <FormGroup
                  label="Date"
                  labelInfo="(required)"
                >
                  <DateInput
                    formatDate={date => date.toLocaleString()}
                    onChange={e => e}
                    parseDate={str => new Date(str)}
                    placeholder={'M/D/YYYY'}
                    className="w-100"
                  />
                </FormGroup>
              </div>
              <div className="w-100 pr3">
                <FormGroup
                  label="Duration"
                  labelFor="duration"
                  labelInfo="(required)"
                >
                  <TimePicker
                    precision={TimePrecision.SECOND}
                    showArrowButtons={true}
                  />
                </FormGroup>
              </div>
            </form>
            <Card elevation={Elevation.ONE} className="w-75 examSettingsDisplay overflow-auto">
              <div className="examSettingDisplayControl flex">
                <p className="tr w-40">Question Paper</p>
                <label className="bp3-control bp3-switch bp3-large w-20 tc">
                  <input
                    className="noOutline"
                    type="checkbox"
                    checked={props.controller.examSettingDisplayTable}
                    onChange={e => {
                      props.controller.toggleExamSettingDisplayTable(props.controller.examSettingDisplayTable);
                    }}
                  />
                  <span className="bp3-control-indicator" />
                </label>
                <p className="tl w-40 ">Exam List</p>
              </div>
              {props.controller.examSettingDisplayTable ? <ExamSettingsTable /> : <ExamSettingsQPaper />}
            </Card>
          </div>
          <div className="w-100 mt3 formSubmitDiv">
            <Button
              icon="add"
              fill={true}
              intent="success"
            >
              Add Exam
            </Button>
          </div>
        </Card>
      </Card>
    );
  }
);
