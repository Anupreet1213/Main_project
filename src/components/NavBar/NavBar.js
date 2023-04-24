import React, { useEffect, useState } from "react";
import { HamburgerMenu } from "./HamBurgerMenu";
import { Link } from "react-scroll";
import logo from "./mainLogo.png";

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
        <img src={logo} />
        {/* Hello */}
      </div>
      <div className="navChild2">
        <Link to="hero" smooth={true}>
          {" "}
          <span className="nav2Item">Home</span>{" "}
        </Link>
        <Link to="buy" smooth={true}>
          {" "}
          <span className="nav2Item">How to Buy</span>{" "}
        </Link>
        <Link to="product" smooth={true}>
          {" "}
          <span className="nav2Item">Product</span>{" "}
        </Link>
        <Link to="roadmap" smooth={true}>
          {" "}
          <span className="nav2Item">Roadmap</span>{" "}
        </Link>{" "}
        <Link to="contact" smooth={true}>
          {" "}
          <span className="nav2Item">Contact Us</span>{" "}
        </Link>{" "}
        <div className="navChild3">Book Your Seat</div> <HamburgerMenu />
      </div>
    </nav>
  );
};

export default NavBar;
