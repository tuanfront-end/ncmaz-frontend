import React, { FC } from "react";
import Header from "components/Header/Header";

export interface HeaderContainerProps {
  className?: string;
}

const HeaderContainer: FC<HeaderContainerProps> = ({ className = "" }) => {
  return <Header />;
};

export default HeaderContainer;
