import React, { Fragment } from "react";
import {
    Box,
    Header,
    Hospital
} from "../../widgets";

import { useCustomState } from "../../../state/state";

export default () => {
    const state = useCustomState()[0];

    return (
        <Fragment>
            <Header data={state.data.menu} />
            <Box />
            <Hospital />
        </Fragment>
    );
};
