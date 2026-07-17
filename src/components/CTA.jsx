import { FaHeart, FaStar } from "react-icons/fa";

export default function CTA() {
    const names = [
        "Babu",
        "Sonu",
        "Chengna",
        "Chunchunya",
        "Chenga",
        "Jugnu",
        "Raajkumari",
        "Pari",
        "Princess",
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            <div className="
                rounded-3xl
                bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                text-white
                text-center
                px-6 py-12
                sm:p-16
                shadow-2xl
            ">

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    🎂 Happy Birthday 22nd 🎂
                </h2>

                <p className="
                    mt-6
                    text-base
                    sm:text-lg
                    lg:text-xl
                    max-w-3xl
                    mx-auto
                    leading-relaxed
                ">
                    May your day be filled with laughter, love,
                    happiness, and beautiful surprises.
                </p>


                {/* Nicknames */}
                <div className="
                    mt-10
                    flex
                    flex-wrap
                    justify-center
                    gap-3
                ">

                    {names.map((name, index) => (
                        <div
                            key={index}
                            className="
                                flex
                                items-center
                                gap-2
                                bg-white/20
                                backdrop-blur-md
                                border
                                border-white/30
                                px-5
                                py-2
                                rounded-full
                                text-sm
                                sm:text-base
                                font-semibold
                                hover:bg-white/30
                                hover:scale-105
                                transition
                                duration-300
                            "
                        >
                            {index % 2 === 0 ? (
                                <FaHeart className="text-pink-200" />
                            ) : (
                                <FaStar className="text-yellow-200" />
                            )}

                            {name}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}