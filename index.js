// import getCustomGradientColorArray from './CustomColorGradient.js';
let getCustomGradientColorArray = require('./CustomColorGradient');
module.exports.getColors = function (options) {
    return getCustomGradientColorArray(options);
}
