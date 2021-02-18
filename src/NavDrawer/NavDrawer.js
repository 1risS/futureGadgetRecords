import { React, useState, useRef } from "react";
import "./NavDrawer.css";
import ContentMenu from "../ContentMenu/ContentMenu";

import logo from "../images/logo_test.png";

function NavDrawer() {
  const [expanded, setExpanded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const contentVisibleRef = useRef(contentVisible);
  contentVisibleRef.current = contentVisible;

  function onClick() {
    if (expanded === false) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }

  function onMouseEnter() {
    setExpanded(true);
  }

  function onMouseLeave() {
    setTimeout(() => {
      if (!contentVisibleRef.current) {
        setExpanded(false);
      }
    }, 100);
  }

  function onContentMenuMouseEnter() {
    setContentVisible(true);
    console.log("content visible true");
  }

  function onContentMenuMouseLeave() {
    setContentVisible(false);
    setExpanded(false)
  }

  return (
    <>
      <div className="NavDrawerContainer">
        <div
          className="LogoContainer"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <img onClick={onClick} src={logo} alt="logo" className="logo"></img>
        </div>
        <ContentMenu
          style={!expanded ? { display: "none" } : {}}
          onMouseEnter={onContentMenuMouseEnter}
          onMouseLeave={onContentMenuMouseLeave}
        />
      </div>
    </>
  );
}

export default NavDrawer;
