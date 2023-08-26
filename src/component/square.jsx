// eslint-disable-next-line react/prop-types
export default function Square({ value, squareClickHandle }) {
  return (
    <button
      className=" w-1/3 h-1/3 border border-black bg-white text-base font-bold cursor-pointer"
      onClick={squareClickHandle}
    >
      {value}
    </button>
  );
}
