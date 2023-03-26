import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
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
          </div>
        </div>
        <div className={styles.lineNavbarEnd}></div>
      </div>
    </>
  );
}

export default Navbar;
