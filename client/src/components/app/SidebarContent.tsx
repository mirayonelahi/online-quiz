import * as React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ExamSettings } from './ExamSettings';
import { DataBank } from './DataBank';
import { SubjectSettings } from './SubjectSettings';
import { QuestionBank } from './QuestionBank';
import { Store } from 'src/models/Store';
import { Home } from './Home';
import { Sidebar } from './Sidebar';
import { Controller } from 'src/models/Controller';
import { LiveExam } from './LiveExam';
import { LiveExamAnswerSheet } from './LiveExamAnswerSheet';

export const SidebarContent = observer(
  (props: { controller: typeof Controller.Type; store: typeof Store.Type }) => {
    return (
      <section
        className={`ph5 pv3 sidebarContentSection transitionAll ${
          props.controller.sidebarClose ? 'contentMl40' : ''
        }`}
      >
        <BrowserRouter>
          <>
            <Sidebar controller={props.controller} />
            <Switch>
              <Route
                path="/"
                exact={true}
                strict={true}
                render={() => <Home />}
              />
              <Route
                path="/liveExam"
                exact={true}
                strict={true}
                render={() => <LiveExam />}
              />
              <Route
                path="/liveExamAnswerSheet"
                exact={true}
                strict={true}
                render={() => <LiveExamAnswerSheet />}
              />
              <Route
                path="/dataBank"
                exact={true}
                strict={true}
                render={() => <DataBank />}
              />
              <Route
                path="/examSettings"
                exact={true}
                strict={true}
                render={() => (
                  <ExamSettings />
                )}
              />
              <Route
                path="/questionBank"
                exact={true}
                strict={true}
                render={() => (
                  <QuestionBank
                    questionStore={props.store.questionStore}
                    subjectStore={props.store.subjectStore}
                  />
                )}
              />
              <Route
                path="/subjectSettings"
                exact={true}
                strict={true}
                render={() => (
                  <SubjectSettings subjectStore={props.store.subjectStore} />
                )}
              />
            </Switch>
          </>
        </BrowserRouter>
      </section>
    );
  }
);
