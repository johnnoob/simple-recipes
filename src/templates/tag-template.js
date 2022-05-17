import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const TagTemplate = props => {
  const { nodes: recipes } = props.data.allContentfulRecipe
  const {
    pageContext: { tag },
  } = props
  console.log(props)
  return (
    <Layout>
      <SEO title={tag} />
      <main className="page">
        <h1>{props.pageContext.tag}</h1>
        <RecipesList recipes={recipes} />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        id
      }
    }
  }
`

export default TagTemplate
