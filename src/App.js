import React from 'react';

function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

const foodILike = [
  {
    name: "Kinchi",
    image:
      "https://cdn.pixabay.com/photo/2020/05/12/16/24/raspberries-5163812_960_720.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EC%2582%25BC%25EA%25B2%25B9%25EC%2582%25B4&psig=AOvVaw3AQd_et32j3apYAy3YeCE_&ust=1589556238323000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOj_5s7Us-kCFQAAAAAdAAAAABAD"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
