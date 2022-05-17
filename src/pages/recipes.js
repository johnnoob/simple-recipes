import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

const Recipes = () => {
  return (
    <Layout>
      <SEO title="食譜頁面" description="食譜頁面" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
