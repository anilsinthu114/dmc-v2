//import Dropdown from "./Dropdown";
import myImage from "./logo1.jpg";

import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="logo-container">
          { <img src={myImage} alt="JNTUV_LOGO" className="logo" /> }
          <h1 className="logo-text">
  JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA VIZIANAGARAM
  <br />
  VIZIANAGARAM-535 003, A.P 
  <h6 style={{ margin: 0 }}>(Established by Andhra Pradesh Act No.22 of 2021)</h6>
</h1>

        </div>
      </div>
      <div>
        {/* <Dropdown /> */}
      </div>
    </div>
  );
};
export default Header;