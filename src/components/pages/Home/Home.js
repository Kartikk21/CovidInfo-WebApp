import React, { Fragment } from "react";
import {
  Slider,
  Box,
  Facts,
  CovidInformation,
} from "../../widgets";
import { Header } from '../../layouts';
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header data={state.data.menu} />
      <Slider data={state.data.posts} />
      <Box />
      <CovidInformation data={state.data.process} />
      <Facts data={state.data.facts} />
    </Fragment>
  );
};
