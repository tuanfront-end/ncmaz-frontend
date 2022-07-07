import Button, { ButtonProps } from "components/Button/Button";
import React from "react";

export interface ButtonPrimaryDangerProps extends ButtonProps {}

const ButtonPrimaryDanger: React.FC<ButtonPrimaryDangerProps> = ({
  className = "",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimaryDanger disabled:cursor-not-allowed disabled:bg-opacity-60 bg-red-600 hover:bg-red-700 text-red-50 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimaryDanger;
