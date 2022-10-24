import useFetch from "react-fetch-hook";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from "@mui/material";

const Home = () => {
    const { isLoading, data, error } = useFetch(
        "http://localhost:5001/gofish?apikey=abrradiology"
      );
  return (
    <>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {isLoading && <Typography>...Loading</Typography>}
            {error && <Typography>There is an Error</Typography>}
            <List>
            {data && data.map((gofish) => {
                return (
                    <> 
                        <ListItem key={gofish.id} disablePadding>
                            <ListItemText>
                                <Typography> <strong>{gofish.SpeciesName}</strong> | Calories: {gofish.Calories} | Fat Per Serving {gofish.FatTotal}</Typography>
                            </ListItemText>
                        </ListItem>  
                        <hr/>
                    </> 
                )
            })}  
            </List>
        </Box>
    </>
  )
}

export default Home;