import { memo } from "react";

function NoResult() {
  return (
    <div>
      <div className="flex items-center justify-center w-screen h-screen bg-indigo-600">
        <p className="text-5xl text-white md:text-7xl lg:text-9xl">404</p>
      </div>
    </div>
  );
}

export default memo(NoResult);
