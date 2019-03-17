import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
} from '@blueprintjs/core';
import { Subject } from 'src/models/Subject';
import { SubjectSettingsForm } from './SubjectSettingsForm';
import { SubjectSettingsDisplay } from './SubjectSettingsDisplay';

export const SubjectSettings = observer(
  (props: { subject: typeof Subject.Type }) => {
    return (
      <Card elevation={Elevation.THREE} className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Subject Settings</h2>
        <Card interactive={true} elevation={Elevation.TWO} className="w-100 flex">
          <SubjectSettingsForm />
          <SubjectSettingsDisplay />
        </Card>
      </Card >
    );
  }
);
