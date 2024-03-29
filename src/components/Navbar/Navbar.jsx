import styles from "../../styles/Navbar.module.css"
export const Navbar = () => {
  return (
    <>
      <nav class="navbar bg-body-tertiary" className={styles.NavBar}>
        <div class="container-fluid ">
          <a class="navbar-brand " href="#">
            <img className={styles.NavImg} src="https://mellow-seahorse-fc9268.netlify.app/assets/logo.png" alt="" />
            PhotoFolio
          </a>
        </div>
      </nav>
    </>
  );
};
