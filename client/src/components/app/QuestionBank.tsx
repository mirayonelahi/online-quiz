import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
} from '@blueprintjs/core';
import { QuestionBankForm } from './QuestionBankForm';
import { QuestionBankDisplay } from './QuestionBankDisplay';

export const QuestionBank = observer(() => {
  return (
    <Card elevation={Elevation.THREE} className="w-100">
      <h2 className="f2 tc mt3 bg-light-green br3">Question Bank</h2>
      <Card interactive={true} elevation={Elevation.TWO} className="w-100 flex">
        <QuestionBankForm />
        <QuestionBankDisplay />
      </Card>
    </Card>
  );
});
