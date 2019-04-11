import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Store } from 'src/models/basics/Store';
import {
  Card,
} from '@blueprintjs/core';

interface InjecttedPageProps {
  store?: typeof Store.Type;
}

export const NotAuthorized = inject('store')(
  observer((props: InjecttedPageProps) => {
    return (
      <div className="mt5 flex flex-column items-center">
        <Card className="w-70 mAuto">
          <div className="bp3-control-group pa3 bg-light-green flex flex-column">
            <span className="bp3-icon-large bp3-icon-error mh2 mv3 f80 df flex-column items-center" />
            <p className="mb2 b tc f4 br3 pa1">Sorry! You are not authorized in this section! </p>
            <p className="mb2 b tc f4 br3 pa1">Or there might be some kind of error!</p>
          </div>
        </Card>
      </div>
    );
  })
);
