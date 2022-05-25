import { FC } from "react";
import "./Tab.css";
import { Videos } from "../../types/types";
import { NavLink } from "react-router-dom";

interface TabProps {
  item: Videos;
  onClick: () => void;
  index: number;
}

const Tab: FC<TabProps> = ({ item, onClick, index }) => {
  return (
    <NavLink to={`/training/${index}`} className="tab_item" onClick={onClick}>
      {item.title}
    </NavLink>
  );
};

export default Tab;
