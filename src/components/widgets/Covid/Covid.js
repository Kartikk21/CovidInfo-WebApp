import React, { useState } from "react";
import styles from "./Covid.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {

    const [active, setactive] = useState("0");
    const [confirmed, setconfirmed] = useState("0");
    const [recoverd, setrecoverd] = useState("0");
    const [deceased, setdeceased] = useState("0");
    const [lastDay, setlastDay] = useState("0");


    const apiCall = async () => {
        const url = "https://api.covid19india.org/state_district_wise.json";
        const response = await fetch(url);
        const dataJSON = await response.json();
        const dharData = dataJSON["Madhya Pradesh"].districtData.Dhar;
        // console.log(dharData.active);
        setlastDay(confirmed);
        setactive(dharData.active);
        setconfirmed(dharData.confirmed);
        setrecoverd(dharData.recovered);
        setdeceased(dharData.deceased);
    }

    apiCall();
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
                    Dhar Corona Update
        </span>
            </div>
            <div
                className={styles.card}
                style={{ borderColor: THEME.color, background: 'rgb(60, 60, 75)' }}
            >
                {/* <i className={item.icon} /> */}
                <h3 style={{ color: THEME.color }}>Active</h3>
                <h4 style={{ color: "white", fontSize: "3rem" }}>{active}</h4>
            </div>
            <div
                className={styles.card}
                style={{ borderColor: THEME.color, background: 'rgb(60, 60, 75)' }}
            >
                {/* <i className={item.icon} /> */}
                <h3 style={{ color: THEME.color }}>Confirmed</h3>
                <h4 style={{ color: "white", fontSize: "3rem" }}>{confirmed}</h4>
            </div>
            <div
                className={styles.card}
                style={{ borderColor: THEME.color, width: '4rem', background: 'rgb(60, 60, 75)' }}
            >
                {/* <i className={item.icon} /> */}
                <h3 style={{ color: THEME.color }}>Recoverd</h3>
                <h4 style={{ color: "white", fontSize: "3rem" }}>{recoverd}</h4>
            </div>
            <div
                className={styles.card}
                style={{ borderColor: THEME.color, width: '4rem', background: 'rgb(60, 60, 75)' }}
            >
                {/* <i className={item.icon} /> */}
                <h3 style={{ color: THEME.color }}>Deceased</h3>
                <h4 style={{ color: "white", fontSize: "3rem" }}>{deceased}</h4>
            </div>
            {/* <div
                className={styles.card}
                style={{ borderColor: THEME.color, width: '4rem', background: 'rgb(60, 60, 75)' }}
            >
                 <i className={item.icon} /> 
                <h3 style={{ color: THEME.color }}>New</h3>
                <h4 style={{ color: "white", fontSize: "3rem" }}>{confirmed - lastDay}</h4>
            </div> */}
        </Layout>
    );
};
