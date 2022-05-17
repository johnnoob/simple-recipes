import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import SEO from "../components/SEO"

const Tags = ({ data }) => {
  const newTags = setupTags(data.allContentfulRecipe.nodes)
  return (
    <Layout>
      <SEO title="標籤頁面" description="標籤頁面" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link key={index} to={`/${text}`} className="tag">
                <h5>{text}</h5>
                <p>{value} 個食譜</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
