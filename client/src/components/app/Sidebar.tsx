import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

export const Sidebar = observer(
  (props: {
    sidebarOpen: boolean;
  }) => {
    return (
      <section
        className={`sidebarSection ${
          props.sidebarOpen ? 'sidebarW40 ' : ''
        } transitionAll `}
      >
        <ul
          className={`h-100 bp3-menu bp3-elevation-1 minWidthUnset ${
            props.sidebarOpen ? 'sidebarW40 ' : ''
          } transitionAll `}
        >
          <li className="active">
            <Link to="/" className="sidebarLinks">
              <i className="bp3-menu-item bp3-icon-home">
                <span className="bp3-heading ma0">
                  {props.sidebarOpen ? '' : 'Home'}
                </span>
              </i>
            </Link>
          </li>
          <li className="bp3-menu-header">
            <h6 className="bp3-heading">
              {props.sidebarOpen ? '' : 'Data Store'}
            </h6>
          </li>
          <li>
            <Link to="/dataBank" className="sidebarLinks">
              <i className="bp3-menu-item bp3-icon-th">
                <span className="bp3-heading ma0">
                  {props.sidebarOpen ? '' : 'Data Bank'}
                </span>
              </i>
            </Link>
          </li>
          <li className="bp3-menu-header">
            <h6 className="bp3-heading">{props.sidebarOpen ? '' : 'Report'}</h6>
          </li>
          <li>
            <Link to="/activityLog" className="sidebarLinks">
              <i className="bp3-menu-item bp3-icon-automatic-updates">
                <span className="bp3-heading ma0">
                  {props.sidebarOpen ? '' : 'Activity Log'}
                </span>
              </i>
            </Link>
          </li>
        </ul>
      </section>
    );
  }
);
