import React from "react"

const setupTags = recipes => {
  let allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (!allTags[tag]) {
        allTags[tag] = 1
      } else {
        allTags[tag]++
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const firstTag = a
    const secondTag = b
    return firstTag[0].localeCompare(secondTag[0])
  })
  return newTags
}

export default setupTags
