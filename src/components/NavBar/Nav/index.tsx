import Link from "next/link";
import style from "../styles.module.scss";

export const Nav = () => {
  return (
    <nav className={style.nav}>
      <Link href={"/"}>
        <span>00</span> HOME
      </Link>

      <Link href={"/destination"}>
        <span>01</span> DESTINATION
      </Link>

      <Link href={""}>
        <span>02</span> CREW
      </Link>

      <Link href={""}>
        <span>03</span> TECHNOLOGY
      </Link>
    </nav>
  );
};
