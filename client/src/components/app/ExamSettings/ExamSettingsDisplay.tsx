import { observer, inject } from 'mobx-react';
import { Store } from 'src/models/basics/Store';
import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { ExamSettingsTable } from './ExamSettingsTable';
import { ExamSettingsQPaper } from './ExamSettingsQPaper';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const ExamSettingsDisplay = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { controller } = props.store!;
    return (
      <Card
        elevation={Elevation.ONE}
        className="w-75 examSettingsDisplay overflow-auto"
      >
        <div className="examSettingDisplayControl flex">
          <p className="tr w-40">Question Paper</p>
          <label className="bp3-control bp3-switch bp3-large w-20 tc">
            <input
              className="noOutline"
              type="checkbox"
              checked={controller.examSettingDisplayTable}
              onChange={e => {
                controller.toggleExamSettingDisplayTable(
                  controller.examSettingDisplayTable
                );
              }}
            />
            <span className="bp3-control-indicator" />
          </label>
          <p className="tl w-40 ">Exam List</p>
        </div>
        {controller.examSettingDisplayTable ? (
          <ExamSettingsTable />
        ) : (
          <ExamSettingsQPaper />
        )}
      </Card>
    );
  })
);
