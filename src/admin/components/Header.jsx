import { Link } from "react-router-dom";
import { RiArrowDownSLine, RiChat3Line, RiLogoutCircleRLine, RiNotification3Line, RiSettings3Line, RiThumbUpLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import "@szhsin/react-menu/dist/theme-dark.css";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';


export const Header = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 md:p-8 p-2 sm:py-1 py-8  xl:w-full flex items-center justify-end ">
      <nav className="flex items-center gap-2">
        <Menu menuButton={
          <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors " >
            <RiNotification3Line />
            <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
              2
            </span>
          </MenuButton>
        }

          align="end"
          arrow
          arrowClassName="bg-secondary-100"
          transition
          theming="dark"

        >
          <h2 className="text-gray-300 text-center font-medium">Notificaciones (2) </h2>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiThumbUpLine className="p-2 bg-blue-200 text-blue-700 box-content rounded-full" />
              <div className="text-sm flex flex-col w-full">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo like</span>{" "}
                  <span className="text-[8px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  A Jorge Trejo le gusta tu pub...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiThumbUpLine className="p-2 bg-blue-200 text-blue-700 box-content rounded-full" />
              <div className="text-sm flex flex-col w-full">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo like</span>{" "}
                  <span className="text-[8px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  A Jorge Trejo le gusta tu pub...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiChat3Line className="p-2 bg-yellow-200 text-yellow-700 box-content rounded-full" />
              <div className="text-sm flex flex-col w-full">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo comentario</span>{" "}
                  <span className="text-[8px]">21/10/2022</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Jorge Trejo ha comentado tu...
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
            <Link
              to="/"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Todas las notificaciones
            </Link>
          </MenuItem>


        </Menu>
        <Menu menuButton={
          <MenuButton
            className="flex gap-x-2 items-center hover:bg-secondary-100 p-2 rounded-lg transition-colors "
          >

            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" className="w-6 h-6 object-cover rounded-full" />
            <span>Usuario</span>
            <RiArrowDownSLine />
          </MenuButton>
        }
          align="end"
          arrow
          arrowClassName="bg-secondary-100"
          transition
          theming="dark"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="account/profile"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">Usuario</span>
                <span className="text-xs text-gray-500">Rol</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/cerrar-sesion"
              className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <RiLogoutCircleRLine /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};
