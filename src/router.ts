import { createRouter, defineRoute} from "type-route";

export const { RouteProvider, useRoute, routes } = createRouter({
  home: defineRoute("/"),
  about: defineRoute("/about"),
  project: defineRoute("/project"),
  contact: defineRoute("/contact"),
});
