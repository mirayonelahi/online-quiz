import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Store } from 'src/models/basics/Store';
import {
  Card,
  Button,
  FormGroup,
  InputGroup
} from '@blueprintjs/core';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const ResetPassword = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { login } = props.store!;
    return (
      <Card className="w-50 mAuto">
        <div className="bp3-control-group pa3 flex flex-column">
          <h2 className="mb2 b tc f3 bg-light-green br3 pa1">Reset Password</h2>
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
            <FormGroup label="New Password" labelFor="password">
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
            className="bp3-button bp3-icon-confirm
              bp3-intent-success bp3-popover-dismiss pointer
              br2Important mv1 bg-animate w-100 noOutline"
            // onClick={(e: any) => {
              
            // }}
          >
            Change Password
          </Button>
        </div>
      </Card>
    );
  })
);
