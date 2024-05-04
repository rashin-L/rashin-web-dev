/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */
const colors = require('tailwindcss/colors')
module.exports = {
    darkMode: "class",
    mode: 'jit',
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
        '../templates/**/*.html',

        /*
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        '../../templates/**/*.html',

        /*
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        '../../**/templates/**/*.html',

        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    theme: {
        
        extend: {
            colors: {
                sky: colors.sky,
                cyan: colors.cyan,
                "light": {
                    blue: "#3C6071"

                },
                "dark": {
                    blue: "#47D8E1"
                }

            },

            fontFamily: {
                "OpenSansExtraBold": "Open Sans ExtraBold",
                "OpenSansSemiBold": "Open Sans SemiBold",
                "OpenSansBold": "Open Sans Bold",
                "OpenSansRegular": "Open Sans Regular",
                "RobotoRegular": "Roboto Regular",
                "RobotoBold": "Roboto Bold",
            },
        },
    },
    plugins: [
        function({ addVariant }){
            addVariant('child', '&>*');
            addVariant('child-hover', '&>*:hover');
        },
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
