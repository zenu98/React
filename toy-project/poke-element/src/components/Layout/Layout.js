import React, { useRef } from "react";
import { FullPage, Slide } from "react-full-page";
import classes from "./Layout.module.css";
import Main from "./Main";
import ResultPage from "./ResultPage";
import TypePage from "./TypePage";

const Layout = () => {
  const ref = useRef(null);

  const onControlsClickMain = () => {
    ref.current.scrollToSlide(1);
  };
  const onControlsClickType = () => {
    ref.current.scrollToSlide(2);
  };
  return (
    <FullPage ref={ref}>
      <Slide>
        <Main onClick={onControlsClickMain} />
      </Slide>
      <Slide>
        <TypePage onClick={onControlsClickType} />
      </Slide>
      <Slide>
        <ResultPage />
      </Slide>
    </FullPage>
  );
};
export default Layout;
