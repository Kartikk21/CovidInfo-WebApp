import React, { Fragment } from "react";
import styles from "./Facts.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";
import useCurrentWidth from "../../../utilities/useCurrentWidth";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const state = useCustomState()[0];

  // const dummy = <div className={styles.dummy} />;

  const factsList = data.map((item, index) => (
    <Fragment key={index}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      </div>
    </Fragment>
  ));

  return (
    <Layout
      style={{
        background: 'rgb(220, 220, 220)'
      }}
      padding
      col="3"
    >
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: THEME.color, fontSize: '2rem' }}>
          Facts about covid-19
        </span>
        <h2>The number of people recovered from covid-19 is very high so don't get depresseed just take preliminary steps toward covid and maintain social hygein.</h2>
      </div>
      {factsList}
    </Layout>
  );
};
