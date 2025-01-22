import { routes } from '../router';
import type { Route } from 'type-route';

type Props = {
  route: Route<typeof routes.home>;
}

export default function Home(props: Props) {
  const { route } = props

  return (
    <>
      <h1>Home Page</h1>
      <button
        onClick={() => {

          routes.home({
            count: route.params.count + 1
          }).replace();

        }}
      >
        Click me
      </button>
      <p> You have clicked {route.params.count} time</p>

      {(() => {
        if (route.params.count >= 5) {
          return <a {...routes.contact().link}> Contact me </a>
        }
      })()}

      {route.params.count >= 10 && <a {...routes.about().link}> About me </a>}

    </>
  )
}