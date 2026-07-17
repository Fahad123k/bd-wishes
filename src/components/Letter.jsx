import { TypeAnimation } from "react-type-animation";
import letterPad from "../assets/letter_pad.png";

export default function Letter() {
    return (
        <div className="relative w-full flex justify-center">

            {/* Letter Image */}
            <img
                src={letterPad}
                alt="Letter"
                className="
                    w-full
                    max-w-[320px]
                    sm:max-w-[420px]
                    md:max-w-[520px]
                    lg:max-w-[650px]
                    xl:max-w-[720px]
                    drop-shadow-2xl
                "
            />

            {/* Text */}
            <div
                className="
                    absolute
                    top-[24%]
                    left-[18%]
                    w-[74%]
                    h-[60%]
                    overflow-hidden"
            >
                <TypeAnimation
                    sequence={[
                        "Dear Afreen,\n\n",
                        700,

                        "Dear Afreen,\n\nHappy 22nd Birthday! 🎂\n\n",
                        1000,

                        "Dear Afreen,\n\nHappy 22nd Birthday! 🎂\n\nMay your special day be filled with joy,\nlaughter and beautiful memories.\n\nMay Allah bless you with happiness,\nsuccess, peace and good health.\n\n❤️ Best Wishes ❤️",
                        2500,
                    ]}
                    wrapper="pre"
                    speed={70}
                    repeat={Infinity}
                    cursor={true}
                    style={{
                        fontFamily: "Caveat, cursive",

                        fontSize: "clamp(18px, 2.5vw, 44px)",

                        // Dark brown ink
                        color: "#4A2C1A",

                        lineHeight: "1.6",
                        letterSpacing: "0.35px",

                        // Slightly faded ink
                        opacity: 0.9,

                        // Very subtle ink bleed
                        textShadow: `
        0.4px 0.4px 0px rgba(120,70,30,0.18),
        -0.2px 0px 0px rgba(90,50,20,0.08)
    `,

                        fontWeight: 500,
                        whiteSpace: "pre-wrap",

                        // Makes handwriting smoother
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",

                        // Tiny rotation like handwritten text
                        transform: "rotate(-1deg)",

                        // Looks more handwritten
                        fontVariantLigatures: "common-ligatures",
                    }}
                />
            </div>

        </div>
    );
}

