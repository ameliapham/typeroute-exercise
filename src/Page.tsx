import { lazy, Suspense } from "react";
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));
import { useRoute } from "./router";

export function Page() {
    const route = useRoute();

    /*
    if (route.name === "home") {
        return <Home />;
    } else if (route.name === "about") {
        return <About />;
    } else if (route.name === "project") {
        return <Project />;
    } else if (route.name === "contact") {
        return <Contact />;
    } else if (route.name === false) {
        return <h1>Page Not Found</h1>;
    }
    */

    return (
        <Suspense fallback={<h1>Loading page...</h1>}>
            {(() => {
                switch (route.name) {
                    case "home": return <Home />;
                    case "about": return <About />;
                    case "project": return <Project />;
                    case "contact": return <Contact />;
                    case false: return <h1>Not found</h1>
                }
            })()}
        </Suspense>
    );

    /*
    return (
        <Suspense>
            {route.name === "home" && <Home />}
            {route.name === "about" && <About />}
            {route.name === "project" && <Project />}
            {route.name === "contact" && <Contact />}
            {route.name === false && "Not Found"}
        </Suspense>
    );
    */
}