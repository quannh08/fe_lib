import { Outlet } from "react-router-dom";
import Header from "../header/Header";

function LayoutDefault() {
    return ( 
        <div className="w-full h-full relative bg-slate-50 flex flex-col min-h-full flex flex-col">
            <header className="w-full top-0 fixed z-50">
                <Header/>
            </header>
            
            <main className="pt-32 flex-grow">
                <Outlet/>
            </main>
        
            <footer className="w-full h-[60px] flex  bg-cyan-800 self-end">
                <div className="w-full h-full flex text-center justify-center items-center px-6">@pageBTL...</div>
            </footer>
        </div>
     );
}

export default LayoutDefault;