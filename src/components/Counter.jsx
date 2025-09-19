const Counter = ({ counter }) => {
  return (
    <h2
      className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
               shadow-2xl shadow-black bg-gray-800 rounded-full 
               flex items-center justify-center text-4xl sm:text-5xl md:text-6xl 
               text-white m-auto"
    >
      {counter}
    </h2>
  );
};

export default Counter;
