import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id: 1,
    name: "Kinchi",
    image:
      "https://cdn.pixabay.com/photo/2020/05/12/16/24/raspberries-5163812_960_720.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://cdn.pixabay.com/photo/2020/05/11/15/14/squirrel-5158715_960_720.jpg",
      rating: 4
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
