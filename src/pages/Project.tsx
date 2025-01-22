
import type { Route } from "type-route";
import { routes } from "../router";

type Props = {
    route: Route<typeof routes.project>;
}

export default function Project(props: Props) {

    const { route } = props;
    
    return (
        <div>
            <h1>Project Page</h1>
            {(() => {
                switch (route.params.projectId) {
                    case 1: return <Project1 />;
                    case 2: return <Project2 />;
                    case 3: return <Project3 />;
                    default: return <h1>Project Not Found</h1>;
                }
            })()}
        </div>
    )
    
}

function Project1() {
    return <h1>Project1 Page</h1>
}

function Project2() {
    return <h1>Project2 Page</h1>
}

function Project3() {
    return <h1>Project3 Page</h1>
}