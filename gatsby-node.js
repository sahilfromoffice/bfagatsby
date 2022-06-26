// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query {
//       allContentfulCoaches {
//         edges {
//           node {
//             coachSlug
//             coachName
//             featureImage {
//               gatsbyImageData
//               publicUrl
//               title
//             }
//             coach_of_the_month {
//               forMonth
//               monthYear
//             }
//             isCapsCoach
//             id
//             description {
//               raw
//             }
//           }
//         }
//       }
//       allContentfulEvents {
//         nodes {
//           name
//           id
//           slug
//           status
//           isFeatured
//           content {
//             raw
//           }
//           date
//           description
//           headerImage {
//             gatsbyImageData(
//               aspectRatio: 1
//               layout: CONSTRAINED
//               placeholder: BLURRED
//             )
//             description
//           }
//         }
//         totalCount
//       }
//     }
//   `);
//   data.allContentfulCoaches.edges.forEach((edge) => {
//     const slug = edge.node.coachSlug;
//     actions.createPage({
//       path: `/coaches/${slug}`,
//       component: require.resolve(`./src/templates/CoachTemplate.jsx`),
//       context: { slug: slug, data: edge.node },
//     });
//   });
//   data.allContentfulEvents.nodes.forEach((node) => {
//     const slug = node.slug;
//     actions.createPage({
//       path: `/events/${slug}`,
//       component: require.resolve(`./src/templates/EventTemplate.jsx`),
//       context: { slug: slug, data: node },
//     });
//   });
// };

// const path = require(`path`);
// const { slash } = require(`gatsby-core-utils`);

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   // query content for WordPress posts
//   const {
//     data: {
//       allWpPost: { nodes: allPosts },
//       allWpPage: { nodes: allPages },
//     },
//   } = await graphql(`
//     query {
//       allWpPost {
//         nodes {
//           id
//           uri
//         }
//       }
//       allWpPage {
//         nodes {
//           title
//           uri
//           content
//           desiredSlug
//           link
//         }
//       }
//     }
//   `);
//   const postTemplate = path.resolve(`./src/templates/post.js`);
//   const pageTemplate = path.resolve(`./src/templates/page.js`);
//   allPosts.forEach((post) => {
//     createPage({
//       // will be the url for the page
//       path: post.uri,
//       // specify the component template of your choice
//       component: slash(postTemplate),
//       // In the ^template's GraphQL query, 'id' will be available
//       // as a GraphQL variable to query for this post's data.
//       context: {
//         id: post.id,
//       },
//     });
//   });

//   allPages.forEach((page) => {
//     createPage({
//       // will be the url for the page
//       path: page.uri,
//       // specify the component template of your choice
//       component: slash(pageTemplate),
//       // In the ^template's GraphQL query, 'id' will be available
//       // as a GraphQL variable to query for this post's data.
//       context: {
//         id: page.id,
//         data: {
//           title: page.title,
//           uri: page.uri,
//           content: page.content,
//           desiredSlug: page.desiredSlug,
//           link: page.link,
//         },
//       },
//     });
//   });
// };
