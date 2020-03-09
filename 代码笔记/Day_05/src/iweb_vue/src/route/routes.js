// 当前文件是  routes.js
import Home from "../pages/Home"
import Teacher from "../pages/Teacher"
import Address from "../pages/Address"

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/address",
    name: "address",
    component: Address
  },
  {
    path: "/teacher",
    name: "teacher",
    component: Teacher
  }
];