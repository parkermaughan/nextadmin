import styles from './week.module.css';

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
        name: 'Sunday',
        Sites: 4000,
        amt: 2400,
    },
    {
        name: 'Monday',
        Sites: 3000,
        amt: 2210,
    },
    {
        name: 'Tuesday',
        Sites: 2000,
        amt: 2290,
    },
    {
        name: 'Wednesday',
        Sites: 2780,
        amt: 2000,
    },
    {
        name: 'Thursday',
        Sites: 1890,
        amt: 2181,
    },
    {
        name: 'Friday',
        Sites: 2390,
        amt: 2500,
    },
    {
        name: 'Saturday',
        Sites: 3490,
        amt: 2100,
    },

    
];

const Weekly = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Weekly Recap</h2>
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
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{fill: 'transparent'}} />
          <Legend />

          <Bar dataKey="Sites" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Weekly;
