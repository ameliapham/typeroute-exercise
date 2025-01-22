import { createRouter, defineRoute, param } from "type-route";

export const { RouteProvider, useRoute, routes } = createRouter({
  home: defineRoute(
    {
      count : param.query.optional.number.default(0)
    },
    () => "/"
  ),
  about: defineRoute("/about"),
  contact: defineRoute("/contact"),
  project: defineRoute(
    {
      projectId: param.path.number,
    },
    (p) => `/project/${p.projectId}`
  ),

});
