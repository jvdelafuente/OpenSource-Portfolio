import "./NavbarOriginalReduce.css";
import logoimg from '../../../../../public/Logo.png'

function NavbarOriginalReduce() {
  return (
    <div className="nav-bar-r">
      
    <div className="navbar-small-logo-container-r">
        <a><img className="navbar-small-logo-r" src={logoimg} alt="" /></a>
      </div>
      <div className="navbar-small-input-container-r">
        <input
          className="navbar-small-input-r"
          type="text"
          placeholder="Search"
        />
      </div>
        <div className="navbar-small-profile-r">
          <a><div className="navbar-small-profileimg-example-r"></div></a>
        </div>

    </div>
  );
}

export default NavbarOriginalReduce;
