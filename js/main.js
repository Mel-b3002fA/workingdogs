import { gsap } from "gsap";
gsap.to(".box", { x: 100 });

import { SplitText } from "gsap/SplitText";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase, SplitText);

document.addEventListener("DOMContentLoaded", () => {
  CustomEase.create("hop", "0.9, 0, 0.1, 1");

  const createSplit = (selector, type, className) => {
    return SplitText.create(selector, {
      type: type,
      [type + "Class"]: className,
      mask: type,
    });
  };

  const splitPreloaderHeader = createSplit(
    ".preloader-header a",
    "chars",
    "char"
  );

  const splitPreloaderCopy = createSplit(
    ".preloader-copy p",
    "lines",
    "line"
  );

  const splitHeader = createSplit(
    ".header-row h1",
    "lines",
    "line"
  );

  const chars = splitPreloaderHeader.chars;
  const lines = splitPreloaderCopy.lines;
  const headerlines = splitHeader.lines;
  const initialChar = chars[0];
  const lastChar = chars[chars.lenght - 1];

  chars.forEach((char, index) =>{
    gsap.set(char, { yPercent: index})
  })
});


