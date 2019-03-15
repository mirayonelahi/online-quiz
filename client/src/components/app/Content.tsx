import * as React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ExamSettings } from './ExamSettings';
import { DataBank } from './DataBank';
import { SubjectSettings } from './SubjectSettings';
import { QuestionBank } from './QuestionBank';
import { Store } from 'src/models/Store';

export const Content = observer(
  (props: {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
    store: typeof Store.Type;
  }) => {
    return (
      <section
        className={`ph5 pv3 contentSection transitionAll ${
          props.sidebarOpen ? 'contentMl40' : ''
        }`}
      >
        <BrowserRouter>
          <Switch>
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
              render={() => <ExamSettings examStore={props.store.examStore} />}
            />
            <Route
              path="/questionBank"
              exact={true}
              strict={true}
              render={() => <QuestionBank />}
            />
            <Route
              path="/subjectSettings"
              exact={true}
              strict={true}
              render={() => <SubjectSettings subject={props.store.Subject} />}
            />
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
);
