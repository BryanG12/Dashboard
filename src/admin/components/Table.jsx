import { useEffect } from 'react';
import { Column, useTable, usePagination, useGlobalFilter } from 'react-table';
import { GlobalFilter } from './GlobalFilter';


export const Table = ({ data, fetchData, columns, pageCount: controlledPageCount }) => {

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, //? Pagina inicial
      manualPagination: true,   //? Paginación manual
      pageCount: controlledPageCount //? Numero de paginas 
    },
    useGlobalFilter,
    usePagination //? Hook
  );

  const {
    canPreviousPage, //? Puedo ir a pagina anterior
    canNextPage, //? Puedo ir a pagina siguiente
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,  //? Pagina anterior
    nextPage, //? Pagina siguiente
    previousPage,
    pageOptions, //? opcion de pagina, se puede saber cantidad de paginas
    pageCount,
    gotoPage,
    preGlobalFilteredRows,
    setGlobalFilter,
    state //? Pagina actual
  } = tableInstance;

  const { pageIndex, globalFilter } = state;

  useEffect(() => {
    fetchData(pageIndex);
  }, [pageIndex, fetchData]);
  // table border-separate md:border-collapse rounded-xl 
  //  thead th bg-indigo-400 bg-opacity-100 text-white border
  return (
    <div className='bg-gray-700/30 p-4'>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="overflow-x-scroll scrollbar-track-slate-700 scrollbar-thin scrollbar-thumb-primary scrollbar-thumb-rounded-lg scrollbar-h-1 hover:scrollbar-h-2 rounded-sm">

        <table {...getTableProps()} className='w-full mb-2 border-white border-[1px]   '>
          <thead className=' bg-gray-500 border-b-2 border-gray-200'>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className=' p-3 text-sm font-semibold tracking-wide text-left text-black hover:bg-gray-300 border border-gray-300 transition-colors  '>
                    {column.render("Header")}

                  </th>
                ))}
              </tr>
            ))
            }
          </thead >
          <tbody {...getTableBodyProps()} className='divide-y divide-gray-100'>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className=' [&:nth-child(2n+1)]:bg-gray-700  [&:nth-child(2n+1)]:hover:bg-gray-800 bg-slate-500  hover:bg-slate-600 transition-colors hover:font-bold hover:text-white hover:text-xl '>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} className=' p-3 text-sm whitespace-nowrap  ' >{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table >
      </div >
      {/* <div className="pagination flex  gap-1 flex-row md:justify-end justify-center mt-2  "> */}
      <div className="pagination flex  gap-1 flex-col md:flex-row md:justify-between justify-center mt-2 items-center ">
        <p>Total de registros: <strong> {preGlobalFilteredRows.length}</strong> </p>
        <div className="pagination flex  gap-1 flex-row">
          <button
            className="bg-black  p-[7px] m-[0px 4px] text-sm text-white rounded-md hover:bg-sky-700 transition-colors border-gray-500 border-[1px] disabled:opacity-40"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {'<<'}
          </button>
          <button
            className="bg-black  p-[7px] m-[0px 4px] text-sm text-white rounded-md hover:bg-sky-700 transition-colors border-gray-500 border-[1px] disabled:opacity-40"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Anterior
          </button>
          {/* <span > */}
          <span className='flex flex-col md:flex-row justify-center items-center text-[13px] md:text-sm px-3 md:px-1'>

            <span>

              Pagína{' '}
            </span>


            <strong>
              {pageIndex + 1} de {pageOptions.length}
            </strong>{' '}
          </span>
          <button
            className="bg-black p-[7px] m-[0px 4px] text-sm text-white rounded-md hover:bg-sky-700 transition-colors border-gray-500 border-[1px] disabled:opacity-40"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Siguiente
          </button>
          <button
            className="bg-black p-[7px] m-[0px 4px] text-sm text-white rounded-md hover:bg-sky-700 transition-colors border-gray-500 border-[1px] disabled:opacity-40"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
          </button>
        </div>

      </div>
      {/* <p>Total de registros: {console.log(state)}</p> */}

      {/* <div>
        <input
          type="text"
          value={state.globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
        />
      </div> */}
    </div>

  );
};
