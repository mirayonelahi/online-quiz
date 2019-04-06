import * as React from 'react';
import { observer } from 'mobx-react';
import { Card, Elevation, Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

export const DataBank = observer(() => {
  return (
    <Card interactive={true} elevation={Elevation.ONE} className="w-100">
      <h2 className="f2 tc mt3 bg-light-green br3">Data Bank</h2>
      <div className="w-100 pa3">
        <div className="w-third pa3 dib">
          <Link to="/examSettings" className="sidebarLinks">
            <Button fill={true}>
              <span className="bp3-icon-large bp3-icon-clipboard mh2 mv3 f45 df flex-column items-center"/>
              <p className="f4 tc ma2">Exam Settings</p>
            </Button>
          </Link>
        </div>
        <div className="w-third pa3 dib">
          <Link to="/questionBank" className="sidebarLinks">
            <Button fill={true}>
              <span className="bp3-icon-large bp3-icon-projects mh2 mv3 f45 df flex-column items-center"/>
              <p className="f4 tc ma2">Question Bank</p>
            </Button>
          </Link>
        </div>
        <div className="w-third pa3 dib">
          <Link to="/subjectSettings" className="sidebarLinks">
            <Button fill={true}>
              <span className="bp3-icon-large bp3-icon-book mh2 mv3 f45 df flex-column items-center"/>
              <p className="f4 tc ma2">Subject Settings</p>
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
});
