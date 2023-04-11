import styles from "./Navbar.module.css";

import { BiMenu } from "react-icons/bi";
import { useOutsideClick } from "./useOutsideClick";
import { useState } from "react";

function Navbar() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  console.log(isActive);

  return (
    <>
      <header>
        <div className="header">
          <div className={styles.contentHeader}>
            <div className={styles.headerText}>
              <h4>O Maior aplicativo de agendamentos do Brasil</h4>
            </div>
            <div className={styles.iconNavbar}>
              <img src="../public/brazil.png" alt="Bandeira do Brasil" />
            </div>
          </div>
          <div className={styles.lineNavbar}></div>
          <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
              <img src="../public/logo.png" />
              <h2>AgendamentosPop</h2>
            </div>
            <div className={styles.navbarLinks}>
              <ul>
                <li>
                  <a href="">Incio</a>
                </li>
                <li>
                  <a href="">Sobre</a>
                </li>
                <li>
                  <a href="">Vantagens</a>
                </li>
                <li>
                  <a href="">Planos</a>
                </li>
                <li>
                  <a href="">Contato</a>
                </li>
              </ul>
              <a href="#" className={styles.action_btn}>
                Baixe Agora
              </a>
            </div>
            <div className={styles.iconMenu} onClick={onClick}>
              <BiMenu />
            </div>
          </div>

          <div className={styles.lineNavbarEnd}></div>
        </div>
        <nav
          ref={dropDownRef}
          className={`menuresponsive ${isActive ? "active" : "inactive"}`}
        >
          <div className={styles.NavbarResponsive}>
            <div className={styles.boxMenuResponsive}>
              <ul className={styles.navbarLinksResponsive}>
                <li>
                  <a href="">Incio</a>
                </li>
                <li>
                  <a href="">Sobre</a>
                </li>
                <li>
                  <a href="">Vantagens</a>
                </li>
                <li>
                  <a href="">Planos</a>
                </li>
                <li>
                  <a href="">Contato</a>
                </li>
              </ul>
              <a href="#" className={styles.action_btn}>
                Baixe Agora
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
