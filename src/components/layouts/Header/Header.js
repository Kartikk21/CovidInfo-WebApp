import React, { useState, useEffect, Fragment } from "react";
import styles from "./Header.module.scss";
import Layout from "../Layout/Layout";
import { Button, Link, Logo } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const [sticky, setSticky] = useState(false);
  const actions = useCustomState()[1];

  const header = (
    <Layout>
      <div className={styles.header}>
        <Link url="/">
          <Logo dark />
        </Link>

      </div>
    </Layout>
  );

  return (
    <Fragment>
      <div className={styles.wrapper}>{header}</div>
      {/* <div
        className={[
          styles.wrapper,
          sticky ? styles.sticky : styles.hidden,
        ].join(" ")}
      >
        {header}
      </div> */}
    </Fragment>
  );
};
