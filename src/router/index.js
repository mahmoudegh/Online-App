import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/calendar",
    name: "Calendar",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Calendar.vue"),
  },
  {
    path: "/clients",
    name: "Clients",
    component: () => import("../views/Clients.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/contracts",
    name: "Contracts",
    component: () => import("../views/Contracts.vue"),
  },
  {
    path: "/file-manager",
    name: "FileManager",
    component: () => import("../views/FileManager.vue"),
  },
  {
    path: "/knowledgebase",
    name: "Knowledgebase",
    component: () => import("../views/Knowledgebase.vue"),
  },
  {
    path: "/leads",
    name: "Leads",
    component: () => import("../views/Leads.vue"),
  },
  {
    path: "/messages",
    name: "Messages",
    component: () => import("../views/Messages.vue"),
  },
  {
    path: "/deals",
    name: "Deals",
    component: () => import("../views/Deals.vue"),
  },
  {
    path: "/shipments",
    name: "Shipments",
    component: () => import("../views/Shipments.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: () => import("../views/Tasks.vue"),
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: () => import("../views/Tickets.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/Users.vue"),
  },
  {
    path: "/notes",
    name: "Notes",
    component: () => import("../views/Notes.vue"),
  },
  {
    path: "/subscriptions",
    name: "Subscriptions",
    component: () => import("../views/Subscriptions.vue"),
  },
  {
    path: "/reports",
    name: "Reports",
    component: () => import("../views/Reports.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/campaign",
    name: "Campaign",
    component: () => import("../views/Marketing/Campaign.vue"),
  },
  {
    path: "/media-templates",
    name: "MediaTemplates",
    component: () => import("../views/Marketing/MediaTemplates.vue"),
  },
  {
    path: "/media",
    name: "Media",
    component: () => import("../views/Marketing/Media.vue"),
  },
  {
    path: "/invoices",
    name: "Invoices",
    component: () => import("../views/Sales/Invoices.vue"),
  },
  {
    path: "/estimates",
    name: "Estimates",
    component: () => import("../views/Sales/Estimates.vue"),
  },
  {
    path: "/credit-notes",
    name: "CreditNotes",
    component: () => import("../views/Sales/CreditNotes.vue"),
  },
  {
    path: "/expenses",
    name: "Expenses",
    component: () => import("../views/Sales/Expenses.vue"),
  },
  {
    path: "/payments",
    name: "Payments",
    component: () => import("../views/Sales/Payments.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Sales/Products.vue"),
  },
  {
    path: "/tax-rates",
    name: "TaxRates",
    component: () => import("../views/Sales/TaxRates.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
