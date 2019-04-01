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
      <Card className="w-100">
        <div className="bp3-control-group pa3 flex flex-column">
          <p className="mb2 b f5 bg-light-green br3 pa1">Profile Page</p>
        </div>
      </Card>
    );
  })
);
