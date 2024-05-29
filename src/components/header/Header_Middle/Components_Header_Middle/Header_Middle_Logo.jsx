import { NavLink } from "react-router-dom";
import imageLogo from "../../../../assets/images/logo/react.svg";

export const Header_Middle_Logo = () => {
  return (
    <NavLink to={"/"}>
      <img src={imageLogo} alt="image-logo" />
    </NavLink>
  )
}

