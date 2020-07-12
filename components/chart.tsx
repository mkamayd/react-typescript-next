import { StateContext } from '../redux/contexts';
import { useContext } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';


export default function Chart() {
    const state = useContext(StateContext);
    const { numbers } = state;
    const data = numbers.map((x, i) => ({ index: `Index ${i}`, value: x }));

    return <>
        {data.length? 
        <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
                top: 10, right: 30, left: 0, bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="index" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </LineChart>: <p>No data to show yet.</p>}
    </>
};