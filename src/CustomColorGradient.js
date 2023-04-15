import {getGradientColor} from './util.js';

export const getCustomGradientColorArray = function(options) {
    let configArray = options;
    let startColor,endColor, range, steps;
    let colorMatrix = [];
    let currentColorMatrix = [];
    for(let i =0; i < configArray.length; i++) {
        currentColorMatrix = [];
        if(configArray[i].style === 'gradient') {
            startColor = configArray[i].fromColor;
            endColor = configArray[i].toColor;
        } else {
            startColor = configArray[i].color;
            endColor = configArray[i].color;
        }
            range = (configArray[i].range).split("-");
            steps =  (parseInt(range[1]) - parseInt(range[0]))+1;
            currentColorMatrix = getGradientColor(startColor, endColor, steps);
            colorMatrix = colorMatrix.concat(currentColorMatrix);
    }
    return colorMatrix;
}