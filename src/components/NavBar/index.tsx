"use client";
import style from "./styles.module.scss";
import Image from "next/image";
import logo from "../../assets/shared/logo.svg";
import menu from "../../assets/shared/icon-hamburger.svg";
import Link from "next/link";
import background from "../../assets/home/background-home-desktop.jpg";

export const NavBar = () => {
  return (
    <header className={style.header}>
      <div className={style.flex_box}>
        <figure className={style.box_img}>
          <Image src={logo} alt="logo" />
          <div className={style.line}></div>
        </figure>

        <Image className={style.menu} src={menu} alt="menu" />
        <div className={style.box_container}>

        <div className={style.box_nav}>
        </div>
          <nav className={style.nav}>
            <Link href={""}>
              <span>00</span> HOME
            </Link>

            <Link href={""}>
              <span>01</span> DESTINATION
            </Link>

            <Link href={""}>
              <span>02</span> CREW
            </Link>

            <Link href={""}>
              <span>03</span> TECHNOLOGY
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
