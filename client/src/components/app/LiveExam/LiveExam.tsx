import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Card, Elevation } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { Store } from 'src/models/basics/Store';
import { Exam } from 'src/models/exam/Exam';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const LiveExam = inject('store')(observer((props: InjecttedPageProps) => {
    const { examStore, questionExamStore, resultStore } = props.store!;
    return (
      <Card className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Live Exam</h2>
        <div className="liveExamButtonGroup w-100 flex flex-wrap">
          {examStore.exams.map((exam: any, index: number) => (
            <Card
              key={index}
              interactive={true}
              elevation={Elevation.ONE}
              className="pointer noOutline pa3 ma3"
            >
              <Link
                to="/liveExamAnswerSheet"
                className="sidebarLinks"
                onClick={(e: any) => {
                  examStore.exam.setIdTitleDurationSubjectIdDateNegativeMarkSubject(
                    exam.id, exam.title, exam.duration, exam.subjectId, exam.date, exam.negativeMark, exam.subject
                  );
                  resultStore.pushInTempResults(questionExamStore.questionExams.filter(
                    (questionExam: any) => questionExam.examId === examStore.exam.id
                  ).length);
                  const examStartTime: any = new Date();
                  localStorage.examStartTime = examStartTime;
                  const localExam: typeof Exam.Type = examStore.exam;
                  localStorage.localExam = JSON.stringify(localExam);
                  const localTempResults: any = resultStore.tempResults;
                  localStorage.localTempResults = JSON.stringify(localTempResults);
                  localStorage.setItem('examFinished', JSON.stringify(false));
                  console.log(localStorage.examFinished);
                }}
              >
                <p className="b tl">Exam: {exam.title}</p>
                <p className="tl">Subject: {exam.subject.title}</p>
                <p className="tl">Negative Mark: {exam.negativeMark}</p>
                <p className="tl">Date: {exam.date}</p>
                <p className="mb0 tl">Duration: {exam.duration}</p>
              </Link>
            </Card>
          ))}
        </div>
      </Card>
    );
  })
);
