import { mean, median, mode, stdev } from 'stats-lite';
import Card from './card';
import { StateContext } from '../redux/contexts';
import { useContext } from 'react';

export default function Dashboard() {
  const state = useContext(StateContext);
  const { numbers, isFetching } = state;

  return <div className="grid">
    {isFetching ? <p>Loading...</p> :
      <>
        <Card title="Mean" value={mean(numbers)}></Card>
        <Card title="Median" value={median(numbers)}></Card>
        <Card title="StdDev" value={stdev(numbers)}></Card>
        <Card title="Mode" value={mode(numbers)}></Card>
      </>
    }

    <style jsx>{`
           .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
  
            max-width: 800px;
            margin-top: 3rem;
          }
      `}</style>
  </div>
};