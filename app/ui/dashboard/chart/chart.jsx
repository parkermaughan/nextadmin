'use client';
import styles from './chart.module.css';

import Monthly from './month/month';
import Weekly from './week/week';
import Yearly from './year/year';

const Chart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.week}>
                <Weekly />
            </div>
            <div className={styles.month}>
                <Monthly />
            </div>
            <div className={styles.year}>
                <Yearly />
            </div>
        </div>
    );
};
export default Chart;
