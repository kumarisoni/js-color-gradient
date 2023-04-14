export function getGradientColor(fromColor, toColor, gradientSteps, value) {
    let startColor = fromColor, endColor = toColor, steps = gradientSteps
    function getC(startColor, endColor, steps) {
        // Parse start and end colors into RGB arrays
        var startRGB = hexToRgb(startColor);
        var endRGB = hexToRgb(endColor);

        // Calculate the difference between start and end colors
        var rStep = (endRGB.r - startRGB.r) / (steps - 1);
        var gStep = (endRGB.g - startRGB.g) / (steps - 1);
        var bStep = (endRGB.b - startRGB.b) / (steps - 1);
        console.log("step1",rStep,gStep,bStep)
        // Initialize array to hold gradient colors
        var gradientColors = [];

        // Loop through the specified number of steps and calculate the gradient colors
        for (var i = 0; i < steps; i++) {
            var r = Math.round(startRGB.r + (rStep * i));
            var g = Math.round(startRGB.g + (gStep * i));
            var b = Math.round(startRGB.b + (bStep * i));
            var color = rgbToHex(r, g, b);
            gradientColors.push(color);
        }

        // Return array of gradient colors
        return gradientColors;
    }

    function hexToRgb(hex) {
        // Convert hex color code to RGB array
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        console.log("step 2 hex",r,g,b)
        return { r: r, g: g, b: b };
    }

    function rgbToHex(r, g, b) {
        // Convert RGB values to hex color code
        var rHex = r.toString(16).padStart(2, '0');
        var gHex = g.toString(16).padStart(2, '0');
        var bHex = b.toString(16).padStart(2, '0');
        return '#' + rHex + gHex + bHex;
    }

    var gradientColors = getC(startColor, endColor, steps);
    return gradientColors;
}