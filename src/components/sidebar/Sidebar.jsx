import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const sidebarNavItems = [
  {
    display: "Administradores",
    icon: <i className="bx bx-user"></i>,
    to: "/",
    section: "",
  },
  {
    display: "Catalogos",
    icon: <i className="bx bx-food-menu"></i>,
    to: "/catalogue",
    section: "catalogue",
  },
  {
    display: "Lideres",
    icon: <i className="bx bx-group"></i>,
    to: "/leaders",
    section: "leaders",
  },
  {
    display: "Usuarios",
    icon: <i className="bx bx-shopping-bag"></i>,
    to: "/users",
    section: "users",
  },
  {
    display: "Mi empresa",
    icon: <i className="bx bx-group"></i>,
    to: "/my_company",
    section: "my_company",
  },
  {
    display: "Cursos",
    icon: <i className="bx bx-gift"></i>,
    to: "/courses",
    section: "courses",
  },
  {
    display: "Recompesas",
    icon: <i className="bx bx-shopping-bag"></i>,
    to: "/rewards",
    section: "rewards",
  },
  {
    display: "Eventos",
    icon: <i className="bx bx-calendar"></i>,
    to: "/events",
    section: "events",
  },
  {
    display: "Notificaciones",
    icon: <i className="bx bx-bell"></i>,
    to: "/notifications",
    section: "notifications",
  },
  {
    display: "Reportes",
    icon: <i className="bx bx-scatter-chart"></i>,
    to: "/reports",
    section: "reports",
  },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">GCL</div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * (stepHeight + 2.25)
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
