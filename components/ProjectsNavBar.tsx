import React, { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
    handlerFilterCategory: Function;
    active: string
}> = ({ value, handlerFilterCategory, active }) => {
    let className="capitalize cursor-pointer hover:text-green"
    if (active === value) {
        className += ` ${"text-green font-black"}`
    }

  return <li 
  className={className}
  onClick={() => handlerFilterCategory(value)}
  >{value}</li>;
};

const ProjectsNavBar:FunctionComponent<{
    handlerFilterCategory: Function,
    active: string
}> = (props) => {
  return (
    <div className="flex px-3 py-3 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props}/>
      <NavItem value="django" {...props}/>
      <NavItem value="react" {...props}/>
      <NavItem value="express" {...props}/>
      <NavItem value="canvas" {...props}/>
      <NavItem value="vanilla js" {...props}/>
    </div>
  );
};

export default ProjectsNavBar;
