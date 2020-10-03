import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Button from "../components/button"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    console.log(this.props.location.pathname)
    let location = this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/') + 1)
    let seachPath = "/blog/?search=" + location
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>404</h1>
        <p>You just hit a route that doesn&#39;t exist... fret not!</p>
        <p>You will see search results for the path you were looking for below.</p>
        <Link to={`${seachPath}`}>
    <Button marginTop="35px">Search for {`${location}`}</Button>
        </Link>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
