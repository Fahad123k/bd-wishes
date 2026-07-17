import Letter from "./Letter";

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 lg:py-24">

            <div className=" grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center">

                {/* Left */}
                <div className="text-center lg:text-left   ">

                    <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-semibold">
                        🎉 Happy Birthday 🎉
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold mt-6">
                        Wishing You
                        <span className="block text-pink-600">
                            Endless Happiness
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-600 leading-8">
                        May your birthday bring joy, laughter,
                        and unforgettable memories.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

                        <button className="bg-pink-600 text-white rounded-full px-8 py-3 hover:bg-pink-700 transition">
                            Send Wishes
                        </button>

                        <button className="border border-pink-600 text-pink-600 rounded-full px-8 py-3 hover:bg-pink-50 transition">
                            Gallery
                        </button>

                    </div>

                </div>

                {/* Right */}
                <div className="flex justify-center lg:justify-end">
                    <Letter />
                </div>

            </div>

        </section>
    );
}