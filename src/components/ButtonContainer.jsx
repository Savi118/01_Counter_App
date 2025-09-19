const ButtonContainer = ({ counter, setCounter }) => {
  const handleIncrement = () => {
    setCounter(counter++);
  };

  const handleDecrement = () => {
    setCounter(counter--);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4 ">
      <button
        className="shadow-2xl shadow-black text-4xl border w-20 sm:w-28 md:w-35 
                   h-12 sm:h-16 md:h-20 rounded-full 
                   bg-blue-400 font-bold hover:scale-105 transition-transform"
        onClick={handleDecrement}
      >
        -
      </button>
      <button
        className="shadow-2xl shadow-black text-4xl border w-20 sm:w-28 md:w-35 
                   h-12 sm:h-16 md:h-20 rounded-full 
                   bg-green-400 font-bold hover:scale-105 transition-transform"
        onClick={handleIncrement}
      >
        +
      </button>
      <button
        className="shadow-2xl shadow-black text-4xl border w-20 sm:w-28 md:w-35 
                   h-12 sm:h-16 md:h-20 rounded-full 
                   bg-red-800 font-bold hover:scale-105 transition-transform"
        onClick={handleReset}
      >
        R
      </button>
    </div>
  );
};

export default ButtonContainer;
