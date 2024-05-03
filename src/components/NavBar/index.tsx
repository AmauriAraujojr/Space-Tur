"use client";
import style from "./styles.module.scss";
import Image from "next/image";
import logo from "../../assets/shared/logo.svg";
import menu from "../../assets/shared/icon-hamburger.svg";
import { Nav } from "./Nav";

export const NavBar = () => {
  return (
    <header className={style.header}>
      <div className={style.flex_box}>
        <figure className={style.box_img}>
          <Image src={logo} alt="logo" />
          <div className={style.line}></div>
        </figure>

        <Image
          className={style.menu}
          src={menu}
          alt="menu"
          onClick={() => console.log("oi")}
        />

        <Nav />
      </div>
    </header>
  );
};
