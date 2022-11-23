import React from "react";
import styles from "./Logo.module.scss";
import THEME from "../../../state/theme";

export default ({ dark }) => (
  <figure
    className={[styles.logo, dark ? styles.dark : styles.light].join(" ")}
    style={{ borderColor: THEME.color }}
  >
    <span>
      C<i class="las la-universal-access" style={{ fontSize: '32px' }}></i>vid Dhar
    </span>
  </figure>
);
