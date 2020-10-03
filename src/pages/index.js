import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "I'm Vishal, Hi."

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <blockquote>As a technologist who is passionate about creating products that invoke emotions, I have helped build over 18 products. I deeply involve myself in the architecture, planning, and development phases of products that employ both machine learning and platform development technologies. In my free time, I dabble in design and collect vinyl records.</blockquote>
        <p>I have been contributing to entropy since 1993.</p>
        <p>I'm an egalitarian.</p>
        <p>I'm a global citizen.</p>
        <p>I make machines learn.</p>
        <p>I make apps.</p>
        <p>I constructively critique on products.</p>
        <p>I design.</p>
        <p>I have a good deal of thought to share on philosophy. </p>
        <p>I <Link to="/blog/">Blog</Link></p>
        <p>I cofounded <a href={`https://verizy.ai/`}>Verizy</a>.</p>
        <p>I cofounded <a href={`https://labyrinth.ai/`}>Labyrinth</a>.</p>
        <p>I made <a href={`https://cacti.ai/`}>Cacti</a>. Check it out. Download the <a href={`https://apps.apple.com/app/id1503660093`}>Cacti Vault app</a>.</p>
        <p>Check out <a href={`https://yourstory.com/2020/03/labyrinth-technologies-leverages-aws-handle-requests`}>Labyrinth's YourStory article</a>.</p>
        <p>Watch my <a href={`https://www.youtube.com/watch?v=-hu9wyIUryg`}>interview with AWS</a>.</p>
        <p>Check out the stories behind my work on Instagram here.</p>
        <p>The welcome at <a href={`https://twitter.com/vishalvshekkar/status/1135438339169853441?s=20`}>WWDC2019</a>.</p>
        <p><a href={`mailto:vishalvshekkar@gmail.com`}>Contact me</a>; let's grab a beverage together.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
