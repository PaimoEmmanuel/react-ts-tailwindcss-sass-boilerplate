import React from "react";

interface NavProps {
  bgColor?: string;
  navColor?: string;
}

const Navbar: React.FC<NavProps> = ({ bgColor, navColor }) => {
  return (
    <nav className="nav-bar--container">
      <div className="nav-bar--image-logo">
        <div className="nav-bar--image-logo__img-one">
          <img src="/images/navbar-1.png" alt="" />
          <span></span>
        </div>
        <div className="nav-bar--image-logo__img-two">
          <img src="/images/navbar-2.png" alt="" />
          <span></span>
        </div>
      </div>

      <img src="/images/mummy-at-50-logo.png" alt="" />

      <div className="nav-icon">nav</div>
    </nav>
  );
};

export default Navbar;
