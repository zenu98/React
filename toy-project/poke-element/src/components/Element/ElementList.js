import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ElementList.module.css";
import elementSlice, { elementActions } from "../../store/element-slice";
import { GoFlame } from "react-icons/go";
import { IoWater, IoEllipseSharp } from "react-icons/io5";
import {
  GiFrozenOrb,
  GiHighGrass,
  GiPoisonBottle,
  GiEarthSpit,
  GiLibertyWing,
  GiStoneBlock,
  GiFairyWings,
  GiEvilEyes,
} from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  FaFistRaised,
  FaDragon,
  FaBug,
  FaUikit,
  FaGhost,
  FaBullseye,
} from "react-icons/fa";

const ElementList = (props) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.element.items);
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle((prev) => !prev);
  };

  const selectHandler = (e) => {
    console.log(items);
    const name = e.target.id;
    console.log(elementSlice);
    dispatch(
      elementActions.select({
        name,
      })
    );
  };

  return (
    <div className={`${classes["wrapper"]}`}>
      <div
        className={`${
          toggle ? classes["wrapper-clicked"] : classes["wrapper-disclicked"]
        }`}
      ></div>

      <div className={classes["ground"]}>
        <img
          className={`${
            toggle ? classes["question-inactive"] : classes["question-active"]
          }`}
          alt="question"
          src="img/question.png"
        />
        <img
          className={`${
            toggle
              ? classes["groundball-inactive"]
              : classes["groundball-active"]
          }`}
          alt="groundball"
          src="img/pixelball.png"
          onClick={clickHandler}
        />
      </div>
      <div className={classes["menu-btn"]}>
        <img
          className={`${
            toggle ? classes["menuball-active"] : classes["menuball-inactive"]
          }`}
          alt="menuball"
          src="img/pixelball.png"
          onClick={clickHandler}
        />
      </div>

      {toggle && (
        <img
          className={
            items.length > 0
              ? classes["arrow-btn-active"]
              : classes["arrow-btn"]
          }
          onClick={() => {
            props.onFetch();
          }}
          alt="arrow"
          src="img/arrow.png"
        />
      )}
      {props.isLoading && (
        <img
          className={classes["loading"]}
          src="img/Spinner.gif"
          alt="로딩중"
          width="5%"
        />
      )}

      {toggle && items.length > 0 && (
        <img
          className={classes.indicateone}
          src={`img/${items[0].name}.png`}
          alt={`${items[0].name}`}
        />
      )}
      {toggle && items.length > 1 && (
        <img
          className={classes.indicatetwo}
          src={`img/${items[1].name}.png`}
          alt={`${items[1].name}`}
        />
      )}

      <div className={`${classes["icons-wrapper"]}`}>
        <div className={`${toggle ? classes.icons : classes.disicons}`}>
          <div
            className={`${
              items.some((item) => item.name === "fire")
                ? classes["icon-background-fire"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="fire"
            onClick={selectHandler}
          >
            <GoFlame
              className={`${
                items.some((item) => item.name === "fire")
                  ? classes["icon-clicked"]
                  : classes["icon-fire"]
              }`}
            />
          </div>

          <div
            className={`${
              items.some((item) => item.name === "water")
                ? classes["icon-background-water"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="water"
            onClick={selectHandler}
          >
            <IoWater
              className={`${
                items.some((item) => item.name === "water")
                  ? classes["icon-clicked"]
                  : classes["icon-water"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "electric")
                ? classes["icon-background-electric"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="electric"
            onClick={selectHandler}
          >
            <AiFillThunderbolt
              className={`${
                items.some((item) => item.name === "electric")
                  ? classes["icon-clicked"]
                  : classes["icon-electric"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "ice")
                ? classes["icon-background-ice"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="ice"
            onClick={selectHandler}
          >
            <GiFrozenOrb
              className={`${
                items.some((item) => item.name === "ice")
                  ? classes["icon-clicked"]
                  : classes["icon-ice"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "grass")
                ? classes["icon-background-grass"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="grass"
            onClick={selectHandler}
          >
            <GiHighGrass
              className={`${
                items.some((item) => item.name === "grass")
                  ? classes["icon-clicked"]
                  : classes["icon-grass"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "fight")
                ? classes["icon-background-fight"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="fight"
            onClick={selectHandler}
          >
            <FaFistRaised
              className={`${
                items.some((item) => item.name === "fight")
                  ? classes["icon-clicked"]
                  : classes["icon-fight"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "poison")
                ? classes["icon-background-poison"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="poison"
            onClick={selectHandler}
          >
            <GiPoisonBottle
              className={`${
                items.some((item) => item.name === "poison")
                  ? classes["icon-clicked"]
                  : classes["icon-poison"]
              }`}
            />
          </div>

          <div
            className={`${
              items.some((item) => item.name === "ground")
                ? classes["icon-background-ground"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="ground"
            onClick={selectHandler}
          >
            <GiEarthSpit
              className={`${
                items.some((item) => item.name === "ground")
                  ? classes["ground-icon-clicked"]
                  : classes["icon-ground"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "flying")
                ? classes["icon-background-flying"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="flying"
            onClick={selectHandler}
          >
            <GiLibertyWing
              className={`${
                items.some((item) => item.name === "flying")
                  ? classes["icon-clicked"]
                  : classes["icon-flying"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "rock")
                ? classes["icon-background-rock"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="rock"
            onClick={selectHandler}
          >
            <GiStoneBlock
              className={`${
                items.some((item) => item.name === "rock")
                  ? classes["icon-clicked"]
                  : classes["icon-rock"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "dragon")
                ? classes["icon-background-dragon"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="dragon"
            onClick={selectHandler}
          >
            <FaDragon
              className={`${
                items.some((item) => item.name === "dragon")
                  ? classes["icon-clicked"]
                  : classes["icon-dragon"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "bug")
                ? classes["icon-background-bug"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="bug"
            onClick={selectHandler}
          >
            <FaBug
              className={`${
                items.some((item) => item.name === "bug")
                  ? classes["icon-clicked"]
                  : classes["icon-bug"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "psychic")
                ? classes["icon-background-psychic"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="psychic"
            onClick={selectHandler}
          >
            <FaBullseye
              className={`${
                items.some((item) => item.name === "psychic")
                  ? classes["icon-clicked"]
                  : classes["icon-psychic"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "steel")
                ? classes["icon-background-steel"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="steel"
            onClick={selectHandler}
          >
            <FaUikit
              className={`${
                items.some((item) => item.name === "steel")
                  ? classes["icon-clicked"]
                  : classes["icon-steel"]
              }`}
            />
          </div>

          <div
            className={`${
              items.some((item) => item.name === "ghost")
                ? classes["icon-background-ghost"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="ghost"
            onClick={selectHandler}
          >
            <FaGhost
              className={`${
                items.some((item) => item.name === "ghost")
                  ? classes["icon-clicked"]
                  : classes["icon-ghost"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "dark")
                ? classes["icon-background-dark"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="dark"
            onClick={selectHandler}
          >
            <GiEvilEyes
              className={`${
                items.some((item) => item.name === "dark")
                  ? classes["icon-clicked"]
                  : classes["icon-dark"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "fairy")
                ? classes["icon-background-fairy"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="fairy"
            onClick={selectHandler}
          >
            <GiFairyWings
              className={`${
                items.some((item) => item.name === "fairy")
                  ? classes["icon-clicked"]
                  : classes["icon-fairy"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "normal")
                ? classes["icon-background-normal"]
                : classes["icon-background"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="normal"
            onClick={selectHandler}
          >
            <IoEllipseSharp
              className={`${
                items.some((item) => item.name === "normal")
                  ? classes["icon-clicked"]
                  : classes["icon-normal"]
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementList;
