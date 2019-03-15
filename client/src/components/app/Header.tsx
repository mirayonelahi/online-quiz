import * as React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

export const Header = observer(
  (props: {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
  }) => {
    return (
      <nav className="bp3-navbar headerNav pl1">
        <div className="bp3-navbar-group bp3-align-left">
          <button
            className="bp3-button bp3-minimal bp3-icon-horizontal-bar-chart noOutline"
            onClick={(e: any) => {
              // e.preventDefault();
              if (!props.sidebarOpen) {
                props.setSidebarOpen(props.sidebarOpen);
              } else if (props.sidebarOpen) {
                props.setSidebarOpen(!props.sidebarOpen);
              }
              console.log('sidebarOpen=> ', props.sidebarOpen);
            }}
          />
          <div className="bp3-navbar-heading f4 ml1">YourTodo</div>
        </div>
        <div className="bp3-navbar-group bp3-align-right">
          <button className="bp3-button bp3-minimal bp3-icon-home">
            <Link to="/" className="sidebarLinks">
              Home
            </Link>
          </button>
          <button className="bp3-button bp3-minimal bp3-icon-document">
            <Link to="/activityLog" className="sidebarLinks">
              Database
            </Link>
          </button>
          <span className="bp3-navbar-divider" />
          <button className="bp3-button bp3-minimal bp3-icon-user" />
          <button className="bp3-button bp3-minimal bp3-icon-notifications" />
          <button className="bp3-button bp3-minimal bp3-icon-cog" />
        </div>
      </nav>
    );
  }
);
