import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComGravidade from "../pages/ComGravidade";
import SemGravidade from "../pages/SemGravidade";
import NaoEncontrado from "../pages/NaoEncontrado";
import { ContextoProvider } from "../context/Contexto";
import MenuLateral from "../component/MenuLateral";
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ContextoProvider>
                <Routes>
                    <Route path="/" element={<ComGravidade />} />
                    <Route path="/com-gravidade" element={<ComGravidade />} />
                    <Route path="/sem-gravidade" element={<SemGravidade />} />
                    <Route path="*" element={<NaoEncontrado />} />
                </Routes>
                <MenuLateral />
            </ContextoProvider>
        </BrowserRouter>
    );
};

export default AppRoutes;