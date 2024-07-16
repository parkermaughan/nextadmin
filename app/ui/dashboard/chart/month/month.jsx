import styles from './month.module.css';

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
        name: 'January',
        Sites: 4000,
        amt: 2400,
    },
    {
        name: 'February',
        Sites: 3000,
        amt: 2210,
    },
    {
        name: 'March',
        Sites: 2000,
        amt: 2290,
    },
    {
        name: 'April',
        Sites: 2780,
        amt: 2000,
    },
    {
        name: 'May',
        Sites: 1890,
        amt: 2181,
    },
    {
        name: 'June',
        Sites: 2390,
        amt: 2500,
    },
    {
        name: 'July',
        Sites: 3490,
        amt: 2100,
    },

    {
        name: 'August',
        Sites: 2390,
        amt: 2500,
    },
    {
        name: 'September',
        Sites: 3490,
        amt: 2100,
    },

    {
        name: 'October',
        Sites: 2390,
        amt: 2500,
    },
    {
        name: 'November',
        Sites: 3490,
        amt: 2100,
    },

    {
        name: 'December',
        Sites: 3490,
        amt: 2100,
    },
];

const Monthly = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Monthley Recap</h2>
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

export default Monthly;
