import { routes } from "./router";

export function Navigation() {
  return (
    <nav>
      <a {...routes.home().link}>Home</a> {" "}
      <a {...routes.userList().link}>User List</a> {" "}
      <a {...routes.userList({ page: 2 }).link}>User List Page 2</a> {" "}
      <a {...routes.user({ userId: "abc" }).link}>User "abc"</a> {" "}
    </nav>
  );
}
