import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { BsDatabase } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsDatabaseAdd } from "react-icons/bs";

const menu = [
  {
    name: "Home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <CgProfile />,
  },
  {
    name: "Add a new Product",
    path: "/add-product",
    icon: <BsDatabaseAdd />,
  },
  {
    name: "Get all Products",
    path: "/products",
    icon: <BsDatabase />,
  },
  {
    name: "Add a new Customer",
    path: "/add-customer",
    icon: <AiOutlineUserAdd />,
  },
  {
    name: "History",
    path: "/history",
    icon: <AiOutlineHistory />,
  },
];

export default menu;
