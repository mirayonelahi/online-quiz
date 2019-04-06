import * as React from 'react';
import { observer } from 'mobx-react';
import { Card, Elevation } from '@blueprintjs/core';
import { SubjectSettingsForm } from './SubjectSettingsForm';
import { SubjectSettingsDisplay } from './SubjectSettingsDisplay';
import { SubjectStore } from 'src/models/SubjectStore';

export const SubjectSettings = observer(
  (props: { subjectStore: typeof SubjectStore.Type }) => {
    return (
      <Card className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Subject Settings</h2>
        <Card
          interactive={true}
          elevation={Elevation.TWO}
          className="w-100 flex"
        >
          <SubjectSettingsForm subjectStore={props.subjectStore} />
          <SubjectSettingsDisplay subjectStore={props.subjectStore} />
        </Card>
      </Card>
    );
  }
);
