// in gatsby-config.js
module.exports = {
  pathPrefix: "/sailsbibx",
}
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sailsbib | generate leads for the offered services `,
        short_name: `sailsbib`,
        start_url: `/sailsbib`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/ghost2.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

// in gatsby-config.js
plugins: [
  `gatsby-plugin-favicon`
];

// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/favicon.png",

      // WebApp Manifest Configuration
      appName: null, // Inferred with your package.json
      appDescription: null,
      developerName: null,
      developerURL: null,
      dir: 'auto',
      lang: 'en-US',
      background: '#fff',
      theme_color: '#fff',
      display: 'standalone',
      orientation: 'any',
      start_url: '/?homescreen=1',
      version: '1.0',

      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        yandex: true,
        windows: true,
      }
    }
  }
];

{
  plugins: [`gatsby-plugin-react-helmet`]
}

module.exports = {
plugins: [`gatsby-plugin-react-helmet`]
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};

