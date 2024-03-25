import myImage from "./logo1.jpg";


import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="header-container">
          <img src={myImage} alt="JNTUV_LOGO" className="logo" />
          <div className="header-text">
            <div className="logo-text">
              <h3>
                JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA VIZIANAGARAM
              </h3>
              <h5> VIZIANAGARAM-535 003, A.P</h5>
            </div>
            <h6>(Established by Andhra Pradesh Act No.22 of 2021)</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;