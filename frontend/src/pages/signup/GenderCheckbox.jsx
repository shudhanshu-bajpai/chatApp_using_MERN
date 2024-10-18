import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control ml-3">
        <label className="label cursor-pointer">
          <span className="label-text text-black mr-2">Male</span>
          <input type="checkbox" className="checkbox mr-8 border-black size-5" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-black mr-2">Female</span>
          <input type="checkbox" className="checkbox border-black size-5" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
