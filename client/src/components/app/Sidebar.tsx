import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Controller } from 'src/models/Controller';

export const Sidebar = observer(
  (props: {
    controller: typeof Controller.Type;
  }) => {
    return (
      <section
        className={`sidebarSection ${
          props.controller.sidebarClose ? 'sidebarW40 ' : ''
        } transitionAll `}
      >
        <ul
          className={`h-100 bp3-menu bp3-elevation-1 minWidthUnset ${
            props.controller.sidebarClose ? 'sidebarW40 ' : ''
          } transitionAll `}
        >
          <li className="active">
            <Link to="/" className="sidebarLinks">
              <i className="bp3-menu-item bp3-icon-home">
                <span className="bp3-heading ma0">
                  {props.controller.sidebarClose ? '' : 'Home'}
                </span>
              </i>
            </Link>
          </li>
          <li className="bp3-menu-header">
            <h6 className="bp3-heading">
              {props.controller.sidebarClose ? '' : 'Examinations'}
            </h6>
          </li>
          <li className="">
            <Link to="/liveExam" className="sidebarLinks">
              <i className="bp3-menu-item bp3-icon-clipboard">
                <span className="bp3-heading ma0">
                  {props.controller.sidebarClose ? '' : 'Live Exam'}
                </span>
              </i>
            </Link>
          </li>
          <li className="">
            <Link to="/liveExamResult" className="sidebarLinks">
              <i className="bp3-menu-item bp3-icon-git-repo">
                <span className="bp3-heading ma0">
                  {props.controller.sidebarClose ? '' : 'Live Exam Result'}
                </span>
              </i>
            </Link>
          </li>
          <li className="bp3-menu-header">
            <h6 className="bp3-heading">
              {props.controller.sidebarClose ? '' : 'Data Store'}
            </h6>
          </li>
          <li>
            <Link to="/dataBank" className="sidebarLinks">
              <i className="bp3-menu-item bp3-icon-th">
                <span className="bp3-heading ma0">
                  {props.controller.sidebarClose ? '' : 'Data Bank'}
                </span>
              </i>
            </Link>
          </li>
          <li className="bp3-menu-header">
            <h6 className="bp3-heading">{props.controller.sidebarClose ? '' : 'Report'}</h6>
          </li>
          <li>
            <Link to="/activityLog" className="sidebarLinks">
              <i className="bp3-menu-item bp3-icon-automatic-updates">
                <span className="bp3-heading ma0">
                  {props.controller.sidebarClose ? '' : 'Activity Log'}
                </span>
              </i>
            </Link>
          </li>
        </ul>
      </section>
    );
  }
);
