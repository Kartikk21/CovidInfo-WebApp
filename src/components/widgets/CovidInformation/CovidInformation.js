import React, { useState } from "react";
import styles from "./CovidInformation.module.scss";
import { Layout } from "../../layouts";
// import { Button } from "../../elements";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {
    const processList = data.map((item, index) => (
        <div key={index} className={styles.wrapper}>
            <Card data={item} index={index} />
        </div>
    ));
    return (
        <Layout col="3" padding mode="dark" style={{ background: "rgb(40,40,50)" }}>
            <div className={"layout-header"}>
                <span className="subtitle" style={{ color: THEME.color, fontSize: '2rem' }}>
                    Symtoms of Covid
        </span>
                <h2 style={{ color: "#fff" }}>
                    Anyone can have mild to severe symptoms.
        </h2>
            </div>

            {processList}

            {/* <div className={["layout-footer", styles.footer].join(" ")}></div> */}
        </Layout>
    );
};

const Card = ({ data, index }) => {
    const [hover, setHover] = useState(false);

    return (
        <div className={styles.step}>
            <span className={styles.number}>{index + 1 + "."}</span>
            <div
                className={styles.info}
                style={{
                    opacity: hover ? "0" : "1",
                    transitionDelay: hover ? ".1s" : ".6s",
                }}
            >
                <h2 style={{ fontWeight: '700' }}>{data.title}</h2>
                <h4 style={{ fontWeight: '200' }}>{data.text}</h4>
            </div>

        </div>
    );
};
