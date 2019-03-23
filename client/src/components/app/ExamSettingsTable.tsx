import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Tooltip } from '@blueprintjs/core';
import { Store } from 'src/models/Store';

interface InjecttedPageProps {
    store?: typeof Store.Type;
  }
export const ExamSettingsTable = inject('store')(observer((props: InjecttedPageProps) => {
    const { controller, examStore } = props.store!;
  return (
    <>
      <div className="bp3-control-group">
        <div className="bp3-select">
          <select>
            <option value="1">Title</option>
            <option value="2">Subject</option>
            <option value="3">Negative Mark</option>
          </select>
        </div>
        <div className="bp3-input-group bp3-fill">
          <span className="bp3-icon bp3-icon-search" />
          <input type="text" className="bp3-input" placeholder="Search" />
        </div>
      </div>
      <p className="f6 tc mt2 b bg-light-green br2 pa1">List of Exams</p>
      <table
        className="bp3-html-table bp3-html-table-bordered
            bp3-html-table-striped bp3-interactive bp3-html-table-condensed w-100 ba b--light-silver"
      >
        <thead>
          <tr>
            <th className="f7">#</th>
            <th className="f7">Title</th>
            <th className="f7">Subject</th>
            <th className="f7">Negative Mark</th>
            <th className="f7">Duration</th>
            <th className="f7">Date</th>
            <th className="f7" />
          </tr>
        </thead>
        <tbody>
          {
            examStore.exams.map((exam: any, index: number) => (
            <tr key={index}>
              <td className="f7">{index}</td>
              <td className="f7">{exam.title}</td>
              <td className="f7">{exam.subject.title}</td>
              <td className="f7">{exam.negativeMark}</td>
              <td className="f7">{exam.duration}</td>
              <td className="f7">{exam.date}</td>
              <td className="f7 paddingA0 flex justify-center">
                <Tooltip content="Edit" position="auto">
                  <button
                    className="bp3-button bp3-icon-edit bp3-minimal bg-animate noOutline"
                    onClick={(e: any) => {
                      e.preventDefault();
                      controller.toggleExamSettingDisplayTable(controller.examSettingDisplayTable);
                      examStore.exam.setIdTitleDurationSubjectIdDateNegativeMark(
                        exam.id, exam.title, exam.duration, exam.subjectId, exam.date, exam.negativeMark
                      );
                    }}
                  />
                </Tooltip>
                <Tooltip content="Delete" position="auto">
                  <button
                    className="bp3-button bp3-icon-delete bp3-minimal bg-animate noOutline"
                    onClick={(e: any) => {
                      e.preventDefault();
                      examStore.exam.onDelete(exam.id);
                      examStore.getAll();
                    }}
                  />
                </Tooltip>
              </td>
            </tr>
            ))
          }
          
        </tbody>
      </table>
    </>
  );
}));
