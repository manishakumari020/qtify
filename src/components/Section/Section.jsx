import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { Box, CircularProgress } from "@mui/material";
import Carousel from "../CarouselSection/Carousel";
import FilterTabs from "../FilterTabs/FiterTabs";



const Section = ({title, data, type, filteredData = null}) => {
    const [toggleCard, setToggleCard] = useState(false);
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

    const handleToggle = () => {
        setToggleCard(!toggleCard);
        console.log("change Text");
    }

    const filteredSongData = (key) => {
        if(value === 1){
            const result = data.filter((ele) => ele.genre.key === "rock")
            filteredData(result);  
        }
        else if(value === 2){
            const result = data.filter((ele) => ele.genre.key === "pop")
            filteredData(result);  
        }
        
        
    }
    
      useEffect(() => {
        // if(value === 1){
        //    filteredSongData("rock")
        // }
        // else if(value === 2){
        //     filteredSongData("jazz");
        // }
        filteredSongData()
      })
        
    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!toggleCard ? "Show All" : "Collapse All"}
                </h4>
            </div>
            {type === "song" ? <FilterTabs value={value} handleChange={handleChange}/>:null}
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