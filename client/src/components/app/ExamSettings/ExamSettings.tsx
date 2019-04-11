import * as React from 'react';
import { observer, inject } from 'mobx-react';
import {
  Card,
  Elevation,
  Button,
} from '@blueprintjs/core';
import { ExamSettingsForm } from './ExamSettingsForm';
import { ExamSettingsDisplay } from './ExamSettingsDisplay';
import { Store } from 'src/models/basics/Store';
interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const ExamSettings = inject('store')(observer(
  (props: InjecttedPageProps) => {
    const { examStore, controller, questionExamStore } = props.store!;
    return (
      <Card className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Exam Settings</h2>
        <Card interactive={true} elevation={Elevation.TWO} className="w-100">
          <div className="flex">
            <ExamSettingsForm />
            <ExamSettingsDisplay />
          </div>
          <div className="w-100 mt3 formSubmitDiv">
            <Button
              text={`${examStore.exam.id! > 0 ? 'Update Exam' : 'Add Exam'}`}
              icon="add"
              fill={true}
              intent={examStore.exam.id! > 0 ? 'primary' : 'success'}
              onClick={(e: any) => {
                if (examStore.exam.id! > 0) {
                  e.preventDefault();
                  examStore.exam.onUpdate(examStore.exam.id!);
                  controller.toggleExamSettingDisplayTable(controller.examSettingDisplayTable);
                  questionExamStore.save();
                  examStore.getAll();
                } else {
                  e.preventDefault();
                  examStore.exam.save();
                  controller.toggleExamSettingDisplayTable(controller.examSettingDisplayTable);
                  questionExamStore.save();
                  examStore.getAll();
                }
              }}
            />
          </div>
        </Card>
      </Card>
    );
  }
));
