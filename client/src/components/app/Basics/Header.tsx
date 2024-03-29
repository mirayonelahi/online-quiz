import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Controller } from 'src/models/basics/Controller';

export const Header = observer(
  (props: {
    controller: typeof Controller.Type;
  }) => {
    return (
      <nav className="bp3-navbar headerNav pl1">
        <div className="bp3-navbar-group bp3-align-left">
          <button
            className="bp3-button bp3-minimal bp3-icon-horizontal-bar-chart noOutline"
            onClick={(e: any) => {
              props.controller.toggleSidebarClose(props.controller.sidebarClose);
            }}
          />
          <div className="bp3-navbar-heading f4 ml1">Online Quiz</div>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          {props.controller.loggedIn ?
            <Link to="/home" className="sidebarLinks">
              <button className="bp3-button bp3-minimal bp3-icon-home"> Home</button>
            </Link>
            :
            <Link to="/login" className="sidebarLinks">
              <button className="bp3-button bp3-minimal bp3-icon-log-in"> Log In</button>
            </Link>
          }
          {props.controller.loggedIn ?
            <Link to="/profile" className="sidebarLinks">
              <button className="bp3-button bp3-minimal bp3-icon-user"> {JSON.parse(localStorage.user).name}</button>
            </Link>
            :
            undefined
          }
          {props.controller.loggedIn ?
            <Link to="/register" className="sidebarLinks">
              <button
                className={`bp3-button bp3-minimal bp3-icon-inbox-update
                ${props.controller.userRole !== 'admin' ? ' dn' : ''}`}
              >
                Registration
              </button>
            </Link>
            :
            undefined
          }
          <span className="bp3-navbar-divider" />
          {props.controller.loggedIn ?
            <button className="bp3-button bp3-minimal bp3-icon-notifications" />
            :
            <Link to="/home" className="sidebarLinks">
              <button className="bp3-button bp3-minimal bp3-icon-clipboard"> Practice Exam</button>
            </Link>
          }
          {props.controller.loggedIn ?
            <button className="bp3-button bp3-minimal bp3-icon-cog" />
            :
            undefined
          }
          {props.controller.loggedIn ?
            <button
              className="bp3-button bp3-minimal bp3-icon-log-out"
              onClick={(e: any) => {
                e.preventDefault();
                localStorage.removeItem('usertoken');
                localStorage.removeItem('user');
                props.controller.setUserRole('default');
                props.controller.loggedInFalse();
                // return window.location.href = '/login';
              }}
            />
            :
            undefined
          }
        </div>
      </nav>
    );
  }
);
