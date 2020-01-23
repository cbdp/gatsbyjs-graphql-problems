import React from "react"
import Layout from "../components/Layout.js"
import NiceBirds from "../components/NiceBirds.js"

export default () => (
  <Layout>
    <h1>Just the nice birds</h1>
    <NiceBirds />
    <h4>childImageSharp query for images return null</h4>
    <a href="/SingleParrot">attempt to just query one via file</a>
  </Layout>
)