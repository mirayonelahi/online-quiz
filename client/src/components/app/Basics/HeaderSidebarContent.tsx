import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ExamSettings } from '../ExamSettings/ExamSettings';
import { DataBank } from './DataBank';
import { SubjectSettings } from '../SubjectSettings/SubjectSettings';
import { QuestionBank } from '../QuestionBank/QuestionBank';
import { Store } from 'src/models/Store';
import { Home } from './Home';
import { Sidebar } from './Sidebar';
import { LiveExam } from '../LiveExam/LiveExam';
import { LiveExamAnswerSheet } from '../LiveExam/LiveExamAnswerSheet';
import { LiveExamResultSheet } from '../LiveExam/LiveExamResultSheet';
import { LiveExamResult } from '../LiveExam/LiveExamResult';
import { Example } from '../Example';
import { Login } from '../Auth/Login';
import { Register } from '../Auth/Register';
import { Profile } from '../Auth/Profile';
import { ForgotPassword } from '../Auth/ForgotPassword';
import { ResetPassword } from '../Auth/ResetPassword';
import { NotAuthorized } from '../Auth/NotAuthorized';
import { Header } from './Header';
import { Welcome } from './Welcome';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const HeaderSidebarContent = inject('store')(observer(
  (props: InjecttedPageProps) => {
    const { controller } = props.store!;
    return (
      <section
        className={`ph5 pv3 sidebarContentSection transitionAll 
          ${controller.sidebarClose ? 'contentMl40' : ''}
          ${controller.loggedIn ? '' : 'ml0'}`}
      >
        <BrowserRouter>
          <>
            <Header
              controller={controller}
            // setSidebarOpen={(e) => setSidebarOpen(!sidebarOpen)}
            />
            <Sidebar controller={controller} />
            <Switch>
              <Route
                path="/"
                exact={true}
                strict={true}
                render={() => <Welcome />}
              />
              {controller.loggedIn ?
                <Route
                  path="/home"
                  exact={true}
                  strict={true}
                  render={() => <Home />}
                />
                :
                <Route
                  path="/home"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
              }
              {controller.loggedIn ?
                <Route
                  path="/login"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
                :
                <Route
                  path="/login"
                  exact={true}
                  strict={true}
                  render={() => <Login />}
                />
              }
              {controller.loggedIn && controller.userRole === 'admin' ?
                <Route
                  path="/register"
                  exact={true}
                  strict={true}
                  render={() => <Register />}
                />
                :
                <Route
                  path="/register"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
              }
              {controller.loggedIn ?
                <Route
                  path="/forgotPassword"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
                :
                <Route
                  path="/forgotPassword"
                  exact={true}
                  strict={true}
                  render={() => <ForgotPassword />}
                />
              }
              {controller.loggedIn ?
                <Route
                  path="/resetPassword"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
                :
                <Route
                  path="/resetPassword"
                  exact={true}
                  strict={true}
                  render={() => <ResetPassword />}
                />
              }
              <Route
                path="/notAuthorized"
                exact={true}
                strict={true}
                render={() => <NotAuthorized />}
              />
              {controller.loggedIn ?
                <Route
                  path="/profile"
                  exact={true}
                  strict={true}
                  render={() => <Profile />}
                />
                :
                <Route
                  path="/profile"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
              }
              {controller.loggedIn ?
                <Route
                  path="/liveExam"
                  exact={true}
                  strict={true}
                  render={() => <LiveExam />}
                />
                :
                <Route
                  path="/liveExam"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
              }
              <Route
                path="/example"
                exact={true}
                strict={true}
                render={() => <Example controller={props.store!.controller} />}
              />
              {controller.loggedIn ?
                <Route
                  path="/liveExamResult"
                  exact={true}
                  strict={true}
                  render={() => <LiveExamResult />}
                />
                :
                <Route
                  path="/liveExamResult"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
              }
              {controller.loggedIn ?
                <Route
                  path="/liveExamAnswerSheet"
                  exact={true}
                  strict={true}
                  render={() => <LiveExamAnswerSheet />}
                />
                :
                <Route
                  path="/liveExamAnswerSheet"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
              }
              {controller.loggedIn ?
                <Route
                  path="/liveExamResultSheet"
                  exact={true}
                  strict={true}
                  render={() => <LiveExamResultSheet />}
                />
                :
                <Route
                  path="/liveExamResultSheet"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
              }
              {controller.loggedIn && controller.userRole === 'admin' ?
                <Route
                  path="/dataBank"
                  exact={true}
                  strict={true}
                  render={() => <DataBank />}
                />
                :
                <Route
                  path="/dataBank"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
              }
              {controller.loggedIn && controller.userRole === 'admin' ?
                <Route
                  path="/examSettings"
                  exact={true}
                  strict={true}
                  render={() => <ExamSettings />}
                />
                :
                <Route
                  path="/examSettings"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
              }
              {controller.loggedIn && controller.userRole === 'admin' ?
                <Route
                  path="/questionBank"
                  exact={true}
                  strict={true}
                  render={() => (
                    <QuestionBank
                      questionStore={props.store!.questionStore}
                      subjectStore={props.store!.subjectStore}
                    />
                  )}
                />
                :
                <Route
                  path="/questionBank"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
              }
              {controller.loggedIn && controller.userRole === 'admin' ?
                <Route
                  path="/subjectSettings"
                  exact={true}
                  strict={true}
                  render={() => (
                    <SubjectSettings
                      subjectStore={props.store!.subjectStore}
                    />
                  )}
                />
                :
                <Route
                  path="/subjectSettings"
                  exact={true}
                  strict={true}
                  render={() => <NotAuthorized />}
                />
              }
            </Switch>
          </>
        </BrowserRouter>
      </section>
    );
  }
));
