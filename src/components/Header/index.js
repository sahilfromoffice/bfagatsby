import { Link } from "gatsby";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineDown } from "@react-icons/all-files/ai/AiOutlineDown";
import * as styles from "./header.module.css";

const Header = ({ locationPath }) => {
  const [menuState, setMenuState] = useState(false);
  useEffect(() => {
    setMenuState(false);
  }, [locationPath]);

  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = useCallback(() => {
    let scrollP =
      window.scrollY ||
      window.scrollTop ||
      document.getElementsByTagName("html")[0].scrollTop;
    if (scrollP !== scrollPos) {
      setScrollPos(scrollP);
    }
  }, [scrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const addActiveClass = menuState ? ` ${styles.menuActive} ` : " ";
  const addScrolledClass = scrollPos > 100 ? ` ${styles.scrolled} ` : "";

  return (
    <header
      className={styles.headerWrapper + addActiveClass + addScrolledClass}
    >
      <div className={styles.logoWrapper + addActiveClass}>
        <Link to="/">
          <img
            className={styles.logo + addActiveClass + addScrolledClass}
            src="https://res.cloudinary.com/dtsdpcmn5/image/upload/v1640714203/web2/logos/bfa-logo_e1ojjj.png"
            alt="Baroda Football Academy Logo"
          />
        </Link>
        <button
          onClick={() => setMenuState((prev) => !prev)}
          className={styles.menuBtn}
        >
          MENU
        </button>
      </div>

      <nav>
        <ul className={styles.navWrapper + addActiveClass}>
          {navLinks.map((link) => {
            return (
              <NavBarLinkComponent
                key={link.path}
                title={link.title}
                path={link.path}
                addScrolledClass={addScrolledClass}
                subMenu={link.subMenu}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const NavBarLinkComponent = ({ title, path, addScrolledClass, subMenu }) => {
  return (
    <li className={styles.navMenuItem}>
      <Link
        className={styles.navLink + addScrolledClass}
        activeClassName={styles.active}
        to={path}
      >
        <span>{title}</span>
        {subMenu && <AiOutlineDown className="w-4 m-0 p-0 inline-block ml-1" />}
      </Link>
      {subMenu && (
        <ul className={styles.navMenuSubItemList}>
          {subMenu.map((sm) => (
            <Link
              key={sm?.path}
              className={styles.subNavlink + addScrolledClass}
              activeClassName={styles.active}
              to={sm.path}
            >
              {sm.title}
            </Link>
          ))}
        </ul>
      )}
    </li>
  );
};

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Events",
    path: "/events",
  },
  {
    title: "Centers",
    path: "/centers",
  },
  {
    title: "Tours",
    path: "/tours",
  },
  {
    title: "CAPS",
    path: "/caps",
  },
  {
    title: "About",
    path: "/about",
    subMenu: [
      {
        title: "Management",
        path: "/management",
      },
      {
        title: "Coaches",
        path: "/coaches",
      },
      {
        title: "Achievements",
        path: "/achievements",
      },
      {
        title: "Affiliations",
        path: "/affiliations",
      },
      {
        title: "In the News",
        path: "/news",
      },
    ],
  },
];

export default Header;
