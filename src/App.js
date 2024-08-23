import React from "react";
import data from "./data";
import Box from "./Box";

export default function App(){
  const [squares, setSquares] = React.useState(data);


  function toggle(id){
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map(square => (
    <Box 
      key={square.id}
      on={square.on}
      toggle={() => toggle(square.id)}
    />
  ));
  
  console.log(squareElements); // Check that this logs the correct elements
  
  return(
    <main>
      {squareElements}
    </main>
  );
}
