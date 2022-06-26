require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: `/newSite`,
  siteMetadata: {
    siteUrl: "https://www.barodafootballacademy.co.in",
    title: "Baroda Football Academy",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: "X46eydVwJ6iaMagkeHXNF_EfAqct_Z-MqPeTg6CGlUM",
    //     spaceId: "02inwpaulaqh",
    //   },
    // },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: `https://barodafootballacademy.co.in/cms/graphql`,
    //   },
    //   schema: {
    //     perPage: 1000,
    //     requestConcurrency: 5,
    //     circularQueryLimit: 2,
    //   },
    // },
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "SWAPI",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "wp",
    //     // Url to query from
    //     url: `https://barodafootballacademy.co.in/cms/graphql`,
    //   },
    // },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-5SHRCRBKVN",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logos",
        path: "./src/assets/images/logo",
      },
      __key: "logos",
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `inter`,
          // `Qwitcher Grypen`,
          // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
