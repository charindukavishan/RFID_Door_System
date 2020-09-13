/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import SessionCreate from "views/examples/SessionCreate.js";
import GroupCreate from "views/examples/GroupCreate.js";
import Login from "views/examples/Login.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/create-group",
    name: "Create Group",
    icon: "ni ni-single-02 text-warning",
    component: GroupCreate,
    layout: "/admin"
  },
  {
    path: "/create-session",
    name: "Create Session",
    icon: "ni ni-calendar-grid-58 text-success",
    component: SessionCreate,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },

];
export default routes;
