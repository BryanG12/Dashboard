import { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel
} from "@tanstack/react-table";

import classNames from "classnames";
import {
  RiSearch2Line,

} from "react-icons/ri";
import { rankItem } from "@tanstack/match-sorter-utils";


const fuzzyFilter = (row, columnId, value, addMeta) => {

  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({ itemRank });

  return itemRank.passed;
}

const DebouncedInput = ({ value: keyWord, onChange, ...props }) => {

  const [value, setValue] = useState(keyWord);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, 750);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);



  return (
    <input
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}

export const Table = ({ data, /*fetchData,*/ columns, pageCount: controlledPageCount, }) => {

  const [numPagination, setNumPagination] = useState(0);


  const [globalFilter, setGlobalFilter] = useState('');

  const [sorting, setSorting] = useState([]);


  const getStateTable = () => {
    const totalRows = table.getFilteredRowModel().rows.length;
    const pageSize = table.getState().pagination.pageSize;
    const pageIndex = table.getState().pagination.pageIndex;
    const rowsPerPage = table.getRowModel().rows.length;

    const firstIndex = (pageIndex * pageSize) + 1;
    const lastIndex = (pageIndex * pageSize) + rowsPerPage;

    return {
      totalRows,
      firstIndex,
      lastIndex
    }
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting
    },
    initialState: {
      pagination: {
        pageSize: 5
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: fuzzyFilter,
    onSortingChange: setSorting

  });


  const pages = [
    { value: numPagination },
    { value: numPagination + 1 },
    { value: numPagination + 2 },
    { value: numPagination + 3 },
  ];

  const Next = () => {
    setNumPagination(numPagination + 1)
  }
  const back = () => {
    numPagination >= 1 && setNumPagination(numPagination - 1)
  }

  const lastPages = () => {
    setNumPagination(table.getPageCount() - 4);
  }

  const firstPages = () => {
    setNumPagination(0);
  }




  return (
    <div className='bg-gray-700/30 p-4'>
      <div className="overflow-x-scroll scrollbar-track-slate-700 scrollbar-thin scrollbar-thumb-primary scrollbar-thumb-rounded-lg scrollbar-h-1 hover:scrollbar-h-2 rounded-sm">
        <div className="my-2 text-right">
          <div className="relative">

            <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 right-56 " />
            <DebouncedInput
              type="text"
              value={globalFilter ?? ''}
              onChange={value => setGlobalFilter(String(value))}
              className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 "
              placeholder="Buscar..."

            />
          </div>
        </div>
        <table className='w-full mb-2 border-white border-[1px]' >
          <thead className=' bg-gray-500 border-b-2 border-gray-200'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}

              >
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className=' p-3 text-sm font-semibold tracking-wide text-left text-black hover:bg-gray-300 border border-gray-300 transition-colors  '>
                    {header.isPlaceholder
                      ? null
                      :
                      <div
                        className={classNames({
                          'cursor-pointer select-none': header.column.getCanSort(),
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽'
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className=' [&:nth-child(2n+1)]:bg-gray-700  [&:nth-child(2n+1)]:hover:bg-gray-800 bg-slate-500  hover:bg-slate-600 transition-colors hover:font-bold hover:text-white hover:text-xl '>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className=' p-3 text-sm whitespace-nowrap' >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex  gap-1 flex-col md:flex-row md:justify-between justify-center mt-2 items-center ">
        {/* <div> */}
        <div className=" flex  gap-1 flex-row">
          <button
            className="bg-black  p-[7px] m-[0px 4px] text-sm text-white rounded-md hover:bg-sky-700 transition-colors border-gray-500 border-[1px] disabled:opacity-40"
            onClick={() => { table.setPageIndex(0); firstPages(); }}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="bg-black  p-[7px] m-[0px 4px] text-sm text-white rounded-md hover:bg-sky-700 transition-colors border-gray-500 border-[1px] disabled:opacity-40"
            onClick={() => { table.previousPage(); back() }}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>


          {

            (table.getPageCount() < 3) ?
              table.getPageOptions().map(function (value, key) {
                if (value < 3) {
                  return (
                    <button
                      key={key}
                      className={classNames({
                        "bg-black px-[8px] rounded-md hover:bg-sky-700 transition-colors border-gray-500 disabled:opacity-40 mx-[3px] ": true,
                        "bg-sky-700 font-bold": value === table.getState().pagination.pageIndex
                      })}
                      onClick={() => table.setPageIndex(value)}
                    >
                      {value + 1}
                    </button>
                  )
                }
              })
              : pages.map(function ({ value }, key) {

                if (value <= (table.getPageCount() - 1)) {

                  return (

                    < button
                      key={key}
                      className={
                        classNames({
                          "bg-black px-[8px] rounded-md hover:bg-sky-700 transition-colors border-gray-500 disabled:opacity-40 mx-[3px] ": true,
                          "bg-sky-700 font-bold": value === table.getState().pagination.pageIndex
                        })}
                      onClick={() => table.setPageIndex(value)}
                    >
                      {value + 1}
                    </button>
                  )
                }
              })

          }


          <button
            className="bg-black  p-[7px] m-[0px 4px] text-sm text-white rounded-md hover:bg-sky-700 transition-colors border-gray-500 border-[1px] disabled:opacity-40"
            onClick={() => { table.nextPage(); Next() }}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>

          <button
            className="bg-black  p-[7px] m-[0px 4px] text-sm text-white rounded-md hover:bg-sky-700 transition-colors border-gray-500 border-[1px] disabled:opacity-40"
            onClick={() => { table.setPageIndex(table.getPageCount() - 1); lastPages() }}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
        </div>
        <div className='text-gray-600 font-semibold'>
          Mostrando de {getStateTable().firstIndex}&nbsp;
          a {getStateTable().lastIndex}&nbsp;
          del total de {getStateTable().totalRows} registros
        </div>
        {/* </div> */}

        <select
          className='text-gray-600 border border-gray-300 rounded outline-indigo-700'
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}>
          <option value="5">5 pág.</option>
          <option value="10">10 pág.</option>
          <option value="25">25 pág.</option>
          <option value="50">50 pág.</option>
        </select>
      </div>

    </div >
  );
};
