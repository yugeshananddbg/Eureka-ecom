import React, { useState } from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../../../images/Logo.png";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

function Header() {
  const [mobile, setMobile] = useState(false);
  const btnHandler = () => {
        if (mobile == false) {
          setMobile(true);
        } else {
          setMobile(false);
        }
        console.log(mobile);
      };
  return (
 
    <div className="header">
      <div className="logo">
        <Link to ="/">
        <img src={Logo} style={{ width: "100px" }} alt="logo" />
        </Link>
      </div>
      <div className="mobile">
        <MenuIcon
          className="micons"
          style={{
            fontSize: "40px",
          }}
          onClick={btnHandler}
        />
      </div>
      <div className={`navlist ${mobile ? " mobilenav" : ""}`}>
        <Link className="item" to="/search" onClick={btnHandler}>
          <SearchIcon className="icons" />
          <h1> Search</h1>
        </Link>
        <Link className="item" to="/login" onClick={btnHandler}>
          <PersonRoundedIcon className="icons" />
          <h1>Sign In</h1>
        </Link>
        <Link className="item" to="/products" onClick={btnHandler}>
          <LibraryBooksIcon className="icons" />
          <h1>Products</h1>
        </Link>
        <Link className="item" to="/contact" onClick={btnHandler}>
          <ContactMailIcon className="icons" />
          <h1>Contact</h1>
        </Link>
        <Link className="item" to="/about" onClick={btnHandler}>
          <AdminPanelSettingsIcon className="icons" /> <h1>About</h1>
        </Link>
        {/* <Link className="item" to="./cart">
          <ShoppingBagRoundedIcon className="icons" /> <h1>Shopping Cart</h1>
        </Link> */}
      </div>
    </div>
  );
}

export default Header;



// import React, { useState } from "react";
// import Logo from "../../images/Logo.png";
// import "./header.css";
// import { Link } from "react-router-dom";
// import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
// import HomeIcon from "@mui/icons-material/Home";
// import PersonIcon from "@mui/icons-material/Person";
// import ContactMailIcon from "@mui/icons-material/ContactMail";
// import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import MenuIcon from "@mui/icons-material/Menu";

// const Header = () => {
//   const [mobile, setMobile] = useState(false);
//   const btnHandler = () => {
//     if (mobile == false) {
//       setMobile(true);
//     } else {
//       setMobile(false);
//     }
//     console.log(mobile);
//   };
//   return (
//     <div className="header">
//       <div className="logo">
//         <img src={Logo} style={{ width: "100px" }} alt="logo" />
//       </div>
//       <div className="mobile">
//         <MenuIcon
//           className="micons"
//           style={{
//             fontSize: "40px",
//           }}
//           onClick={btnHandler}
//         />
//       </div>
//       <div className={`navlist ${mobile ? " mobilenav" : ""}`}>
//         <Link className="item" to="/">
//           <HomeIcon className="icons" />
//           <h1> Home</h1>
//         </Link>
//         <Link className="item" to="/">
//           <PersonIcon className="icons" />
//           <h1>About</h1>
//         </Link>
//         <Link className="item" to="/">
//           <LibraryBooksIcon className="icons" />
//           <h1>Project</h1>
//         </Link>
//         <Link className="item" to="/">
//           <ContactMailIcon className="icons" />
//           <h1>Contact</h1>
//         </Link>
//         <Link className="item" to="/">
//           <AdminPanelSettingsIcon className="icons" /> <h1>Login</h1>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;

