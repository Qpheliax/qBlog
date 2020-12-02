import React from "react";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <footer>
      <div className="year">
        <p>+ MMXX +</p>
      </div>
      <div className="social">
        <SocialIcon network="email" bgColor="#ff9900" url="" />
        <SocialIcon network="facebook" bgColor="#ff9900" url="" />
        <SocialIcon network="instagram" bgColor="#ff9900" url="" />
      </div>
    </footer>
  );
}
export default Header;
