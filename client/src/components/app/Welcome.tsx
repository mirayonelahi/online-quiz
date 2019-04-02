import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
} from '@blueprintjs/core';

export const Welcome = observer(
  () => {
    return (
      <Card className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Welcome to Online Quiz</h2>
        <p className="f4 tc mt3">This is the place where you can improve yourself by practising more and more</p>
        <p className="f4 tc mt3">Get registered to participate in Live Exams and to get lecture sheets</p>
      </Card>
    );
  }
);
