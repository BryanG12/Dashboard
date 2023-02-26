import React, { useCallback, useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { CardInfo } from '../components/CardInfo';
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
// import fetchUsers from '../assets/fetchUser';
import { Table } from '../components/Table';
import { defaultData } from '../assets/data';

const Home = () => {



  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(defaultData);
  const [pageCount, setPageCount] = useState(0);

  // const fetchData = useCallback(async function (page) {
  //   setIsLoading(true);
  //   const json = await fetchUsers(page + 1);
  //   setUsers(json.data);
  //   setPageCount(json.total_pages);
  //   setIsLoading(false);
  // }, []);

  const columns = useMemo(() => [
    {
      accessorKey: "name",
      header: () => <span>Nombre</span>,
    },
    {
      accessorKey: "lastName",
      header: () => <span>Apellido</span>,
    },
    {
      accessorKey: "age",
      header: () => <span>Edad</span>,
    },
    {
      accessorKey: "status",
      header: () => <span>Estado</span>,
    },
  ]);


  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-4xl text-white">Good morning, jotredev!</h1>
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <CardInfo
          ticket="total"
          totalTickets="145,000"
          text="Tickets totales"
        />
        <CardInfo
          ticket="pending"
          totalTickets="5,000"
          text="Tickets pendientes"
        />
        <CardInfo
          ticket="inProcess"
          totalTickets="130,000"
          text="Tickets en proceso"
        />
        <CardInfo
          ticket="close"
          totalTickets="10,000"
          text="Tickets cerrados"
        />
      </div>
      <div>
        <h1 className="text-2xl text-white my-10">Tickets más recientes</h1>
      </div>
      <div className="bg-secondary-100 p-2 md:p-6 rounded-xl">


        {/* <div className=" items-center mb-4 bg-slate-500 p-4 rounded-xl"> */}
        <div className="items-center  p-1 md:p-2 rounded-xl ">
          <h4 className='text-lg mb-2' >Paginacion</h4>
          <div className=" ">
            <Table
              columns={columns}
              data={users}
              // fetchData={fetchData}
              pageCount={pageCount}
            />
            <div>{isLoading && <div>Cargando...</div>}</div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
