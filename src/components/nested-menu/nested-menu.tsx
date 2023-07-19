import { useEffect } from "react";
import styles from "./nested-menu.module.css";

interface MenuItem {
  id: string;
  name: string;
  path?: string;
  subpages?: MenuItem[];
}

export interface Props {
  /**
   * The menu should be a list of object and might content subpages
   */
  menu: MenuItem[];
}

const defaultMenu: MenuItem[] = [
  {
    id: "1",
    name: "Dashboard",
    subpages: [
      {
        id: "dashboard",
        name: "Dashboard",
        path: "/",
      },
      {
        id: "product-list",
        name: "Product List",
        path: "/products",
      },
    ],
  },
];

/**
 * The nested menu UI component that accepts menu list and renders infinite nested menu using recursion.
 */
export const NestedMenu = ({ menu = defaultMenu }: Props) => {
  useEffect(() => {
    console.log("masuk sini x?", menu);
  }, []);

  return <div className={styles.root}>NestedMenu</div>;
};
