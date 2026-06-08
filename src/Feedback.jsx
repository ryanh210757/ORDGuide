import React from "react";



export default function Feedback(){
    return (
        <>
            <h1 className="test">Drop in your suggestions about my guide. I appreaicte your feedback.</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(e.target.alias.value)
                console.log(e.target.message.value)
            }}>
                <label htmlFor="alias" />
                <input type="text" id="alias" name="alias" placeholder="Enter your alias."/>
                <input className="feedback" type="textarea" id="message" name="message" placeholder="Write Message (Required)" />
                <input type="submit" />
                 
            </form>
        </>
    )
}