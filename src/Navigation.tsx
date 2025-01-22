import { routes } from "./router";

export function Navigation() {
    return (
        <nav>
            <a {...routes.home().link}>Home</a> {" "}
            <a {...routes.about().link}>About</a> {" "}
            <a {...routes.project().link}>Project</a> {" "}
            <a {...routes.contact().link}>Contact</a>
        </nav>
    );
}
