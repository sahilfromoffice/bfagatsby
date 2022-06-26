import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import * as styles from "./sotm.module.css";

// STAR OF THE MONTH
const Sotm = () => {
  return (
    <section id="sotm" className={"section " + styles.sotm}>
      <div className={styles.sotmWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.cotmWrapper}>
            <h3 style={{ textAlign: "center", marginBottom: "5px" }}>
              Coach Of the Month
            </h3>
            <p>
              <span>
                <b>Manjalpur</b>
              </span>
              <span>March 2021</span>
            </p>
            <div className={styles.sotmImgWrapper}>
              <StaticImage
                height={300}
                alt="coach"
                placeholder="blurred"
                width={310}
                layout="fixed"
                imgStyle={{
                  borderRadius: "15px",
                }}
                src="https://lh3.googleusercontent.com/pw/AM-JKLV9bxvTgNG_adQK_OdRuCujpLd5U203uALVOvsT2RwgE31nbCZg1rm18Zfgg4Eiv35iZNOi-X_14bnOGAByqxByg5UglISVh2Mb6e70vskfufQ8mUli_Qw-vSNHD4tkrP--CATZZP9VefPeJLWMnING=w1219-h945-no?authuser=2"
              />
              <div className={styles.sotmImgTextWrapper}>
                <h3>Nilesh Patil</h3>
              </div>
            </div>
          </div>
          <div className={styles.potmWrapper}>
            <h3 style={{ textAlign: "center", marginBottom: "5px" }}>
              Player Of the Month
            </h3>
            <p>
              <span>
                <b>Manjalpur</b>
              </span>
              <span>March 2021</span>
            </p>
            <div className={styles.sotmImgWrapper}>
              <StaticImage
                placeholder="blurred"
                height={300}
                alt="player"
                width={310}
                layout="fixed"
                imgStyle={{
                  borderRadius: "15px",
                }}
                //   imgStyle={}
                src="https://res.cloudinary.com/dtsdpcmn5/image/upload/v1640710442/web2/bgs/IMG_0503_zgyy0o.webp"
              />
              <div className={styles.sotmImgTextWrapper}>
                <h3>Jal Patel</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomWrapper}>
          <Link
            to="/coaches"
            className="p-4 transition bg-cyan-800 rounded-2xl text-xl shadow-sm hover:bg-cyan-900 hover:text-white hover:translate-y-2 hover:shadow-md"
          >
            Meet our Coaches
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sotm;
