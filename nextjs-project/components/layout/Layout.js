import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import SideNavigation from "./SideNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <SideNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
