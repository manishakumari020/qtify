import React from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card"
import { Box, CircularProgress } from "@mui/material";
//import Box from "@mui/material"


const Section = ({title, data, type}) => {
    const handleToggle = () => {
        console.log("change Text");
    }
    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText}onClick={handleToggle}>
                    Collapse
                </h4>
            </div>
            {
                data.length === 0 ? (
                    <Box sx={{display:"flex"}}>
                        <CircularProgress/>
                    </Box>
                ): <div className={styles.cardWrapper}>
                    <div className={styles.wrapper}>
                        {
                            data.map(dataItem => {
                                return(
                                    <Card data={dataItem} type="album"/>
                                )
                            })
                        }

                    </div>
                </div>
                
            }
            
        </div>
    )
}

export default Section;