import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import AllRecipes from "../components/AllRecipes"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="首頁" description="這是首頁" />
      <main className="page">
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="person pouring salt"
          className="image-page"
          placeholder="TRACED_SVG"
        />
        <AllRecipes />
      </main>
    </Layout>
  )
}
