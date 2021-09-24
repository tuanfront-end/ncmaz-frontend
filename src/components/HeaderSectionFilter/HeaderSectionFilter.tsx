import ButtonSecondary from "components/Button/ButtonSecondary";
import Heading from "components/Heading/Heading";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { FC } from "react";
import { ReactNode } from "react";

export interface HeaderSectionFilterTabItem {
  id: number;
  value: string;
  label: string;
  name: string;
}

export interface HeaderSectionFilterProps {
  tabActiveId: number;
  tabs: HeaderSectionFilterTabItem[];
  heading: ReactNode;
  subHeading?: ReactNode;
  viewMoreHref?: string;
  onClickTab: (item: HeaderSectionFilterTabItem | -1) => void;
}

const HeaderSectionFilter: FC<HeaderSectionFilterProps> = ({
  tabActiveId,
  tabs,
  subHeading = "",
  viewMoreHref = "#",
  heading = "🎈 Latest Articles",
  onClickTab,
}) => {
  return (
    <div className="flex flex-col mb-8 relative">
      <Heading desc={subHeading}>{heading}</Heading>
      <div className="flex items-center justify-between">
        <Nav
          className="sm:space-x-2"
          containerClassName="relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar"
        >
          <NavItem isActive={tabActiveId === -1} onClick={() => onClickTab(-1)}>
            {NCMAZ_TRANSLATE["all"]}
          </NavItem>
          {tabs.map((item, index) => (
            <NavItem
              key={index}
              isActive={tabActiveId === item.id}
              onClick={() => onClickTab(item)}
            >
              {item.name}
            </NavItem>
          ))}
        </Nav>
        {viewMoreHref && (
          <span className="hidden sm:block flex-shrink-0">
            <ButtonSecondary href={viewMoreHref} className="!leading-none">
              <span> {NCMAZ_TRANSLATE["viewAll"]}</span>
              <i className="ml-3 las la-arrow-right text-xl leading-none"></i>
            </ButtonSecondary>
          </span>
        )}
      </div>
    </div>
  );
};

export default HeaderSectionFilter;
