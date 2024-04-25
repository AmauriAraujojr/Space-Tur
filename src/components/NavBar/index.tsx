import Link from "next/link";
import style from "./styles.module.scss"
import { barlow_condesed } from "@/app/layout";

export const NavBar = () => {
  return (
    <header className={style.header}>
      <div></div>
      <nav className={style.nav}>
       
        <ul>
          <li className={`${barlow_condesed.className}`}>
            <Link href={""} >HOME</Link>
          </li>
          <li>
            <Link href={""}>DESTINATION</Link>
          </li>
          <li>
            <Link href={""}>CREW</Link>
          </li>
          <li>
            <Link href={""}>TECHNOLOGY</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
