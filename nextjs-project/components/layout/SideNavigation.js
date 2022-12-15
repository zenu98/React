import classes from "./SideNavigation.module.css";

const SideNavigation = () => {
  return (
    <div className={classes.box}>
      <nav>
        <ul>
          <li>가로정렬</li>
          <li>오름차순</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavigation;
