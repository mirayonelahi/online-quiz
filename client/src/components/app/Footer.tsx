import * as React from 'react';
import { observer } from 'mobx-react';

export const Footer = observer(() => {
  return (
    <nav className="bp3-navbar footerNav">
      <div className="bp3-navbar-group bp3-align-left">
        {/* <div className="bp3-navbar-heading">YourTodo</div> */}
        <strong className="">
          Copyright &copy; 2019{' '}
          <a href="http://www.redxsolutions.xyz/">RedX Solutions</a>.&#160;
        </strong>{' '}
        All rights reserved.
      </div>
      <div className="bp3-navbar-group bp3-align-right">
        <span className="bp3-navbar-divider">Anything you want</span>
      </div>
    </nav>
  );
});
