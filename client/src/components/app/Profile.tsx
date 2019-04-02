import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Store } from 'src/models/Store';
import {
  Card
} from '@blueprintjs/core';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const Profile = inject('store')(
  observer((props: InjecttedPageProps) => {
    // const { login } = props.store!;
    return (
      <Card className="w-80 mAuto">
        <div className="bp3-control-group pa3 flex flex-column">
          <h2 className="mb2 b tc f2 bg-light-green br3 pa1">Your profile</h2>
          <Card className="w-100">
            <div className="bp3-control-group pa3 flex flex-column">
              <div className="w-100 flex">
                <p className="w-30 b">Name: </p>
                <p className="w-70">{JSON.parse(localStorage.user).name}</p>
              </div>
              <div className=" w-100 flex">
                <p className="w-30 b">E-mail: </p>
                <p className="w-70">{JSON.parse(localStorage.user).email}</p>
              </div>
              <div className=" w-100 flex">
                <p className="w-30 b">Role: </p>
                <p className="w-70">{JSON.parse(localStorage.user).role}</p>
              </div>
            </div>
          </Card>
        </div>
      </Card>
    );
  })
);
