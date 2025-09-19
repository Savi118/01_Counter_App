import { useState } from "react";
import AppName from "./AppName";
import ButtonContainer from "./ButtonContainer";
import Copyright from "./Copyright";
import Counter from "./Counter";

const Card = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 text-center 
                w-11/12 sm:w-96 md:w-[500px]"
    >
      <AppName />
      <Counter counter={counter} />
      <ButtonContainer counter={counter} setCounter={setCounter} />
      <Copyright />
    </div>
  );
};

export default Card;
