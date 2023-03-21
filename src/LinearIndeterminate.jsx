import Card from '@mui/material/Card';
import LinearProgress from '@mui/material/LinearProgress';
import CardContent from '@mui/material/CardContent';

import { ReplayCircleFilled } from "@mui/icons-material";

export function LinearIndeterminate() {
  return (

    <Card className="progress-bar">
      <Card className='heading'>
        <h3 className='heading-1'>Projects</h3>
      </Card>
    <CardContent>
      <h4>Server Migration</h4>
      <LinearProgress color="error" sx={{ 'height': '20px', 'borderRadius': 15 }} variant="determinate" value={20} />

      <h4>Sales Tracking</h4>
      <LinearProgress color="warning" sx={{ 'height': '20px', 'borderRadius': 15 }} variant="determinate" value={40} />

      <h4>Customer Database</h4>
      <LinearProgress color="primary" sx={{ 'height': '20px', 'borderRadius': 15 }} variant="determinate" value={60} />

      <h4>Payout Details</h4>
      <LinearProgress color="secondary" sx={{ 'height': '20px', 'borderRadius': 15 }} variant="determinate" value={80} />

      <h4> Account Setup</h4>
      <LinearProgress color="success" sx={{ 'height': '20px', 'borderRadius': 15 }} variant="determinate" value={100} />
      </CardContent>

    </Card>
  );
}
