import React, { useState } from "react";
import classes from "./Example.module.css";
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

const Example = (props) => {
  const [toggle, setToggle] = useState(false);
  const clickhandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes["menu-btn"]} onClick={clickhandler}>
        <div className={classes.btn}>
          <MdCatchingPokemon />
        </div>
      </div>

      <div className={classes["icons-wrapper"]}>
        <div className={classes.icons}>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <GoFlame className={classes["icon-fire"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <IoWater className={classes["icon-water"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <AiFillThunderbolt className={classes["icon-electric"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <GiFrozenOrb className={classes["icon-ice"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <GiHighGrass className={classes["icon-grass"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <FaFistRaised className={classes["icon-fighting"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <GiPoisonBottle className={classes["icon-poison"]} />
          </div>

          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <GiEarthSpit className={classes["icon-ground"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <GiLibertyWing className={classes["icon-flying"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <GiStoneBlock className={classes["icon-rock"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <FaDragon className={classes["icon-dragon"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <FaBug className={classes["icon-bug"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <FaBullseye className={classes["icon-psychic"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <FaUikit className={classes["icon-steel"]} />
          </div>

          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <FaGhost className={classes["icon-ghost"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <GiEvilEyes className={classes["icon-dark"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <GiFairyWings className={classes["icon-fairy"]} />
          </div>
          <div className={`${classes.icon} ${toggle === true && classes.show}`}>
            <IoEllipseSharp className={classes["icon-normal"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
