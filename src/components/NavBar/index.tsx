import Link from "next/link";
import style from "./styles.module.scss";
import { barlow_condesed } from "@/app/layout";
import Image from "next/image";
import logo from "../../assets/shared/logo.svg";
import menu from "../../assets/shared/icon-hamburger.svg";

export const NavBar = () => {
  return (
    <header className={style.header}>
      <div className={style.box_img}>
        <Image src={logo} alt="logo" />
        <div className={style.line}></div>
      </div>

      <Image className={style.menu} src={menu} alt="menu" />

      <div className={style.box_nav}>
        <div className={style.overlay}></div>

        <nav className={style.nav}>
          <Link href={""} className={`${barlow_condesed.className}`}>
            <span>00</span> HOME
          </Link>

          <Link href={""} className={`${barlow_condesed.className}`}>
            <span>01</span> DESTINATION
          </Link>

          <Link href={""} className={`${barlow_condesed.className}`}>
            <span>02</span> CREW
          </Link>

          <Link href={""} className={`${barlow_condesed.className}`}>
            <span>03</span> TECHNOLOGY
          </Link>
        </nav>
      </div>
    </header>
  );
};
