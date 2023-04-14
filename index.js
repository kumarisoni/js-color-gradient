// import getCustomGradientColorArray from './CustomColorGradient.js';
let getCustomGradientColorArray = require('./src/CustomColorGradient');
module.exports.getColors = function (options) {
    return getCustomGradientColorArray(options);
}
