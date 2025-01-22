import { createRouter, defineRoute, param } from "type-route";

export const { RouteProvider, useRoute, routes } = createRouter({
  home: defineRoute("/"),
  about: defineRoute("/about"),
  contact: defineRoute("/contact"),
  project: defineRoute(
    {
      projectId: param.path.number,
    },
    (p) => `/project/${p.projectId}`
  ),
});
