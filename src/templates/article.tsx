import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// import model from "../../model/model"

const IndexPage = (data) => (
  <Layout pageContext={data.pageContext}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <pre>{JSON.stringify(data, null, 4)}</pre>
  </Layout>
)

export default IndexPage
