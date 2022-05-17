import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    prepTime,
    content,
    description: { description },
    servings,
    image,
  } = data.contentfulRecipe
  const pathToImage = getImage(image)
  const { ingredients, instructions, tags, tools } = content

  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* {hero} */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* {icons} */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>準備時間</h5>
                  <p>{prepTime} min</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>烹調時間</h5>
                  <p>{cookTime} min</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>份數</h5>
                  <p>{servings}</p>
                </article>
              </div>
              {/* {tags} */}
              <p className="recipe-tags">
                標籤：
                {tags.map((tag, index) => {
                  return (
                    <Link key={index} to={`/${tag}`}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* {rest of the content} */}
          <section className="recipe-content">
            <article>
              <h4>教學指南</h4>
              {instructions.map((instruction, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>步驟{index + 1}</p>
                      <div></div>
                    </header>
                    <p>{instruction}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>原料</h4>
                {ingredients.map((ingredient, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {ingredient}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>工具</h4>
                {tools.map((tool, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {tool}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      prepTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      servings
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
`

export default RecipeTemplate
