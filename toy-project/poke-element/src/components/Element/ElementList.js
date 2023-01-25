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
import { MdCatchingPokemon } from "react-icons/md";

const ElementList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.element.items);
  const [toggle, setToggle] = useState(false);
  const clickhandler = () => {
    setToggle((prev) => !prev);
  };

  const selectHandler = (e) => {
    console.log(items[0].name);
    const name = e.target.id;
    console.log(elementSlice);
    dispatch(
      elementActions.select({
        name,
      })
    );
  };

  return (
    <div className={classes.wrapper}>
      <button>제출</button>
      <div className={classes["menu-btn"]} onClick={clickhandler}>
        <div className={classes.btn}>
          <MdCatchingPokemon />
        </div>
      </div>

      <div className={classes["icons-wrapper"]}>
        <div className={classes.icons}>
          <div
            className={`${
              items.some((item) => item.name === "fire")
                ? classes["icon-background"]
                : classes["icon-background-fire"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="fire"
            onClick={selectHandler}
          >
            <GoFlame
              className={`${
                items.some((item) => item.name === "fire")
                  ? classes["icon-fire"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "water")
                ? classes["icon-background"]
                : classes["icon-background-water"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="water"
            onClick={selectHandler}
          >
            <IoWater
              className={`${
                items.some((item) => item.name === "water")
                  ? classes["icon-water"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "electric")
                ? classes["icon-background"]
                : classes["icon-background-electric"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="electric"
            onClick={selectHandler}
          >
            <AiFillThunderbolt
              className={`${
                items.some((item) => item.name === "electric")
                  ? classes["icon-electric"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "ice")
                ? classes["icon-background"]
                : classes["icon-background-ice"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="ice"
            onClick={selectHandler}
          >
            <GiFrozenOrb
              className={`${
                items.some((item) => item.name === "ice")
                  ? classes["icon-ice"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "grass")
                ? classes["icon-background"]
                : classes["icon-background-grass"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="grass"
            onClick={selectHandler}
          >
            <GiHighGrass
              className={`${
                items.some((item) => item.name === "grass")
                  ? classes["icon-grass"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "fighting")
                ? classes["icon-background"]
                : classes["icon-background-fighting"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="fighting"
            onClick={selectHandler}
          >
            <FaFistRaised
              className={`${
                items.some((item) => item.name === "fighting")
                  ? classes["icon-fighting"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "poison")
                ? classes["icon-background"]
                : classes["icon-background-poison"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="poison"
            onClick={selectHandler}
          >
            <GiPoisonBottle
              className={`${
                items.some((item) => item.name === "poison")
                  ? classes["icon-poison"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>

          <div
            className={`${
              items.some((item) => item.name === "ground")
                ? classes["icon-background"]
                : classes["icon-background-ground"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="ground"
            onClick={selectHandler}
          >
            <GiEarthSpit
              className={`${
                items.some((item) => item.name === "ground")
                  ? classes["icon-ground"]
                  : classes["ground-icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "flying")
                ? classes["icon-background"]
                : classes["icon-background-flying"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="flying"
            onClick={selectHandler}
          >
            <GiLibertyWing
              className={`${
                items.some((item) => item.name === "flying")
                  ? classes["icon-flying"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "rock")
                ? classes["icon-background"]
                : classes["icon-background-rock"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="rock"
            onClick={selectHandler}
          >
            <GiStoneBlock
              className={`${
                items.some((item) => item.name === "rock")
                  ? classes["icon-rock"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "dragon")
                ? classes["icon-background"]
                : classes["icon-background-dragon"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="dragon"
            onClick={selectHandler}
          >
            <FaDragon
              className={`${
                items.some((item) => item.name === "dragon")
                  ? classes["icon-dragon"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "bug")
                ? classes["icon-background"]
                : classes["icon-background-bug"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="bug"
            onClick={selectHandler}
          >
            <FaBug
              className={`${
                items.some((item) => item.name === "bug")
                  ? classes["icon-bug"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "psychic")
                ? classes["icon-background"]
                : classes["icon-background-psychic"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="psychic"
            onClick={selectHandler}
          >
            <FaBullseye
              className={`${
                items.some((item) => item.name === "psychic")
                  ? classes["icon-psychic"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "steel")
                ? classes["icon-background"]
                : classes["icon-background-steel"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="steel"
            onClick={selectHandler}
          >
            <FaUikit
              className={`${
                items.some((item) => item.name === "steel")
                  ? classes["icon-steel"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>

          <div
            className={`${
              items.some((item) => item.name === "ghost")
                ? classes["icon-background"]
                : classes["icon-background-ghost"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="ghost"
            onClick={selectHandler}
          >
            <FaGhost
              className={`${
                items.some((item) => item.name === "ghost")
                  ? classes["icon-ghost"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "dark")
                ? classes["icon-background"]
                : classes["icon-background-dark"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="dark"
            onClick={selectHandler}
          >
            <GiEvilEyes
              className={`${
                items.some((item) => item.name === "dark")
                  ? classes["icon-dark"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "fairy")
                ? classes["icon-background"]
                : classes["icon-background-fairy"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="fairy"
            onClick={selectHandler}
          >
            <GiFairyWings
              className={`${
                items.some((item) => item.name === "fairy")
                  ? classes["icon-fairy"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
          <div
            className={`${
              items.some((item) => item.name === "normal")
                ? classes["icon-background"]
                : classes["icon-background-normal"]
            } ${classes.icon} ${toggle === true && classes.show}`}
            id="normal"
            onClick={selectHandler}
          >
            <IoEllipseSharp
              className={`${
                items.some((item) => item.name === "normal")
                  ? classes["icon-normal"]
                  : classes["icon-clicked"]
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementList;
