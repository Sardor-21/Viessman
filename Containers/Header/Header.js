import HeaderWrapper from "./HeaderWrapper";
import dataNavbar from "../../Data/Pages";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faSearch} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
    const [nav, setNav] = useState(false);

    const showNav = () => {
        setNav(!nav)
    }

  return (
      <HeaderWrapper>
          <img src="https://viessmann.vercel.app/images/viessman%20logo.png" className={"logo"} alt=""/>
          <div className={"d-flex align-items-center justify-content-between"}>
              <div className={`menu ${nav ? "right" : ""}`}>
                  <ul className={"menu_navbar"}>
                      {dataNavbar.map(v =>   <li key={v.title}>
                          <Link href={v.href}><a className={"navbar_link"} onClick={showNav}>{v.title}</a></Link>
                      </li>)}
                  </ul>
              </div>
              <div>
                  <button className={"btn text-white me-2"}>  <FontAwesomeIcon  icon={faSearch}/>  </button>
                  <button className={"btn text-white"} onClick={showNav}>  <FontAwesomeIcon  icon={faBars}/>  </button>
              </div>
          </div>
      </HeaderWrapper>
  )
}
export default Header;