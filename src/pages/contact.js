import React from "react"
import Layout from "../components/Layout.js"
import { graphql, useStaticQuery } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = data
  return (
    <Layout>
      <SEO title="聯絡我們" description="聯絡頁面" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>想要來點什麼嗎？</h3>
            <p>
              I'm baby try-hard waistcoat tote bag poutine, health goth raw
              denim selvage. Offal craft beer vinyl truffaut. Keytar listicle
              health goth hot chicken marfa. Portland lyft pour-over godard
              letterpress heirloom.
            </p>
            <p>
              Food truck tofu +1 iPhone. Adaptogen neutra banjo flannel.
              Literally mustache occupy polaroid, air plant vaporware vape. Food
              truck cred locavore enamel pin marfa man braid. Salvia venmo
              knausgaard shoreditch pug chillwave deep v fixie synth chia
              whatever.
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/mvoldvzq"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">你的名字</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">你的Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">留言</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                送出
              </button>
            </form>
          </article>
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

export default Contact
