import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Container from "./components/Container";
import Card from "./components/Card";
import backgroundImg from "./assets/beerbg.webp";

function App() {
  const [beers, setBeers] = useState([] as any);

  useEffect(() => {
    fetch("https://random-data-api.com/api/v2/beers/?size=3")
      .then((res) => res.json())
      .then((data) => setBeers(data));
  }, []);

  const beerText = (name: string, style: string, alcohol: string) => {
    return `The ${name} is a ${style} and has a percentage of ${alcohol} `;
  };

  const fetchMeANewBeer = async (idx: number) => {
    fetch("https://random-data-api.com/api/v2/beers/?size=1")
      .then((res) => res.json())
      .then((data) =>
        setBeers((prev: any) =>
          prev.map((p: any, i: number) => (i === idx ? data : p))
        )
      );
  };

  return (
    <Container
      backgroundColor="linear-gradient(270deg, rgba(66, 66, 66, 0) 0%, rgb(97 97 97 / 70%) 40%, rgb(70 70 70) 100%);"
      imageUrl={backgroundImg}
    >
      <Title tag="h1" title="Random beer generator 🍻" color="white" />
      <ul>
        {beers.map((b: any, idx: number) => (
          <li key={b.id}>
            <Card
              title={b.brand}
              text={beerText(b.name, b.style, b.alcohol)}
              buttonText="Another one"
              animation
              click={() => fetchMeANewBeer(idx)}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
