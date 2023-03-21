import { Doughnut } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';

import CardContent from '@mui/material/CardContent';
ChartJS.register(ArcElement, Tooltip, Legend);

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export const data = {
  labels: [ ' Direct ',  'Social', 'Referral'],
  datasets: [
    {
      data: [55, 30, 15],
      backgroundColor: [
     
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth:1,
    },
  ],
};
export function DoughnutChart() {
  return (
    <Paper className="bar-chart" elevation={3}>
      <Card className="heading"elevation={3}>
        <h3 className="heading-1">Revenue Sources</h3>
      </Card>
      <CardContent style={{ width: 500, height: 300 }}>
        <Doughnut data={data} />
      </CardContent>
    </Paper>

  );
}
