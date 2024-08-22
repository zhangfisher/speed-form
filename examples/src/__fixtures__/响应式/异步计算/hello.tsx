import { useFixtureInput } from 'react-cosmos/client';
 
export default () => {
  const [count, setCount] = useFixtureInput('count', 0);
  return <h1>Hello World!:{count}</h1>
}

