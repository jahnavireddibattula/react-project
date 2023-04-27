import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";
// import Button from "@mui/material/Button";


export default function MaterialComponents(){
    function handleTextChange(e){
        alert(e.target.value);
    }
    return(
        <div className="container-fluid">
            <h2>Bootstrap Button</h2>
            <button className="btn btn-primary">Register</button>
            <h2>React MUI Button</h2>
            <TextField onChange={handleTextChange} label="your email" variant="standard"></TextField> 
            <br/> <br/> 
            <Button variant="contained" color="success">Register</Button>
                    
        </div>
    )
}