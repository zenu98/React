import classes from "./MainNavigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>앨범</div>
      <nav>
        <ul>
          <li>
            <Link href="/">목록</Link>
          </li>
          <li>
            <Link href="/new-album">추가</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
