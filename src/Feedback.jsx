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
        <div className="space-y-6">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-xl font-semibold text-gray-900 mb-2">💬 Share Your Feedback</h1>
                <p className="text-sm text-gray-600">Drop in your suggestions about the guide. I appreciate your feedback!</p>
            </div>
            
            {/* Status message display */}
            {submitStatus && (
                <div className={`p-4 rounded-lg text-sm font-medium ${
                    submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                    {submitStatus.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email (Optional)
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                </div>

                {/* Location Field */}
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Location (Optional)
                    </label>
                    <input 
                        type="text" 
                        id="location" 
                        name="location" 
                        placeholder="e.g., Floor 2, Room 205"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                </div>

                {/* Category Field */}
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Category (Optional)
                    </label>
                    <select 
                        id="category" 
                        name="category"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                        <option value="">Select a category</option>
                        <option value="navigation">🗺️ Navigation</option>
                        <option value="facilities">🏢 Facilities</option>
                        <option value="accessibility">♿ Accessibility</option>
                        <option value="general">💬 General Feedback</option>
                        <option value="suggestion">💡 Suggestion</option>
                    </select>
                </div>

                {/* Rating Field */}
                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                        Rating (Optional)
                    </label>
                    <select 
                        id="rating" 
                        name="rating"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                        <option value="">Rate your experience</option>
                        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                        <option value="4">⭐⭐⭐⭐ Good</option>
                        <option value="3">⭐⭐⭐ Average</option>
                        <option value="2">⭐⭐ Poor</option>
                        <option value="1">⭐ Very Poor</option>
                    </select>
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Write your feedback, suggestions, or questions here..."
                        rows="4"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
                    />
                </div>
                
                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Submitting..." : "📤 Submit Feedback"}
                </button>
            </form>
        </div>
    );
}
