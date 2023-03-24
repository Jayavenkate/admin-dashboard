import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
export function Earnings() {
  const data = [{
    "heading": "EARNINGS (MONTHLY)",
    "earnings": "$40,000"
},
  {
    "heading": "EARNINGS (ANNUAL)",
    "earnings": "$215,000"
  },
  {
    "heading": "TASKS",
    "earnings": "50%"
  },
  {
    "heading": "PENDING REQUESTS",
    "earnings": "18"
  }];
  return (
    <div className="data-earn">
      {data.map((data, index) => (<EarningsCard key={index} data={data} />))}
    </div>
  );
}
function EarningsCard({ data }) {

  return (
   
     
        <Paper  className="earnings" sx={{width:"250px"}}linear-illustration elevation={3}>
          <CardContent>
            <Typography sx={{ fontSize: 12 }} color="primary" gutterBottom>
              {data.heading}
             
            </Typography>
            <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
              {data.earnings}
            </Typography>
          </CardContent>
        </Paper>


     
   
  );
}
// export function Earnings() {
//   return(
//     <div>
// <EarningsCard title={"EARNINGS (ANNUAL)"} value={"$215,000"}/>
//     </div>
//   )
// }
// function EarningsCard({title,value}){
//   return(
//     <Card>
// <ShoppingCartOutlined title={title} value={value}/>
// <statistic />
//     </Card>
//   )
// }