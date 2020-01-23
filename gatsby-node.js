// New Schema Customization API - Available in Gatsby 2.2.0
// // https://www.gatsbyjs.org/blog/2019-03-18-releasing-new-schema-customization/
exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type BirdsJson implements Node {
        image: File!
}
  `
  createTypes(typeDefs)
}