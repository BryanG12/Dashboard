import { Link } from 'react-router-dom';
import { RiEyeLine, RiEyeOffLine, RiLock2Line, RiMailLine } from 'react-icons/ri';
import { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-5  ">
      <h3 className="text-gray-500  uppercase text-sm font-bold mb-2">
        Ingresa a la plataforma
      </h3>
      <h1 className="text-6xl text-white font-medium mb-2 uppercase tracking-[5px] ">
        Inicia sesión<span className="text-cyan-500">.</span>
      </h1>
      <form className="mt-8">
        <div className="relative max-w-lg mb-4">
          <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2  " />
          <input
            type="email"
            autoComplete="off"
            className="w-full py-3 px-4 pl-8 pr-4 rounded-xl bg-[#343434] text-gray-100 group focus:outline-cyan-900 outline-none"
            placeholder="Usuario"
          />
        </div>
        <div className="relative max-w-lg mb-4">
          <RiLock2Line className="absolute top-1/2 -translate-y-1/2 left-2  " />
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            className="w-full py-3 px-8 rounded-xl bg-[#343434] text-gray-100 group focus:outline-cyan-900 outline-none"
            placeholder="Contraseña"
          />
          {showPassword
            ? <RiEyeOffLine
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
            />
            : <RiEyeLine
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer'
            />
          }
        </div>
        <div className="max-w-lg flex justify-center md:justify-start mb-6">
          <a
            href="#"
            className="text-gray-500 font-medium hover:text-gray-300 transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className="max-w-lg">
          <button type='submit' className="bg-cyan-600 text-white w-full py-3 px-4 rounded-full hover:bg-cyan-700 transition-colors">
            Iniciar sesión
          </button>
        </div>
      </form>
      <div className="max-w-lg flex justify-center md:justify-start mt-4 ">
        <span className="flex   gap-2">
          ¿No tienes cuenta?<Link to='/auth/register' className='text-primary hover:text-cyan-600 hover:font-bold' >Registrate</Link>

        </span>
      </div>
    </div>
  );
};

export default Login;
