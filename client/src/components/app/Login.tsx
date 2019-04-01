import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Store } from 'src/models/Store';
import {
  Card,
  Button,
  FormGroup,
  InputGroup
} from '@blueprintjs/core';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const Login = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { login } = props.store!;
    return (
      <Card className="w-100">
        <div className="bp3-control-group pa3 flex flex-column">
          <p className="mb2 b f5 bg-light-green br3 pa1">Please sign in</p>
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
          <Button
            type="submit"
            className="bp3-button bp3-icon-inbox-update
                                    bp3-intent-success bp3-popover-dismiss pointer
                                    br2Important mv1 bg-animate w-100 noOutline"
            onClick={(e: any) => {
              e.preventDefault();
              const user = {
                email: login.email,
                password: login.password
              };
              login.login(user).then(res => {
                return window.location.href = '/';
              });
            }}
          >
            Sign In
          </Button>
        </div>
      </Card>
    );
  })
);
