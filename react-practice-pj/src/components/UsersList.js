import React from "react";
import styles from "./UsersList.module.css";
import Card from "./Card";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((item) => (
          <li key={item.id}>
            {item.name} ({item.age}세)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
