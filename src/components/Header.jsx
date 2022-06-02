import styles from "./Header.module.css"

import igniteLogo from "../assets/ignite-logo.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do ignite, são dois triangulos verder apontatos para o canto superior direito" className={styles.logo} />
      <strong>Ignite Feed</strong>
    </header>
  )
}