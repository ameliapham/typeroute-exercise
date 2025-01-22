import { routes } from "./router";

export function Navigation() {
    return (
        <nav>
            <a {...routes.home().link}>Home</a> {" "}
            <a {...routes.about().link}>About</a> {" "}
            <a {...routes.project({projectId: 1}).link}>Project 1</a> {" "}
            <a {...routes.project({projectId: 2}).link}>Project 2</a> {" "}
            <a {...routes.project({projectId: 3}).link}>Project 3</a> {" "}
            <a {...routes.contact().link}>Contact</a>
        </nav>
    );
}
