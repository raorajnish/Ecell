import React from "react";

const Reviews = () => {
  return (
    <div className="w-[80%] mx-auto mt-12 bg-[radial-gradient(circle,rgba(0,0,0,0.95)_0%,rgb(38,38,38)_50%,rgba(53,53,53,0.95)_100%)] rounded-[10px] p-4 text-white shadow-[0_2px_12px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden whitespace-nowrap select-none font-inter antialiased">
      <p className="uppercase text-center font-semibold">
        What our subscribers have to say:
      </p>
      <br />
      <ul className="list-none text-lg flex justify-between gap-[1.5rem] items-center flex-[0_0_auto] animate-[scroll_25s_linear_infinite]">
        <li className="transition-transform duration-300 [transition-timing-function:cubic-bezier(0.4,2,0.6,1)] hover:scale-115 hover:z-[2]">
          <span className="italic">
            "This Cell is fantastic! I look forward to joining it"
          </span>
          <span className="font-bold">- Harmeet</span>
        </li>
        <li className="transition-transform duration-300 [transition-timing-function:cubic-bezier(0.4,2,0.6,1)] hover:scale-115 hover:z-[2]">
          <span className="italic">
            "The content is always fresh and engaging. Keep up the great work!"
          </span>
          <span className="font-bold">- Kajal</span>
        </li>
        <li className="transition-transform duration-300 [transition-timing-function:cubic-bezier(0.4,2,0.6,1)] hover:scale-115 hover:z-[2]">
          <span className="italic">
            "I appreciate the effort put into this Website. It's a great peek
            into the cell!"
          </span>
          <span className="font-bold">- Rajnish</span>
        </li>
        <li className="transition-transform duration-300 [transition-timing-function:cubic-bezier(0.4,2,0.6,1)] hover:scale-115 hover:z-[2]">
          <span className="italic">
            "This Website is so good! I love it so much!."
          </span>
          <span className="font-bold">- Sahil</span>
        </li>
        <li className="transition-transform duration-300 [transition-timing-function:cubic-bezier(0.4,2,0.6,1)] hover:scale-115 hover:z-[2]">
          <span className="italic">
            "This newsletter is a must-read for anyone interested in the latest
            trends."
          </span>
          <span className="font-bold">- Mehetab</span>
        </li>
      </ul>
    </div>
  );
};

export default Reviews;
