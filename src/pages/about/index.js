import React from "react";
import * as styles from "./aboutPage.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Helmet from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Baroda Football Academy </title>
        <link
          rel="canonical"
          href="http://www.barodafootballacademy.co.in/about"
        />
      </Helmet>
      <div className={styles.pageWrapper}>
        <div className={`${styles.section} ${styles.section1}`}>
          <div className={styles.section1Lpane}>
            <h1>About Us</h1>
            <p className="px-3 py-2">
              &ensp; Formed in the year 2008, a Public Trust, Reg. No.
              F/2197/Vadodara, having income tax exemption No.
              ITBA/EXM/S/80G/2019-20A/1017073248(1) Dated 29-07-2019. BFA -
              Baroda Football Academy is one of the largest and most successful
              soccer Academy in Gujarat. With its presence for more than a
              decade, we have endowed nearly 9000 children, between 5-19 years
              of age with professional training in recreational, academic and
              competitive soccer programs and activities each year.
            </p>
            <p className="px-3 py-2">
              &ensp; Baroda Football Academy is the only academy in Vadodara,
              Gujarat, to be accredited with AIFF - All India Football
              Federation, New Delhi, giving our players an opportunity to
              participate in the National Youth League for U13, U15 & U18 years
              Boys tournaments conducted by AIFF.
            </p>
            <h2>Motto</h2>
            <p>Together Everyone Achieves More</p>
          </div>
          <div className={styles.section1Rpane}>
            <StaticImage
              placeholder="blurred"
              layout="constrained"
              alt="playing football"
              width={380}
              height={450}
              src="https://res.cloudinary.com/dtsdpcmn5/image/upload/v1640710447/web2/bgs/IMG_0015_yzn9hs.webp"
              imgStyle={{
                borderRadius: "30px",
              }}
              className="shadow-lg  "
              style={{ margin: "10px" }}
            />
          </div>
        </div>
        <section className={`${styles.section} ${styles.section2}`}>
          <h2>Vision</h2>
          <p>
            'To be recognized as one of the elite developmental soccer academies
            in INDIA.'
          </p>
          <StaticImage
            placeholder="blurred"
            layout="fullWidth"
            aspectRatio={5}
            height={250}
            style={{
              marginBottom: "30px",
              marginTop: "30px",
            }}
            // imgStyle={{
            //   maxHeight: "200px",
            // }}
            alt="playing football"
            src="https://res.cloudinary.com/dtsdpcmn5/image/upload/v1640710440/web2/bgs/IMG_0071_tm8pxk.webp"
          />
          <h2>Mission</h2>
          <p>'Building better people through the sport of soccer.'</p>
          <p>
            It is believed that better people make better sportsmen. At Baroda
            Football Academy (BFA), it has always been our mission to nurture
            the skills of the youth, extract their potential and develop those
            to the successful level with soccer. It is our constant quest to
            render improved fitness, health and approach to life beyond sports
            while making the budding spirits climb to the next level.
          </p>
        </section>
        <section className={`${styles.section} ${styles.section3}`}>
          <Fact number="2700+" title="Registered Players" />
          <Fact number="54+" title="Trophies" />
          <Fact number="80+" title="Staff" />
          <Fact number="15+" title="Training Centers" />
          <Fact number="15+" title="Years of Experience" />
          <Fact number="18000+" title="Fraternity" />
          <Fact number="153+" title="National Players" />
          <Fact number="54+" title="Qualified Coaches" />
        </section>
        <section className={`${styles.section} ${styles.section4}`}>
          <h2>Principles</h2>
          <p>
            As a leading academic institution, Baroda Football Academy’s
            approach to education and development is influenced by several
            fundamental characteristics and guidelines so that our students can
            get trained and learn sportsmanship at the highest levels. Some of
            these principles include:
          </p>
          <ol>
            <li>
              Creating and maintaining a supportive & adaptive learning culture
            </li>
            <li>Providing quality training and learning facilities</li>
            <li>
              Age-appropriate curriculum designed for the training and
              development of the youth, with proper feedback
            </li>
            <li>
              Recruiting and retaining of exceptional coaches, trainers,
              administrators and volunteers
            </li>
            <li>
              Unremitted commitment to professional and organizational
              development
            </li>
            <li>
              Cultivating and maintaining a culture that encourages the
              involvement of family and community
            </li>
          </ol>
        </section>
      </div>
    </>
  );
};

export default About;

const Fact = ({ number, title }) => {
  return (
    <div
      style={{
        height: "130px",
        width: "240px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // background: "var(--light)",
        background: "whitesmoke",
        borderRadius: "15px",
        outline: "12px solid var(--primary-5)",
        margin: "25px 25px",
        color: "var(--secondary-5)",
        fontFamily: "'Just Another Hand', cursive",
      }}
    >
      <h3
        style={{
          fontSize: "2.6rem",
          margin: 0,
          padding: 0,
          letterSpacing: "4px",
          fontWeight: 600,
        }}
      >
        {number}
      </h3>
      <h3
        style={{
          fontSize: "2.1rem",
          letterSpacing: "2px",
          margin: 0,
          padding: 0,
          paddingRight: "25px",
          paddingLeft: "15px",
          wordWrap: "break-word",
          textAlign: "center",
        }}
      >
        {title}
      </h3>
    </div>
  );
};
