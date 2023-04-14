import React from "react";
import {customColorMatrixOptions} from './config';
import { getCustomGradientColorArray } from './CustomColorGradient';
import{ data } from './SampleData';

require('./_app.scss');

const App = () => {
    let colorMartix = getCustomGradientColorArray(customColorMatrixOptions);
    let tableData = data;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td><h4>Item</h4></td>
                        <td><h4>Count</h4></td>
                        <td><h4>Percentage</h4></td>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, i) => (
                        <tr key={i+1}>
                            <td>
                                {data.item}
                            </td>
                            <td>
                                {data.count}
                            </td>
                            <td style={{ backgroundColor: colorMartix[data.percentage]}}>
                                {data.percentage}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default App