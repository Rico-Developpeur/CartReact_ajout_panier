import React from 'react'

const Article = ({article, isCart, handleClick}) => {
  const {name, img, cat, price} = article
  return (
    <div>
      <h2> {name} </h2>
      <img src={img} alt='' />
      <p> {cat} </p>
      <p> {price} </p>
      <button onClick={(even) => handleClick(even, article)}>
        {isCart ? 'Delete' : 'Add'}
      </button>
    </div>
  )
}

export default Article
