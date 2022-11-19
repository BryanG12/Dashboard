import { Outlet } from "react-router-dom";
import './stylesAuth.css';


const LayoutAuth = () => {
  return (
    <div className="register flex flex-col min-h-screen rounded-lg md:p-12" >
      <div className="p-5 mb-10 md:mt-0 mt-8">
        <h1 className="text-primary text-3xl font-medium tracking-widest ">
          Dashboard template
        </h1>
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
