import React from "react";

function EmailMembers() {
  return (
    <div className="card md:items-start md:w-[800px] w-[350px]">
      <p className="setupTitle font-semibold text-[25px]">
        How would you group these tasks into sections or stages?
      </p>
      <div className="flex flex-col w-full">
        <label htmlFor="email" className="formLabel">
          Email address
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="formInput mt-1 mb-3"
        />
        <input
          type="text"
          name="email_2"
          id="email_2"
          className="formInput mb-3"
        />
        <input type="text" name="email_3" id="email_3" className="formInput" />
      </div>
      <div className="flex h-full items-center mt-[30px]">
        <button className="buttonPurple w-[130px] px-7 mt-0 mr-4">
          Finish
        </button>
        <p className="text-purple text-[14px] w-[100px] font-medium select-none hover:underline hover:cursor-pointer">
          Skip this
        </p>
      </div>
    </div>
  );
}

export default EmailMembers;
