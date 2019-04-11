import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Card, Elevation } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { Store } from 'src/models/basics/Store';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const LiveExamResult = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { examStore, resultStore } = props.store!;
    const resultGroups: any = [];
    resultStore.results.filter(function (result: any) {
      var i = resultGroups.findIndex((x: any) => x.examId === result.examId);
      if (i <= -1) {
        resultGroups.push({ id: result.id, examId: result.examId });
      }
      return null;
    });
    return (
      <Card className="w-100">
        <h2 className="f2 tc mt3 bg-light-green br3">Result</h2>
        <div className="liveExamResultButtonGroup w-100 flex flex-wrap">
          {resultGroups.map((resultGroup: any, index: number) => (
            examStore.exams.filter((exam: any) => exam.id === resultGroup.examId).map((exam: any) => (
              <Card
                key={index}
                interactive={true}
                elevation={Elevation.ONE}
                className="pointer noOutline pa3 ma3"
              >
                <Link
                  to="/liveExamResultSheet"
                  className="sidebarLinks"
                  onClick={(e: any) => {
                    examStore.exam.setIdTitleDurationSubjectIdDateNegativeMarkSubject(
                      exam.id, exam.title, exam.duration, exam.subjectId, exam.date, exam.negativeMark, exam.subject
                    );
                  }}
                >
                  <p className="b tl">Exam: {exam.title}</p>
                  <p className="tl">Subject: {exam.subject.title}</p>
                  <p className="tl">Negative Mark: {exam.negativeMark}</p>
                  <p className="tl">Date: {exam.date}</p>
                  <p className="mb0 tl">Duration: {exam.duration}</p>
                </Link>
              </Card>
            ))
          ))}
        </div>
      </Card>
    );
  })
);
