import "./menubar.css";
import logo from "../images/logo.svg";

export default function MenuBar() {
  return (
    <div className="menubar">
      <div className="menubar__content">
        <i className="bx bx-search-alt-2"></i>
        <div className="divider" />
        <div className="profile">
          <img src={logo} alt="profile" />
          <div className="profile__name">
            <p>Usuario</p>
            <p>Puesto</p>
          </div>
        </div>
        <i className="bx bx-exit"></i>
      </div>
    </div>
  );
}
