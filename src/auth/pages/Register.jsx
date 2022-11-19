import { Link } from 'react-router-dom';
import { RiEyeFill, RiEyeOffFill, RiLock2Fill, RiMailFill, RiUser3Line, RiUser6Line } from 'react-icons/ri';
import { useState } from 'react';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-6 ">

      <h1 className="text-6xl text-white font-medium mb-2 uppercase tracking-[5px] ">
        Crear cuenta<span className="text-cyan-500">.</span>
      </h1>
      <form className="mt-8">
        <div className="relative max-w-lg mb-4">
          <RiUser3Line className="absolute top-1/2 -translate-y-1/2 left-2  " />
          <input
            type="text"
            autoComplete="off"
            className="w-full py-3 px-4 pl-8 pr-4 rounded-xl bg-[#343434] text-gray-100 group focus:outline-cyan-900 outline-none"
            placeholder="Nombre(s)"
          />
        </div>
        <div className="relative max-w-lg mb-4">
          <RiUser3Line className="absolute top-1/2 -translate-y-1/2 left-2  " />
          <input
            type="email"
            autoComplete="off"
            className="w-full py-3 px-4 pl-8 pr-4 rounded-xl bg-[#343434] text-gray-100 group focus:outline-cyan-900 outline-none"
            placeholder="Apellido(s)"
          />
        </div>
        <div className="relative max-w-lg mb-4">
          <RiUser6Line className="absolute top-1/2 -translate-y-1/2 left-2  " />
          <input
            type="email"
            autoComplete="off"
            className="w-full py-3 px-4 pl-8 pr-4 rounded-xl bg-[#343434] text-gray-100 group focus:outline-cyan-900 outline-none"
            placeholder="Usuario"
          />
        </div>
        <div className="relative max-w-lg mb-4">
          <RiLock2Fill className="absolute top-1/2 -translate-y-1/2 left-2  " />
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            className="w-full py-3 px-8 rounded-xl bg-[#343434] text-gray-100 group focus:outline-cyan-900 outline-none"
            placeholder="Contraseña"
          />
          {showPassword
            ? <RiEyeOffFill
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
            />
            : <RiEyeFill
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
            />
          }
        </div>
        <div className="max-w-lg flex justify-center md:justify-start mb-6">

        </div>
        <div className="max-w-lg">
          <button type='submit' className="bg-cyan-600 text-white w-full py-3 px-4 rounded-full hover:bg-cyan-700 transition-colors">
            Registrarme
          </button>
        </div>
      </form>
      <div className="max-w-lg flex justify-center md:justify-start mt-4 ">
        <span className="flex   gap-2">
          ¿Ya tienes cuenta?<Link to='/auth/login' className='text-primary hover:text-cyan-600 hover:font-bold' >Ingresa</Link>

        </span>
      </div>
    </div>
  );
};

export default Register;
