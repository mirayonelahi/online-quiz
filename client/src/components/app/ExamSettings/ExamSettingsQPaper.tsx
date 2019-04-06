import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Store } from 'src/models/Store';
import { QuestionExamForm } from '../QuestionExam/QuestionExamForm';
import { QuestionExamList } from '../QuestionExam/QuestionExamList';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const ExamSettingsQPaper = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { examStore } = props.store!;
    return (
      <div className="examSettingDisplayContent">
        <div className="questionExamHeader flex">
          <p className="tl f7 w-30">Date: {examStore.exam.date}</p>
          <div className="w-40">
            <p className="tc f5 mb0">{examStore.exam.title}</p>
            <p className="tc f7 mb3">Negative Mark: {examStore.exam.negativeMark}</p>
          </div>
          <p className="tr f7 w-30">Duration: {examStore.exam.duration} minutes</p>
        </div>
        <QuestionExamForm />
        <QuestionExamList />
      </div> 
    );
  })
);
