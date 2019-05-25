import React from "react"

import Layout from "../components/layout"

const ArticlePage = (data) => (
  <Layout pageContext={data.pageContext}>
    <pre>{data.pageContext.page.title}</pre>
  </Layout>
)

export default ArticlePage
