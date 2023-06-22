import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card"
import { Box, CircularProgress } from "@mui/material";
import Carousel from "../CarouselSection/Carousel";



const Section = ({title, data, type}) => {
    const [toggleCard, setToggleCard] = useState(false);
    const handleToggle = () => {
        setToggleCard(!toggleCard);
        console.log("change Text");
    }
    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText}onClick={handleToggle}>
                    {!toggleCard ? "Show All" : "Collapse All"}
                </h4>
            </div>
            {
                data.length === 0 ? (
                    <Box sx={{display:"flex"}}>
                        <CircularProgress/>
                    </Box>
                ): <div className={styles.cardWrapper}>
                    {toggleCard ? <div className={styles.wrapper}>
                        {
                            data.map(dataItem => {
                                return(
                                    <Card data={dataItem} type={type}/>
                                )
                            })
                        }

                    </div>:(<Carousel data={data} component={(data) =><Card 
                     data={data} type={type}/>}/>)}
                </div>
                
            }
            
        </div>
    )
}

export default Section;