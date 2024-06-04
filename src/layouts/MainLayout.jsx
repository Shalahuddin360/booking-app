import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Headers from "../components/shared/Headers";

const MainLayout = () => {
    return (
        <div>
           <Headers/> 
             <div className="pt-10 pb-10">
             <Outlet/>
             </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;