import { memo } from "react";
function SearchBar({ onchange }) {
  return (
    <div>
      <div className="w-screen flex justify-center py-10">
        <input
          onChange={onchange}
          type="text"
          className="border border-solid border-neutral-300 bg-transparent shadow-md  py-1  rounded-sm w-3/5 bg-clip-padding text-base font-normal outline-none px-3 focus:border-fuchsia-600 focus:border-2"
          placeholder="search User here"
        />
      </div>
    </div>
  );
}

export default memo(SearchBar);
