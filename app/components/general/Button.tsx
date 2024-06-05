import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  icon: IconType;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-lg p-3 gap-5px ${small ? "w-[250px]" : "w-full"} ${
        outline ? "border text-black" : "bg-orange-500  text-white font-bold"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
