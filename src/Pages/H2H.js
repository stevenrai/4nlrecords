import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Header from '../Assets/Header.js';


export default function H2H() {
  return (
    <div>
    <Header label="Head to Head" />
    <div className="desktop-padding">

    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Coming' },
            { id: 1, value: 15, label: 'Soonish' },
            { id: 2, value: 20, label: 'Go Away' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
     </div>
     </div>

  );
}