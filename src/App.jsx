import logo from "./logo.svg";
import styles from "./App.module.css";
import * as lottie from 'lottie-web/build/player/lottie_light'
//import lottie from "lottie-web";
import lottieImage from "./assets/olympic.json";
import lottieImage1 from "./assets/1.json";
import { createEffect } from "solid-js/dist/server";

function App() {
  createEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#lottie-image"),
      path: lottieImage,
      animationData: lottieImage,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
    lottie.loadAnimation({
      container: document.querySelector("#lottie-image1"),
      path: lottieImage1,
      animationData: lottieImage1,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
    lottie.play();
  });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
      </header>
      <div>
      <div id="lottie-image" class={styles.olympic}></div>
      <div id="lottie-image1" class={styles.olympic}></div>
      </div>
    </div>
  );
}

export default App;
