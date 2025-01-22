import { useRoute, routes } from "./router";
import type { Route } from "type-route";

export function Page() {
  const route = useRoute();

  return (
    <>
      {route.name === "home" && <HomePage />}
      {route.name === "userList" && <UserListPage route={route} />}
      {route.name === "user" && <UserPage route={route} />}
      {route.name === false && "Not Found"}
    </>
  );
}

function HomePage() {
  return <div>Home Page</div>;
}

function UserListPage({ route }: { route: Route<typeof routes.userList> }) {
  return <div>UserList Page: {route.params.page}</div>;
}

function UserPage({ route }: { route: Route<typeof routes.user> }) {
  return <div>User: {route.params.userId}</div>;
}
