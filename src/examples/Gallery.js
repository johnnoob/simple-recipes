import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: TRACED_SVG
            height: 200
            width: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  console.log(nodes)
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        console.log(image)
        const { name } = image
        const pathToImage = getImage(image)
        return (
          <article key={index} className="item">
            <p>{name}</p>
            <GatsbyImage
              image={pathToImage}
              alt={name}
              className="gallery-img"
            />
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .gallery-img {
    border-radius: 0.5rem;
  }
  /* gap: 0.5rem; */
  .item {
    margin-right: 0.5rem;
  }
  p {
    font-weight: bold;
  }
`

export default Gallery
