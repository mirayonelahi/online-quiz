import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card, Button, Elevation
} from '@blueprintjs/core';

export const LiveExamAnswerSheet = observer(
  () => {
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">This is Live Exam Paper</h2>
        <div className="answerSheet">
          <div className="answerSheetHeader flex">
            <p className="tl f6 w-30 ">Date: </p>
            <div className="w-40">
              <p className="tc f4 mb0 ">exam.title</p>
              <p className="tc f6 mb3 ">exam.subject</p>
            </div>
            <p className="tr f6 w-30 ">Duration: </p>
          </div>
          <div className="answerSheetContent w-100 flex mv3">
            <div className="w-50 ph2">
              <Card className="pa3 mb2">
                <p className="f6 b">Question: </p>
                <label className="bp3-control bp3-checkbox">
                  <input type="checkbox" />
                  <span className="bp3-control-indicator" />
                  Option 1
                </label>
                <label className="bp3-control bp3-checkbox">
                  <input type="checkbox" />
                  <span className="bp3-control-indicator" />
                  Option 1
                </label>
                <label className="bp3-control bp3-checkbox">
                  <input type="checkbox" />
                  <span className="bp3-control-indicator" />
                  Option 3
                </label>
                <label className="bp3-control bp3-checkbox">
                  <input type="checkbox" />
                  <span className="bp3-control-indicator" />
                  Option 4
                </label>
              </Card>
            </div>
            <div className="w-50 ph2">
              <Card className="pa3 mb2">
                <p className="f6 b">Question: </p>
                <label className="bp3-control bp3-checkbox">
                  <input type="checkbox" />
                  <span className="bp3-control-indicator" />
                  Option 1
                </label>
                <label className="bp3-control bp3-checkbox">
                  <input type="checkbox" />
                  <span className="bp3-control-indicator" />
                  Option 1
                </label>
                <label className="bp3-control bp3-checkbox">
                  <input type="checkbox" />
                  <span className="bp3-control-indicator" />
                  Option 3
                </label>
                <label className="bp3-control bp3-checkbox">
                  <input type="checkbox" />
                  <span className="bp3-control-indicator" />
                  Option 4
                </label>
              </Card>
            </div>
          </div>
        </div>
        <Button
          icon="manually-entered-data"
          fill={true}
          intent="success"
          className="answerSheetButton"
        >
          Submit Paper
        </Button>
      </Card>
    );
  }
);
