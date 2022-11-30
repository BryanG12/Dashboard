import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine, RiBarChart2Line, RiCloseLine, RiFileChartLine, RiHome2Line, RiLogoutBoxRLine, RiMenu3Line, RiSettings3Line, RiToolsFill, RiToolsLine } from 'react-icons/ri';

export const Sidebar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[65%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0" : "-left-full"
          } transition-all`}
      >
        <div >
          <h1 className="text-center text-2xl font-bold text-white mb-10 " >
            Admin <span className="text-primary text-4xl" >.</span>
          </h1>
          <ul  >
            <li >

              <Link to='/' className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors " >
                <RiHome2Line className='text-primary' /> Dashboard
              </Link>
            </li>

            <li >

              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900  transition-colors"
              >
                <span className="flex items-center gap-4 ">
                  <RiToolsLine className='text-primary' /> Productos
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${showSubmenu && "rotate-90 "
                    } transition-all `}
                />
              </button>
              {/* duration-700 ease-in-out delay-75  */}
              <ul
                className={` ${showSubmenu ? "h-[100%]" : "h-0 "
                  } overflow-y-hidden transition-all  `}
              >
                <li>
                  <Link
                    to='/'
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Agregar Producto

                  </Link>
                </li>
                <li >
                  <Link
                    to='/'
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Editar Producto

                  </Link>
                </li>
                <li>
                  <Link
                    to='/'
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Buscar Producto

                  </Link>
                </li>
              </ul>
            </li>

            <li>

              <Link to='/' className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors " >
                <RiBarChart2Line className='text-primary' /> Ventas
              </Link>
            </li>

            <li>
              <Link to='/' className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors " >
                <RiFileChartLine className='text-primary' /> Reportes
              </Link>

            </li>

          </ul>
        </div >

        <nav>
          <Link to='/' className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors " >
            <RiLogoutBoxRLine className='text-primary' /> Dashboard
          </Link>
        </nav>

      </div >
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};
