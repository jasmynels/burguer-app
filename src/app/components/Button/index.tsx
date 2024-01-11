import { Buttons } from "./types";

function getColor(color: string) {
  switch (color) {
    case "green":
      return {
        text: "text-[#ffffff]",
        bg: "bg-[#27AE60]",
        hover: "hover:bg-green-400",
        textHover: "hover:text-[#ffff]",
      };
    case "gray":
      return {
        text: "text-[#828282]",
        bg: "bg-[#E0E0E0]",
        hover: "hover:bg-[#828282]",
        textHover: "hover:text-[#E0E0E0]",
      };
  }
}

function getSize(size: string) {
  switch (size) {
    case "default":
      return "h-14";
    case "medium":
      return "h-10";
  }
}

const Button = ({ size, color, disabled, text, onClick }: Buttons) => {
  if (color === undefined) {
    color = "green";
  } else if (size === undefined) {
    size = "default";
  }

  return (
    <>
      <div>
        <button
          onClick={onClick}
          disabled={disabled}
          className={`
            ${getColor(color)!.text}
          min-w-32 ${getSize(size)} rounded-md gap-2.5 px-2 font-medium w-auto  
            ${getColor(color)!.bg}  ${getColor(color)!.hover}  ${
            getColor(color)!.textHover
          } 
          } 
          `}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
