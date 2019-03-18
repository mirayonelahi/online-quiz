import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card, Button, Elevation
} from '@blueprintjs/core';

export const LiveExamAnswerSheet = observer(
  () => {
    return (
      <Card interactive={true} elevation={Elevation.TWO} className="w-100">
        <div className="answerSheet">
          <div className="answerSheetHeader flex tc mt3 bg-light-green br3">
            <div className="w-30 flex flex-column justify-center">
              <div>
                <p className="tl pl2 f6 mb0">Date: </p>
                <p className="tl pl2 f6 mb0">Negative Mark: </p>
              </div>
            </div>
            <div className="w-40 mv3">
              <p className="tc f4 mb1 b">exam.title</p>
              <p className="tc f6 mb0 b">exam.subject</p>
            </div>
            <div className="w-30 flex flex-column justify-center">
            <div>
              <p className="tr pr2 f6 mb0">Duration: </p>
              <p className="tr pr2 f6 mb0">Time Left: </p>
            </div>
            </div>
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
