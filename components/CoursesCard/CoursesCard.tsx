import React from "react";
import Link from "next/link";
import { MenuItem } from "../../interfaces/menu.interface";
import styles from "./CoursesCard.module.css";

const CoursesCard = ({ category }: { category: MenuItem }): JSX.Element => {
  return (
    <li className={styles.category}>
      <h2 className={styles.title}>{category._id.secondCategory}</h2>
      <ul className={styles.categories}>
        {category.pages.slice(0, 6).map((i) => (
          <li key={i._id}>
            <Link href={"courses/" + i.alias} className={styles.item}>
              {i.category}
            </Link>
          </li>
        ))}
        {category.pages.length > 6 && <li className={styles.dots}>...</li>}
      </ul>
    </li>
  );
};

export default CoursesCard;