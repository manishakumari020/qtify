import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./FaqAccordin.module.css"

const FaqAccordion = ({data}) => {

    return (
        <div className={styles.accordion}>
          <Accordion style={{ border: "1px solid #FFFFFF", borderRadius: "10px" }}>
            <AccordionSummary
              style={{
                background: "#121212",
                borderRadius: "10px",
                width: "1020px",
                height: "60px",
              }}
              expandIcon=
              {
              <ExpandMoreIcon 
              style={{ color: "#34C94B", 
              width: "45px", height: "30px", 
              scale: "2" }}
              />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                 style={{ fontSize: "20px", color: "#FFFFFF" }}>
                  {data.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{
                border: "1px solid #FFFFFF",
                background: "#FFFFFF",
                borderRadius: "0px 0px 10px 10px",
                width: "1020px",
                height: "60px",
                overflow: "scroll",
              }}
            >
              <Typography style={{ fontSize: "22px", color: "#121212" }}>
                {data.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      );

}


export default FaqAccordion;