import React from "react";
import styles from "./Hospital.module.scss";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {

    return (
        <Layout
            style={{
                background: "rgb(240,240,240)",
            }}
            col="3"
            padding
        >
            <div className="layout-header">
                <span className="subtitle" style={{ color: THEME.color, fontSize: '3rem' }}>
                    Covid Dedicated hospital in Dhar
        </span>

                <div >
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Supplier Name</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Address</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>

                        <tr>
                            <td data-label="ID">1</td>
                            <td data-label="Supplier Name">Shubham Patidar</td>
                            <td data-label="Contact Number">1234567894</td>
                            <td data-label="Address">Ghora Chopati Dhar</td>
                            <td data-label="Time">9PM - 6PM</td>
                        </tr>
                        <tr>
                            <td scope="row" data-label="ID">2</td>
                            <td data-label="Supplier Name">Shubham Patidar</td>
                            <td data-label="Contact Number">1234456789</td>
                            <td data-label="Address">Badnawar</td>
                            <td data-label="Time">9PM - 6PM</td>
                        </tr>
                        <tr>
                            <td scope="row" data-label="ID">3</td>
                            <td data-label="Supplier Name">Shubham Patidar</td>
                            <td data-label="Contact Number">1234456789</td>
                            <td data-label="Address">Badnawar</td>
                            <td data-label="Time">9PM - 6PM</td>
                        </tr>
                        <tr>
                            <td scope="row" data-label="ID">4</td>
                            <td data-label="Supplier Name">Shubham Patidar</td>
                            <td data-label="Contact Number">1234456789</td>
                            <td data-label="Address">Badnawar</td>
                            <td data-label="Time">9PM - 6PM</td>
                        </tr>
                        <tr>
                            <td scope="row" data-label="ID">5</td>
                            <td data-label="Supplier Name">Shubham Patidar</td>
                            <td data-label="Contact Number">1234456789</td>
                            <td data-label="Address">Badnawar</td>
                            <td data-label="Time">9PM - 6PM</td>
                        </tr>

                    </table>
                </div>
            </div>


        </Layout>
    );
};
