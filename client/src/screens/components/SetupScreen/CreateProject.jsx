import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function CreateProject() {
  const navigate = useNavigate();
  var projectRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(projectRef);
  };
  return (
    <div className="card md:items-start">
      <p className="setupTitle font-medium text-[22px]">
        Let's set up your first project
      </p>
      <form method="post" className="form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="formLabel">
          What's something you are currently working on?
        </label>
        <input
          type="text"
          name="email"
          id="email"
          ref={projectRef}
          className="formInput w-full border-gray border-solid border-x-0 border-t-0 rounded-none outline-none border-b-[1px]
            text-[24px] md:text-[28px]  focus:border-b-purple"
        />
        <button type="submit" className="buttonPurple">
          Next
        </button>
      </form>
      <div className="flex w-full justify-center">
        <p
          className="text-purple cursor-pointer text-sm mt-6 select-none"
          onClick={() => navigate("upload-avatar")}
        >
          Skip this
        </p>
      </div>
    </div>
  );
}

export default CreateProject;
