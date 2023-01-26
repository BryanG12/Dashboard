
export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className=" flex justify-center items-center md:justify-end">
      <input
        className="py-2 px-4 outline-none  bg-gray-700/40 focus:outline-cyan-900 mb-2 text-sm"
        placeholder="Buscar"
        type="text"
        value={filter || ''}
        onChange={(event) => setFilter(event.target.value)}
      />

    </div>
  );
};
