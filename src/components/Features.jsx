import React from "react";
import { FaGift, FaHeart, FaStar } from "react-icons/fa";
import confetti from "canvas-confetti";

const Features = () => {

    const celebrateBirthday = (title) => {
        confetti({
            particleCount: 150,
            spread: 100,
            origin: {
                y: 0.6
            }
        });

        alert(`🎂 ${title} Celebration Started! 🎉`);
    };


    const cards = [
        {
            icon: <FaGift className="text-5xl text-pink-500 mb-5" />,
            title: "Special Gifts",
            description: "Surprise your loved ones with unforgettable presents."
        },
        {
            icon: <FaHeart className="text-5xl text-red-500 mb-5" />,
            title: "Love & Care",
            description: "Celebrate every birthday with heartfelt wishes."
        },
        {
            icon: <FaStar className="text-5xl text-yellow-500 mb-5" />,
            title: "Make Memories",
            description: "Every birthday deserves magical moments and smiles."
        }
    ];


    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {
                    cards.map((card, index) => (

                        <div
                            key={index}
                            onClick={() => celebrateBirthday(card.title)}
                            className="
        bg-white 
        rounded-3xl 
        shadow-lg 
        p-8 
        cursor-pointer
        hover:-translate-y-2 
        duration-300
        hover:shadow-2xl
        relative
        overflow-hidden
    "
                        >

                            {/* Click Hint */}
                            <span
                                className="
            absolute 
            top-4 
            right-4 
            text-xs 
            bg-pink-100 
            text-pink-600 
            px-3 
            py-1 
            rounded-full
            animate-pulse
        "
                            >
                                Click 🎉
                            </span>


                            {card.icon}

                            <h3 className="text-2xl font-bold">
                                {card.title}
                            </h3>


                            <p className="mt-3 text-gray-500">
                                {card.description}
                            </p>


                            {/* Bottom Hint */}
                            <div
                                className="
            mt-6
            text-sm
            text-pink-500
            font-semibold
            flex
            items-center
            gap-2
        "
                            >
                                🎂 Tap here for celebration
                            </div>

                        </div>

                    ))
                }

            </div>

        </section>
    );
};

export default Features;