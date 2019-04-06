import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Store } from 'src/models/Store';
import {
  Card,
  Button,
  FormGroup,
  InputGroup
} from '@blueprintjs/core';
import { Link } from 'react-router-dom';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const Login = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { login, controller } = props.store!;
    return (
      <Card className="w-50 mAuto">
        <div className="bp3-control-group pa3 flex flex-column">
          <h2 className="mb2 b tc f2 bg-light-green br3 pa1">Log In</h2>
          <div className="bp3-input-group w-100">
            <FormGroup label="Email Address" labelFor="email">
              <InputGroup
                id="email"
                placeholder="some@xyz.com"
                leftIcon="envelope"
                value={login.email}
                onChange={(e: any) => {
                  login.setEmail(e.target.value);
                }}
              />
            </FormGroup>
          </div>
          <div className="bp3-input-group w-100">
            <FormGroup label="Password" labelFor="password">
              <InputGroup
                id="password"
                placeholder="******"
                leftIcon="key"
                value={login.password}
                onChange={(e: any) => {
                  login.setPassword(e.target.value);
                }}
              />
            </FormGroup>
          </div>
          <Link to="/forgotPassword">
            <p>Reset password</p>
          </Link>
          <Button
            type="submit"
            className="bp3-button bp3-icon-log-in
              bp3-intent-success bp3-popover-dismiss pointer
              br2Important mv1 bg-animate w-100 noOutline"
            onClick={(e: any) => {
              e.preventDefault();
              const user = {
                email: login.email,
                password: login.password
              };
              login.login(user).then(res => {
                login.getProfile().then(() => {
                  controller.setUserRole(JSON.parse(localStorage.user).role);
                  controller.loggedInTrue();
                });
                // return window.location.href = '/';
              });
            }}
          >
            Log In
          </Button>
        </div>
      </Card>
    );
  })
);
