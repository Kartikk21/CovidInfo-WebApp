import React, { Fragment } from "react";
import {
    Header,
    Error404
} from "../../widgets";

import { useCustomState } from "../../../state/state";

export default () => {
    const state = useCustomState()[0];

    return (
        <Fragment>
            <Header data={state.data.menu} />
            <Error404 />
        </Fragment>
    );
};