import React, {useState} from 'react';
import SbBody from './sb-body';
import SbHeader from './sb-header';
import SbItem from './sb-item';

function SideBar(props) {
  const [open, setOpen] = useState(false);

  const clickHandle = () => {
    setOpen(!open);
  }
  return (
    <div className="wrapper">
      <div className={"nav" + (open ? " nav-open" : " nav-close")} id="side-nav">
        <i className={(open ? "i-back " : "i-menu ") + "i-1x-5 nav-icon"} onClick={clickHandle}></i>
        <SbBody>
          <SbHeader open={open} />
          <SbItem icon="note" text="My Notes" to="/home" />
          <SbItem icon="bar-chart" text="Statistics" to="/stats" />
          <SbItem icon="trash" text="Notes Bin" to="/bin" />
          <SbItem icon="news" text="News" to="/news" />
          <hr className="sidebar-hr" />
          <SbItem icon="user" text="My Account" to="/user" />
          <SbItem icon="power" text="Sing-out" />
        </SbBody>
      </div>
    </div>
  );
}
export default SideBar;