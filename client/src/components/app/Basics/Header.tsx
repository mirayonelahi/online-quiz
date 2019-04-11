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
            <button className="bp3-button bp3-minimal bp3-icon-home">
              <Link to="/home" className="sidebarLinks">
                Home
              </Link>
            </button>
            :
            <button className="bp3-button bp3-minimal bp3-icon-log-in">
              <Link to="/login" className="sidebarLinks">
                Log In
              </Link>
            </button>
          }
          {props.controller.loggedIn ?
            <button className="bp3-button bp3-minimal bp3-icon-user">
              <Link to="/profile" className="sidebarLinks">
                {JSON.parse(localStorage.user).name}
              </Link>
            </button>
            :
            undefined
          }
          {props.controller.loggedIn ?
            <button
              className={`bp3-button bp3-minimal bp3-icon-inbox-update
                ${props.controller.userRole !== 'admin' ? ' dn' : ''}`}
            >
              <Link to="/register" className="sidebarLinks">
                Registration
              </Link>
            </button>
            :
            undefined
          }
          <span className="bp3-navbar-divider" />
          {props.controller.loggedIn ?
            <button className="bp3-button bp3-minimal bp3-icon-notifications" />
            :
            <button className="bp3-button bp3-minimal bp3-icon-clipboard">
              <Link to="/home" className="sidebarLinks">
                Practice Exam
              </Link>
            </button>
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
