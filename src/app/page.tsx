import Image from "next/image";
import styles from "./page.module.css";
import LoginForm from "./auth/sigin-in/page";

export default function Home() {
  return <main>
   <LoginForm/>
  </main>;
}
