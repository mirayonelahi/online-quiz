import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
  Button
} from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export const LiveExam = observer(
  () => {
    return (
      <Card className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Live Exam</h2>
        <Card interactive={true} elevation={Elevation.ONE} className="w-100">
          <p className="f5 b">Subject Name</p>
          <div className="liveExamButtonGroup">
            <Button 
              className="bp3-button pointer
                bg-animate noOutline pa3"
            >
              <Link to="/liveExamAnswerSheet" className="sidebarLinks">
                <p className="b">Exam Title</p>
                <p>Subject</p>
                <p>Negative Marking</p>
                <p>Date</p>
                <p className="mb0">Duration</p>
              </Link>
            </Button>
          </div>
        </Card>
      </Card>
    );
  }
);
