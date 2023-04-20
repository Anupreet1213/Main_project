import React, { useEffect, useState } from "react";
import { HamburgerMenu } from "./HamBurgerMenu";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navChild1">
        {/* <img src={logo} /> */}
        Hello
      </div>
      <div className="navChild2">
        <span className="nav2Item">Home</span>
        <span className="nav2Item">About</span>
        <span className="nav2Item">Speakers</span>
        <span className="nav2Item">Schedule</span>
        <div className="navChild3">Book Your Seat</div>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default NavBar;
