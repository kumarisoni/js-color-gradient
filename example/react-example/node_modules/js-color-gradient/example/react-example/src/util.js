function getGradientColorArray(startColor, endColor, steps) {
    var startRGB = hexToRgb(startColor);
    var endRGB = hexToRgb(endColor);
    var rStep = (endRGB.r - startRGB.r) / (steps - 1);
    var gStep = (endRGB.g - startRGB.g) / (steps - 1);
    var bStep = (endRGB.b - startRGB.b) / (steps - 1);
    var gradientColors = [];
    for (var i = 0; i < steps; i++) {
        var r = Math.round(startRGB.r + (rStep * i));
        var g = Math.round(startRGB.g + (gStep * i));
        var b = Math.round(startRGB.b + (bStep * i));
        var color = rgbToHex(r, g, b);
        gradientColors.push(color);
    }
    return gradientColors;
};

function hexToRgb(hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return { r: r, g: g, b: b };
}

function rgbToHex(r, g, b) {
    var rHex = r.toString(16).padStart(2, '0');
    var gHex = g.toString(16).padStart(2, '0');
    var bHex = b.toString(16).padStart(2, '0');
    return '#' + rHex + gHex + bHex;
};
export function getGradientColor(fromColor, toColor, gradientSteps) {
    let startColor = fromColor, endColor = toColor, steps = gradientSteps
    var gradientColors = getGradientColorArray(startColor, endColor, steps);
    return gradientColors;
}