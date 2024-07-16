import styles from './year.module.css';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '2020',
        Sites: 4000,
        amt: 2400,
    },
    {
        name: '2021',
        Sites: 3000,
        amt: 2210,
    },
    {
        name: '2022',
        Sites: 2000,
        amt: 2290,
    },
    {
        name: '2023',
        Sites: 2780,
        amt: 2000,
    },
    {
        name: '2024',
        Sites: 1890,
        amt: 2181,
    },
];

const Yearly = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Yearly Recap</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip cursor={{ fill: 'transparent' }} />
                    <Legend />

                    <Bar dataKey="Sites" stackId="a" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Yearly;
