import React from "react";
import { useState } from "react";

export default function FAQ(){
    const [openIndex, setOpenIndex] = useState(null)
    
    return (  
        <div className="space-y-4">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-xl font-semibold text-gray-900 mb-2">❓ Frequently Asked Questions</h1>
                <p className="text-sm text-gray-600">Tap any question to see the answer</p>
            </div>

            {/* FAQ Items */}
            {data.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    {/* Question Header */}
                    <button 
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-4 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                    >
                        <h3 className="font-medium text-gray-900 pr-4">{item.question}</h3>
                        <div className="flex-shrink-0">
                            {openIndex === index ? (
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            )}
                        </div>
                    </button>
                    
                    {/* Answer (Collapsible) */}
                    {openIndex === index && (
                        <div className="px-4 pb-4 border-t border-gray-100">
                            <p className="text-sm text-gray-700 leading-relaxed pt-3">{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
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
        question: "Can I bring a visitor?", 
        answer: "Yes. All visitors must be registered with the building before arrival. Please send reception the visitor's name and email address in advance. Visitors will check in with building reception before proceeding to the Amazon reception desk.", 
    }, 
    {
        question: "Is there agile seating?", 
        answer: "Yes. Agile workspaces are available on floors 5 and 6. Desks marked with an Agile Workspace label are available on a first-come, first-served basis unless otherwise reserved.", 
    },
    {
        question: "Are there any Slack channels?", 
        answer: "Chicago Social is a great channel for local events, office activities, and networking opportunities. ORD-Vultures is commonly used for leftover catering and food available in the office.", 
    }, 
    {
        question: "Is there IT Support onsite?",
        answer: "IT Support is available in the office by appointment. For urgent issues, you can contact IT through the online support chat."
    }
]