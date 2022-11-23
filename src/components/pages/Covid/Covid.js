import React, { Fragment } from "react";
import {
    Header,
    Covid,
    Box
} from "../../widgets";

import { useCustomState } from "../../../state/state";

export default () => {
    const state = useCustomState()[0];

    return (
        <Fragment>
            <Header data={state.data.menu} />
            <Box />
            <Covid />
        </Fragment>
    );
};