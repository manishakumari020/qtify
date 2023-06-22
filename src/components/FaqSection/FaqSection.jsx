import React, {useState, useEffect} from "react";
import { faqData, getId } from "../../Api/api";
import FaqAccordion from "../FaqAccordin/FaqAccordin";
import styles from "./FaqSection.module.css"



const FaqSection = () => {
    const [questionData, setQuestionData] = useState([]);

    useEffect(() => {
        const generateFaqData = async() => {
            try{
                const resData = await faqData();
                setQuestionData(resData.data);
            }
            catch(err){
                console.log(err);
            }
            
        }
        generateFaqData();
        
    }, []);

    return(
        <div className={styles.faq}>
            <h3 className={styles.faqHeading}>FAQs</h3>
            <div className={styles.faqDetails}>
                {questionData.map(item => {
                        const id = getId()
                        return <FaqAccordion key={id} data={item}/>
                })}
            </div>
        </div>
    )

}


export default FaqSection;