import {
    FaBirthdayCake,
    FaGift,
    FaHeart,
    FaStar,
    FaPenNib,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import letterPad from "../assets/letter_pad.png";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";

export default function Home() {
    return (
        <>


            <Hero />
            <Features />
            <CTA />

      
        </>
    );
}