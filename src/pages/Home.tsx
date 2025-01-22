import { useState, useEffect } from 'react';
import { routes } from '../router';
import type { Route } from 'type-route';

type Props = {
  route: Route<typeof routes.home>;
}

export default function Home(props: Props) {
  const { route } = props
  const [count, setCount] = useState(route.params.count ?? 0);
  useEffect(() => {
    routes.home({count}).replace()
  },[count])

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => setCount(count + 1)}> Click me </button>
      <p> You have clicked {count} time</p>
    </>
  )
}