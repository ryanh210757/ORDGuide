import React from "react";
import arcade from "./assets/arcade.jpg"
import slalom from "./assets/slalom.jpg"
import atrium from "./assets/atrium.jpg"

export default function About(){
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-xl font-bold text-gray-900 mb-2">🏢 Common Areas</h1>
                <p className="text-sm text-gray-600">Explore the spaces available in ORD10/11</p>
            </div>
         
            {/* Mini Arcade Room */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img src={arcade} className="w-full h-48 object-cover" alt="Mini Arcade Room" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-1">🎮 Mini Arcade Room</h2>
                    <h4 className="text-sm font-medium text-blue-600 mb-3">📍 ORD10 near reception</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        A room with machines including Mortal Kombat, Galacta, and a ping pong table if you're feeling like Marty Supreme.
                    </p>
                </div>
            </div>

            {/* Slalom Lab */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img src={slalom} className="w-full h-48 object-cover" alt="Slalom Lab" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-1">🔬 Slalom Lab</h2>
                    <h4 className="text-sm font-medium text-blue-600 mb-3">📍 ORD10 near reception</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        This serves as a self guide lab with multiple demonstrations for different industries.
                        There are three labs total, along with a Alexa and Bedrock demo to show off generative AI.
                    </p>
                </div>
            </div>

            {/* Atrium */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img src={atrium} className="w-full h-48 object-cover" alt="Atrium" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-1">🌿 Atrium</h2>
                    <h4 className="text-sm font-medium text-blue-600 mb-3">📍 6th floor</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        A great spot to have lunch, there are booths, tables and other seats to sit and relax. There are
                        often pop ups here so be on the look out!
                    </p>
                </div>
            </div>

            {/* The Franklin */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200 p-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">🏛️ The Franklin</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                    The building itself often has pop ups like free ice cream, hot chocolate, and other events.
                    Download the ZO app to always be aware.
                </p>
            </div>
        </div>
    )
}
