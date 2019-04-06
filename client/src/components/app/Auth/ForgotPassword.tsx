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

export const ForgotPassword = inject('store')(
  observer((props: InjecttedPageProps) => {
    const { login } = props.store!;
    return (
      <Card className="w-50 mAuto">
        <div className="bp3-control-group pa3 flex flex-column">
          <h2 className="mb2 b tc f3 bg-light-green br3 pa1">Forgot your password?</h2>
          <div className="bp3-input-group w-100">
            <FormGroup
              label="Email Address"
              labelFor="email"
              helperText="Enter the email where you want the link to be sent"
            >
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
          <Button
            type="submit"
            className="bp3-button bp3-icon-send-to
              bp3-intent-success bp3-popover-dismiss pointer
              br2Important mv1 bg-animate w-100 noOutline"
            // onClick={(e: any) => {
              
            // }}
          >
            Send Password Reset Link
          </Button>
        </div>
      </Card>
    );
  })
);
