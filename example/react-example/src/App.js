import React from "react";
import {customColorMatrixOptions} from './config';
import { data } from './SampleData';
import {getColors} from 'js-color-gradient';
require('./_app.scss');

const App = () => {
    let colorMartixAllGradient = getColors(customColorMatrixOptions);
    let colorMatrixOneConstant = getColors(customColorMatrixOptionsOneConstant);
    let tableData = data;
    return (
        <div>
            <h4>Gradient with three colors and all gradient</h4>
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
                            <td style={{ backgroundColor: colorMartixAllGradient[data.percentage]}}>
                                {data.percentage}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4>Gradient with 3 colors in which 2 gradient(red and blue) and 1 constant(yellow- no gradient)</h4>
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
                            <td style={{ backgroundColor: colorMatrixOneConstant[data.percentage]}}>
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