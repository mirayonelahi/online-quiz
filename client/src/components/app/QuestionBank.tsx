import * as React from 'react';
import { observer } from 'mobx-react';
import {
  Card,
  Elevation,
} from '@blueprintjs/core';
import { QuestionBankForm } from './QuestionBankForm';
import { QuestionBankDisplay } from './QuestionBankDisplay';
import { QuestionStore } from 'src/models/QuestionStore';
import { SubjectStore } from 'src/models/SubjectStore';

export const QuestionBank = observer((
  props: {questionStore: typeof QuestionStore.Type; subjectStore: typeof SubjectStore.Type }
) => {
  return (
    <Card className="w-100">
      <h2 className="f2 tc mt3 bg-light-green br3">Question Bank</h2>
      <Card interactive={true} elevation={Elevation.TWO} className="w-100 flex">
        <QuestionBankForm questionStore={props.questionStore} subjectStore={props.subjectStore} />
        <QuestionBankDisplay questionStore={props.questionStore} subjectStore={props.subjectStore} />
      </Card>
    </Card>
  );
});
