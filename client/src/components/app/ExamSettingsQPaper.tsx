import * as React from 'react';
import { observer } from 'mobx-react';

export const ExamSettingsQPaper = observer(
  () => {
    return (
      <div className="examSettingDisplayContent">
        <div className="questionHeader flex">
          <p className="tl f7 w-30">Date: </p>
          <div className="w-40">
            <p className="tc f5 mb0">exam.title</p>
            <p className="tc f7 mb3">exam.subject</p>
          </div>
          <p className="tr f7 w-30">Duration: </p>
        </div>
        <div>
          <p className="f7">List of Questions and answers</p>
        </div>
      </div>
    );
  }
);
