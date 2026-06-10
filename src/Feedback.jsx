// Feedback.jsx
import React, { useState } from "react";
import { generateClient } from 'aws-amplify/data';

const client = generateClient();

export default function Feedback() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Get form values - matching your schema fields
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const location = e.target.location.value;
        const category = e.target.category.value;
        const rating = e.target.rating.value;

        // Validate required fields (name and message are required in your schema)
        if (!name.trim() || !message.trim()) {
            setSubmitStatus({ 
                type: 'error', 
                message: 'Name and message are required' 
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // Create feedback record matching your exact schema
            const feedbackData = {
                name: name.trim(),
                message: message.trim(),
                email: email.trim() || null,
                location: location.trim() || null,
                category: category || null,
                rating: rating ? parseInt(rating) : null
            };

            // Save to DynamoDB via Amplify GraphQL
            const result = await client.models.Feedback.create(feedbackData);
            
            console.log('Feedback saved successfully:', result);
            setSubmitStatus({ 
                type: 'success', 
                message: 'Thank you for your feedback! It has been saved successfully.' 
            });
            
            // Clear the form
            e.target.reset();

        } catch (error) {
            console.error('Error saving feedback:', error);
            setSubmitStatus({ 
                type: 'error', 
                message: 'Failed to save feedback. Please try again.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h1 className="test">Drop in your suggestions about my guide. I appreciate your feedback.</h1>
            
            {/* Status message display */}
            {submitStatus && (
                <div className={`status-message ${submitStatus.type}`}>
                    {submitStatus.message}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name (Required):</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email (Optional):</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location (Optional):</label>
                    <input 
                        type="text" 
                        id="location" 
                        name="location" 
                        placeholder="e.g., Floor 2, Room 205"
                        disabled={isSubmitting}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category (Optional):</label>
                    <select 
                        id="category" 
                        name="category"
                        disabled={isSubmitting}
                    >
                        <option value="">Select a category</option>
                        <option value="navigation">Navigation</option>
                        <option value="facilities">Facilities</option>
                        <option value="accessibility">Accessibility</option>
                        <option value="general">General Feedback</option>
                        <option value="suggestion">Suggestion</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="rating">Rating (Optional):</label>
                    <select 
                        id="rating" 
                        name="rating"
                        disabled={isSubmitting}
                    >
                        <option value="">Rate your experience</option>
                        <option value="5">5 - Excellent</option>
                        <option value="4">4 - Good</option>
                        <option value="3">3 - Average</option>
                        <option value="2">2 - Poor</option>
                        <option value="1">1 - Very Poor</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message (Required):</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Write your feedback, suggestions, or questions here..."
                        rows="4"
                        required
                        disabled={isSubmitting}
                    />
                </div>
                
                <input 
                    type="submit" 
                    value={isSubmitting ? "Submitting..." : "Submit Feedback"}
                    disabled={isSubmitting}
                />
            </form>
        </>
    );
}
