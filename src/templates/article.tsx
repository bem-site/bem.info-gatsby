import React from "react"

import Layout from "../components/layout"

const IndexPage = (data) => (
  <Layout pageContext={data.pageContext}>
    <pre>{data.pageContext.page.title.ru || data.pageContext.page.title}</pre>
  </Layout>
)

export default IndexPage
