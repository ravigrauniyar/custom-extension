import { countHello } from "../zustand/store";

export const Counter = () => {
  const { helloCount, byeCount, incrementHello, incrementBye } = countHello();
  const helloCountText = `${helloCount} Greetings.`;
  const byeCountText = `${byeCount} Goodbyes.`;

  return (
    <div className="flex flex-col justify-center items-center min-w-[200px] p-5 rounded-md bg-white">
      <div className="bg-light_gray h-[50px] text-base mb-1">Click on Buttons</div>
      <div
        className="bg-gray shadow-lg text-center mb-3 py-1 px-5 rounded-md cursor-pointer"
        onClick={incrementHello}
      >
        Hello, World!
      </div>

      {helloCount !== 0 && (
        <div className="text-solid_gray text-xs">{helloCountText}</div>
      )}

      <div
        className="bg-gray shadow-lg text-center my-3 py-1 px-5 rounded-md cursor-pointer"
        onClick={incrementBye}
      >
        Bye, World!
      </div>

      {byeCount !== 0 && (
        <div className="text-solid_gray text-xs">{byeCountText}</div>
      )}
    </div>
  );
};
