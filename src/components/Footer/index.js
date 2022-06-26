import { Link } from "gatsby";
import React from "react";
import constants from "../../config/constants";
import Team from "../Team";
import * as styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.content}>
        <div className="flex flex-col justify-around h-full ">
          <div className={styles.branding}>
            <h1>BFA</h1>
            <p>
              Working on the future
              <br />
              For the future.
            </p>
          </div>
          <div className="mt-5">
            <h2>Accreddited by AIFF</h2>
          </div>
        </div>
        <div className={styles.footerLinks + " " + styles.explore}>
          <h4>Explore</h4>
          <ul
            className="flex flex-col flex-wrap items-center"
            style={{
              maxHeight: "180px",
            }}
          >
            {navLinks.explore.map((l) => {
              return (
                <li key={l.url}>
                  <Link to={l.url} key={l.url}>
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.footerLinks + " " + styles.social}>
          <h4>Social Media</h4>
          <ul
            className="flex flex-col flex-wrap items-center"
            style={{
              maxHeight: "180px",
            }}
          >
            {navLinks.sMedia.map((l) => {
              return (
                <li key={l.url}>
                  <a rel="noreferrer" target="_blank" href={l.url} key={l.url}>
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.footerLinks + " " + styles.visitUs}>
          <h4>Visit Us</h4>
          <p>{constants.contactAddress}</p>
        </div>

        <div className={styles.footerLinks + " " + styles.contact}>
          <h4>Contact</h4>
          <ul>
            <li>{constants.contactEmail}</li>
            <li>{constants.contactNumber}</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomLine}>
        <div>{new Date().getFullYear()} © Baroda Football Academy</div>
        <Team />
        <div>
          Made With <span style={{ color: "#c84b31" }}>❤</span> by Sahil Rana
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const navLinks = {
  explore: [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/centers",
      label: "Centers",
    },
    {
      url: "/about",
      label: "About",
    },
    {
      url: "/events",
      label: "Events",
    },
    {
      url: "/caps",
      label: "CAPS",
    },
    {
      url: "/tours",
      label: "Tours",
    },
    {
      url: "/coaches",
      label: "Coaches",
    },
    {
      url: "/management",
      label: "Management",
    },
    {
      url: "/achievements",
      label: "Achievements",
    },
    {
      url: "/contact",
      label: "Contact",
    },
    {
      url: "/residential",
      label: "Residential",
    },
    {
      url: "/news",
      label: "In The News",
    },
  ],
  sMedia: [
    {
      url: constants.instagramUrl,
      label: "Instagram",
    },
    {
      url: constants.facebookUrl,
      label: "Facebook",
    },
    {
      url: constants.youtubeUrl,
      label: "Youtube",
    },
    {
      url: constants.whatsappUrl,
      label: "Whatsapp",
    },
  ],
};
