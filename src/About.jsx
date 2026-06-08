import React from "react";
import arcade from "./assets/arcade.jpg"
import slalom from "./assets/slalom.jpg"
import atrium from "./assets/atrium.jpg"

export default function About(){
    return (
        <>
           
         
            <h1>Common Areas</h1>
            <h1>Mini Arcade Room</h1>
            <h4>Location: ORD10 near reception</h4>
            <p>A room with machines including Mortal Kombat, Galacta, and a ping pong table if you're feeling like Marty Supreme.</p>
            <img src={arcade} />


            <h1>Slalom Lab</h1>
            <p>This serves as a self guide lab with multiple demonstrations for different industries.
                There are three labs total, along with a Alexa and Bedrock demo to show off generative AI.
            </p>
            <h4>Location: ORD10 near reception</h4>
            <img src={slalom} />

            <h1>Atrium</h1>
            <p>A great spot to have lunch, there are booths, tables and other seats to sit and relax. There are
                often pop ups here so be on the look out!
            </p>
            <h4>Location: 6th floor</h4>
            <img src={atrium}/>

            <h1>The Franklin </h1>
            <p>The builidng iteself often has pop ups like free ice cream, hot chocalte, and other events.
                Download the ZO app to always be aware.
            </p>
            

        </>
        
    )
}