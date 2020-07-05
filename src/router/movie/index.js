export default {
  path: "/movie",
  component: () => import("@/views/movie"),
  name: "movie",
  meta: {
    tabBarFlag: true,
  },
  children: [
    {
      path: "popularHotels",
      name: "popularHotels",
      component: () => import("@/components/popularHotels"),
      meta: {
        tabBarFlag: true,
      }
    },
    {
      path: "groupTour",
      name: "groupTour",
      component: () => import("@/components/groupTour"),
      meta: {
        tabBarFlag: true,
      }
    },
    {
      path: "/movie",
      redirect: "popularHotels",
    },
  ],
};
