import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(1);

  const handleClickAdd = () => {
    setCounter(counter + 1);
  };

  const handleClickReduce = () => {
    if(counter === 0){
      return
    }
    setCounter(counter - 1);
  };

  return { counter, handleClickAdd, handleClickReduce, setCounter };
}