import { Card } from "@mui/material";
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
export function ColorBar() {
  return (
    <div>
      <Colors 
      title={"Primary"} 
      value={"#4e73df"} 
     
      />
      <Colors title={"Success"} color="error" value={"#1cc88a"}/>
      <Colors title={"Info"} value={"#36b9cc"}/>
      <Colors title={"Warning"} value={"#f6c23e"}/>
      <Colors title={"Danger"} value={"#e74a3b"}/>
      <Colors title={"Secondary"} value={"#858796"}/>
      <Colors title={"Light"} value={"#f8f9fc"}/>
      <Colors title={"Dark"} value={"#5a5c69"}/>
  
   </div>
  );
}
function Colors({title,value,color,style}) {
 return (
    <div>
      <Paper className="color-con" sx={{"paddingLeft":"20px" ,"paddingTop":"3px"}}elevation={3}>
        <h3>{title} </h3>
        {color}
        <p6>{value}</p6>
{color}
      
      </Paper>

     
    </div>
  );
}


