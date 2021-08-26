/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Challenges from "views/Challenges.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import WeighIn from "views/WeighIn.js";
import ChatBox from "views/Chat.js";
import AboutUs from "views/About.js";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/about",
    name: "About Us",
    icon: "nc-icon nc-tap-01",
    component: AboutUs,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-satisfied",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/challenges",
    name: "Challenge List",
    icon: "nc-icon nc-notes",
    component: Challenges,
    layout: "/admin",
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  {
    path: "/weighin",
    name: "Weigh In",
    icon: "nc-icon nc-tablet-2",
    component: WeighIn,
    layout: "/admin",
  },
  {
    path: "/community-chat",
    name: "Community Chat",
    icon: "nc-icon nc-chat-round",
    component: ChatBox,
    layout: "/admin",
  },
];

export default dashboardRoutes;
