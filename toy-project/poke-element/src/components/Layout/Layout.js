import React, { useRef } from "react";
import { FullPage, Slide } from "react-full-page";
import classes from "./Layout.module.css";
import Main from "./Main";
import ResultPage from "./ResultPage";
import TypePage from "./TypePage";

const Layout = () => {
  const ref = useRef(null);

  const onControlsClick = () => {
    ref.current.scrollToSlide(1);
  };
  return (
    <FullPage ref={ref}>
      <Slide>
        <Main onClick={onControlsClick} />
      </Slide>
      <Slide>
        <TypePage />
      </Slide>
      <Slide>
        <ResultPage />
      </Slide>
    </FullPage>
  );
};
export default Layout;
