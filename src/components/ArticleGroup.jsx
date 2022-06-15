import React from 'react'
import Article from './Article'

const ArticleGroup = ({ articles, sectionName, isCart, handleClick }) => {
  return (
    <section>
      <h2>{sectionName}</h2>
      {articles.map((article, indx) => (
        <Article
          key={indx}
          article={article}
          isCart={isCart}
          handleClick={handleClick}
        />
      ))}
    </section>
  )
}

export default ArticleGroup
