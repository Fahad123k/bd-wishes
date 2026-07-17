import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
    return (
        <div className="bg-gradient-to-br from-pink-50 via-white to-purple-100 min-h-screen">

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />

        </div>
    );
}