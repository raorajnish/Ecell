import React, { forwardRef } from "react";

const Card = forwardRef(
  ({ imageSrc, title, description, className = "" }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute top-[10%] left-full w-[350px] h-[500px] bg-cream rounded-2xl p-2 opacity-0 z-20 ${className}`}
        style={{ willChange: "transform" }}
      >
        <div className="w-full h-[200px] rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-[275px] flex flex-col justify-between text-black p-2">
          <div>
            <h2 className="text-[42px] font-light tracking-normal-custom">
              {title}
            </h2>
          </div>
          <div>
            <p className="text-lg font-light tracking-normal-custom">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
