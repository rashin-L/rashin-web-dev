// const path = require('path');

// module.exports = {
//     i18n: {
//         locales: ["en", "fa"],
//         defaultLocale: "en",
//         // localePath: path.resolve("./public/locales"),
//         // otherLanguages: ["en-US", "fa"],
//         // defaultLanguage: "en-US",
//         // fallbackLng: ["en-US"],
//         // useTranslation,
//     },
//     // react: { useSuspense: false },//this line
// };

// ReferenceError: require is not defined in ES module scope, you can use import instead

// next-i18next.config.js
module.exports = {
    cacheHandler: require.resolve('./cache-handler.js'),
    cacheMaxMemorySize: 0, // disable default in-memory caching
    distDir: ".next",
    defaultLocale: "en",
    locales: ["en", "fa", "ar"],
    defaultNS: "default",
    localePath: "./public/locales",
    localeExtension: "json",
    localeStructure: "{{lng}}/{{ns}}",
    // https://www.i18next.com/overview/configuration-options#logging
    // debug: process.env.NODE_ENV === 'development',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fa', 'ar'],
    //      domains: [
    //   {
    //     domain: 'rashin-web-dev.com',
    //     defaultLocale: 'en-US',
    //     // other locales that should be handled on this domain
    //     locales: ['en', 'fa'],
    //   },
      
    // ],
    },
    /** To avoid issues when deploying to some paas (vercel...) */
    localePath:
        typeof window === 'undefined'
            ? require('path').resolve('./public/locales')
            : '/locales',

    // reloadOnPrerender: process.env.NODE_ENV === 'development',

    // saveMissing: false,
    // strictMode: true,
    // serializeConfig: false,
    // react: { useSuspense: false }
}