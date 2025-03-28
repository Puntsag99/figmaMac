import { Hea } from "./Hea";

import styles from "@/styles/Hea.module.css";

export const Topsec = () => {
  return (
    <div className={styles.backRound}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>
          <span style={{ color: "#727272" }}>JHON</span>
          <span style={{ color: "#ffffff" }}>DOE</span>
        </h1>

        <nav className={styles.naviTitle}>
          <Hea href="#about">About</Hea>
          <Hea href="#skills">Skills</Hea>
          <Hea href="#projects">Projects</Hea>
        </nav>

        <div className={styles.navItemOne}>
          <h1 className={styles.in}>in</h1>
          <Hea href="link">Linkedin</Hea>
        </div>

        <div className={styles.navItemTWo}>
          <Hea href="img">
            <img src="img/Vector.png" alt="" />
          </Hea>
          <Hea href="git">Github</Hea>
        </div>

        <div className={styles.navItemThree}>
          <div className={styles.contactMe}>
            <img src="img/Vectormes.png" alt="" />
            <Hea href="con">Contact me</Hea>
          </div>
        </div>
      </header>
    </div>
  );
};
