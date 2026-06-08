import React from "react";
import { useState } from "react";

export default function FAQ(){
    const [openIndex, setOpenIndex] = useState()
    

    return (  
        <>
            {data.map((item, index) => (
                <div>
                    <h3>{item.question}</h3>
                    <button onClick={() => setOpenIndex(index)}>Three lines</button>
                    {openIndex === index ? <p>{item.answer}</p> : null}
                    
                </div>
            ))}
        </>
    )

}

const data = [
    {
        question: "What is the difference between ORD10 and ORD11?", 
        answer: "ORD10 is the Monroe Side. ORD10 only has one floor, ORD11 has 5, 6, 7, 8 and 14", 
    }, 
    {
        question: "What floors are Amazon's?", 
        answer: "We have floors 5, 6, 7, 8 and 14.", 
    }, 
    {
        question: "Are there any food options?", 
        answer: "There is a cafe on the 2nd floor, Rustle & Roux. There is also Sopprafina", 
    }, 
    {
        question: "Why is my badge not working?", 
        answer: "If you haven't been in the office for a while, it mightve went to an inactive status called Use/Lose. The cutoff time is 4 weeks. ", 
    }, 
    {
        question: "How long is the office open?", 
        answer: "Reception is avaiable from 8:00am - 5:00pm. The building is open 24/7 with security presence.", 
    }, 
    {
        question: "Do you validate parking?", 
        answer: "We do not validate parking for Amazon employees. We are only able to provide validation for external guests.", 
    }, 
    {
        question: "Can I bring a vistor?", 
        answer: "Yes! All visitors must be registered with the building. You can send us an email in advanced. They'll check in with the building and with us.", 
    }, 
    {
        question: "Is there an agile seating?", 
        answer: "We have agile desks on Floors 5 and 6. If you see a desk with an agile label on it, feel free to use it for the day.", 
    },
    {
        question: "Are there any Slack channels?", 
        answer: "Chicago Social and ORD-Vultures are pretty popluar to keep up with events in the city and leftover food.", 
    }

]