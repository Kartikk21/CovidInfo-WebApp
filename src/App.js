import React, { useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import {
  Home,
  Oxygen,
  Plasma,
  Drug,
  Hospital,
  Covid,
  Error404
} from "./components/pages";
import { Footer } from "./components/layouts";
import { Spinner } from "./components/elements";
import { useCustomState } from "./state/state";

export default () => {
  const [state, actions] = useCustomState();

  useEffect(() => {
    actions.fetch();
  }, [actions]);

  let app = state.error ? <p>Can't load page</p> : <Spinner fluid />;

  if (state.data) {
    app = (
      <Fragment>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/oxygen" exact component={Oxygen} />
          <Route path="/plasma" exact component={Plasma} />
          <Route path="/drug" exact component={Drug} />
          <Route path="/hospital" exact component={Hospital} />
          <Route path="/covid" exact component={Covid} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }

  return <Fragment>{app}</Fragment>;
};
