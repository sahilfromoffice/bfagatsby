import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../../pages/index.module.css";

export const Landing = () => {
  return (
    <section id="home" className={"section " + styles.landing}>
      <div className={styles.landingWrapper}>
        <StaticImage
          className={styles.frontPageImg}
          src="https://res.cloudinary.com/dtsdpcmn5/image/upload/v1640710446/web2/bgs/IMG_0482_imjfzp.webp"
          alt="Some big pic"
          placeholder="blurred"
          layout="constrained"
        />
        <div className={styles.headingWrapper}>
          <article>
            <h3 className={styles.sectionHeading}>
              You can be the next big thing.
            </h3>
            <p className={styles.sectionSubHeading}>
              The best time to start is now.
              {/* Don't let the opportunity slip. */}
              <br />
              <small className="text-sm">
                Get Started by Choosing a nearby center.
              </small>
            </p>
          </article>
          {/* <Link
            to="/residential"
            className="bg-sky-900 text-white p-4 rounded-3xl text-2xl cursor-pointer self-center text-center hover:bg-sky-800 animate-fade-enter-right-1 hover:text-slate-200 hover:-translate-y-2"
          >
            <span>BFA Residential Academy</span>
          </Link> */}
          <Link
            to="/centers"
            className="bg-cyan-900 text-white p-4 rounded-3xl text-2xl cursor-pointer  self-center hover:bg-cyan-800 animate-fade-enter-right-1 hover:text-slate-200 hover:-translate-y-2"
          >
            Training Centers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
