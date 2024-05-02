import style from "./styles.module.scss"
import { NavBar } from "@/components/NavBar";

const Home = () => {
 
  return (
    <main className={style.main}>
      <NavBar/>
    </main>
  );
};

export default Home