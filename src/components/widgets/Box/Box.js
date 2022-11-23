import React, { Fragment } from "react";
import styles from "./Box.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { AddressBox } from "../../elements";
import { Link } from 'react-router-dom';
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default () => {
  const actions = useCustomState()[1];

  return (
    <Fragment>
      <div className={styles.header}>
        <h2>For More Information</h2>
      </div>
      <Layout col="6" style={{ marginBottom: '8rem', borderBottomColor: THEME.color, width: '100%' }}>

        <Link to={"/oxygen"} >
          <AddressBox
            icon="lab la-digital-ocean"
            title="Oxygen Supplier"
          />
        </Link>
        <Link to={"/plasma"}>
          <AddressBox
            icon="la la-hand-holding-usd"
            title="Plasma Assistance"
          />
        </Link>
        <Link to={"/drug"} >
          <AddressBox
            icon="la la-pills"
            title="Drug Distributer"
          />
        </Link>
        <Link to={"/hospital"} >
          <AddressBox
            icon="la la-procedures"
            title="Hospital Beds"
          />
        </Link>
        <Link to={"/covid"}>
          <AddressBox
            icon="las la-tachometer-alt"
            title="Covid Meter"
          />
        </Link>

        <span className={styles.divider} style={{ borderColor: THEME.color }} />
      </Layout>
    </Fragment >
  );
};
