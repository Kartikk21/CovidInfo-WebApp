import React from "react";
import styles from "./Footer.module.scss";
import Layout from "../Layout/Layout";
import { Logo, Subscribe } from "../../elements";
import THEME from "../../../state/theme";
import { Link } from 'react-router-dom';
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];


  return (
    <Layout col="1" padding style={{ background: "#272d2e" }}>
      <div className={styles.footer}>
        <div className={styles.logo_area}>
          <Link to={"/"}>
            <Logo dark />
          </Link>
          <p>
            All right reserved.
          </p>
        </div>
      </div>
    </Layout>
  );
};
