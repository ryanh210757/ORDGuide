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
        answer: "ORD10 and ORD11 are connected office spaces within the same building. ORD10 consists of the 14th floor, while ORD11 occupies floors 5, 6, 7, 8, and 14", 
    }, 
    {
        question: "What floors does Amazon occupy?", 
        answer: "ORD11 has floors 5, 6, 7, 8, and 14. ORD10 has floor 14", 
    }, 
    {
        question: "Are there any food options in the building?", 
        answer: "Rustle & Roux is located on the 2nd floor near the ORD10 side of the building and offers breakfast and lunch options. Sopraffina is located in the building lobby", 
    }, 
    {
        question: "What are the building and reception hours?", 
        answer: "Reception is open Monday through Friday from 8:00 AM to 5:00 PM. The building remains accessible 24/7 for authorized badge holders, and security is onsite at all times.", 
    }, 
    {
        question: "Do you validate parking?", 
        answer: "Parking validation is available for external guests visiting the office. Unfortunately, we are unable to provide parking validation for Amazon employees.", 
    }, 
    {
        question: "Can I bring a vistor?", 
        answer: "Yes. All visitors must be registered with the building before arrival. Please send reception the visitor's name and email address in advance. Visitors will check in with building reception before proceeding to the Amazon reception desk.", 
    }, 
    {
        question: "Is there an agile seating?", 
        answer: "Yes. Agile workspaces are available on floors 5 and 6. Desks marked with an Agile Workspace label are available on a first-come, first-served basis unless otherwise reserved.", 
    },
    {
        question: "Are there any Slack channels?", 
        answer: "Chicago Social is a great channel for local events, office activities, and networking opportunities. ORD-Vultures is commonly used for leftover catering and food available in the office.", 
    }, 
    {
        question: "Is there IT Support onsite",
        answer: "IT Support is avaialbe in the office by appointment. For urgent issues, you can contact IT through the online support chat."
    }

]