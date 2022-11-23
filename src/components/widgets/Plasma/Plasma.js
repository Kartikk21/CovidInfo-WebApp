import React from "react";
import styles from "./Plasma.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const actions = useCustomState()[1];

 

  return (
    <Layout
      col="3"
      padding
      style={{
        background: "rgb(240,240,240)",
      }}
    >
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: THEME.color, fontSize: '3rem' }}>
          Save Life
        </span>

        <h3 style={{marginBottom:'3rem'}}>
          By Donating Plasma you can save a person who is suffering from covid 19
        </h3>
      </div>
      <div
        className={styles.card}
        style={{ borderColor: THEME.color,width:'4rem',background:'rgb(60, 60, 75)' }}
      >
        {/* <i className={item.icon} /> */}
        <h3 style={{ color: THEME.color }}>Donate Plasma</h3>
        <h4></h4>

        <div className={styles.btn}>


          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd4I5RtqDnmINyYPoKZWjEqs0UGhY3z95Fal81Sncz595bo9A/viewform?usp=sf_link" target="_blank" 
          className={styles.button}
          style={{ 
            textAlign: 'center', 
            marginTop: 0, 
            padding: '1rem 2rem 1rem 2rem', 
            fontSize: '2rem',
            background: '#fff',
            borderRadius:'1rem'
             }}>
              Register here
           
          </a>

        </div>

      </div>
    </Layout>
  );
};
