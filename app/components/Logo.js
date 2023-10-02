"use client"
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import landingStyles from "../styles/Landing.module.css";
/* import ReviewCarousel from "@/components/ReviewCarousel"; */

const Logo = () => {
  return (
    <div className={landingStyles.logocontainer}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0, delay: 0 }}
        className={landingStyles.inklabheading}
      >
        The ink Lab
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0, delay: 0 }}
        className={landingStyles.kretnameheading}
      >
        by Steve Kretz
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0, delay: 0 }}
        className={landingStyles.experienceheading}
      >
        PROVIDING THE BEST TATTOO EXPERIENCE
      </motion.p>
      <div className={landingStyles.socialicons}>
        <div style={{ display: "flex" }}>
          <Link href="https://www.youtube.com/@TheInkLab">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0, delay: 0.5 }}
            >
              <FontAwesomeIcon
                className={landingStyles.icon}
                icon={faYoutube}
                style={{ color: "red" }}
              />
            </motion.div>
          </Link>
          <Link href="https://www.facebook.com/skretztattoo">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0, delay: 0.5 }}
            >
              <FontAwesomeIcon
                className={landingStyles.icon}
                icon={faFacebook}
                style={{ color: "dodgerblue" }}
              />
            </motion.div>
          </Link>
          <Link href="https://www.instagram.com/skretztattoo">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0, delay: 0.5 }}
            >
              <FontAwesomeIcon
                className={landingStyles.icon}
                icon={faInstagram}
                style={{ color: "orchid" }}
              />
            </motion.div>
          </Link>
          <Link href="https://www.tiktok.com">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0, delay: 0.5 }}
            >
              <FontAwesomeIcon
                className={landingStyles.icon}
                icon={faTiktok}
                style={{color: "gold" }}
              />
            </motion.div>
          </Link>
        </div>
       {/*  <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, delay: 0 }}
        >
          <Link href="./dashboard" className={buttonStyles.primarybtn}>
            Enter
          </Link>
        </motion.div> */}
      </div>
      {/* <motion.div
        className={landingStyles.carouselcontainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 8 }}
      >
        <ReviewCarousel />
      </motion.div> */}
    </div>
  );
};

export default Logo;
