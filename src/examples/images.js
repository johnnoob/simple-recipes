import React from "react"
import styled from "styled-components"
import bigImage from "../assets/images/big3.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained / default</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="blurred"
          layout="constrained"
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          className="example-img"
          as="div"
        />
      </article>
      <article>
        <h4>full-width</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="dominantColor"
          layout="fullwidth"
          className="example-img"
          as="div"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }
  /* @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  } */
`

export default Images
