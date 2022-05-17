import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  console.log(recipes)
  return (
    <Layout>
      <SEO title="關於" description="這是關於頁面" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              quae nostrum vero voluptatem? Consectetur, natus illo numquam
              doloremque totam corporis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, accusantium!
            </p>
            <Link to="/contact" className="btn">
              聯絡
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt"
            className="about-img"
            placeholder="TRACED_SVG"
          />
        </section>
        <section className="featured-recipes">
          <h5>美味的餐點...自己動手做！</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
