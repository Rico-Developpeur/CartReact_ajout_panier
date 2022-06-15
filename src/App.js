import "./App.css";
import React from "react";
import ArticleGroup from "./components/ArticleGroup";

const itemList = [
  {
    img: "./assets/boule_1.png",
    name: "boules 1",
    cat: "classic",
    price: 29.99,
  },
  {
    img: "./assets/boule_2.png",
    name: "boules 2",
    cat: "classic",
    price: 31.99,
  },
  {
    img: "./assets/boule_3.png",
    name: "boules 3",
    cat: "classic",
    price: 35.99,
  },
  {
    img: "./assets/boule_4.png",
    name: "boules 4",
    cat: "package",
    price: 59.99,
  },
  {
    img: "./assets/boule_5.png",
    name: "boules 5",
    cat: "package",
    price: 69.99,
  },
  {
    img: "./assets/boule_6.png",
    name: "boules 6",
    cat: "package",
    price: 54.99,
  },
];

function App() {
  const [cartArticles, setCartArticles] = React.useState([]);
  const handleClick = (even, article) => {
    even.preventDefault();
    /* push */
    setCartArticles([...cartArticles, article]);
  };
  const handleDelete =
  console.log(cartArticles);
  return (
    <div className="App">
      <ArticleGroup articles={itemList} sectionName="Article" handleClick={handleClick}/>
      <ArticleGroup articles={cartArticles} sectionName="Panier" isCart />
    
      </div>
  );
}

export default App;
