import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useFetch from "react-fetch-hook";
import DOMPurify from 'dompurify';

const Region = () => {
    const { isLoading, data, error } = useFetch(
        "http://localhost:5001/gofish?apikey=abrradiology"
      );      
    console.log(data, "Region");

  return (
     <>
     {isLoading && <Typography>...Loading</Typography>}
     {error && <Typography>There is an Error</Typography>}
     {data && data.map((region) => {
      return(
      <Accordion key={region.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{region.NOAAFisheriesRegion}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
           <strong>{region.SpeciesName}</strong> 
          </Typography>
        <img 
            style={{"maxWidth": 500}} 
            src={region.SpeciesIllustrationPhoto.src} 
            alt={region.SpeciesIllustrationPhoto.alt} />  
          <Typography>
           Calories: {region.Calories} / FatTotal: {region.FatTotal} 
          </Typography>
          <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(region.Biology)}}></div> 
        </AccordionDetails>
      </Accordion>
      )
     })}   
    </>
  )
}

export default Region