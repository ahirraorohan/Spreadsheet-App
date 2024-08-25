import { useGridStore } from '../store/gridStore';

const Grid = () => {
  const { cells, updateCell } = useGridStore();

  return (
    <div className="grid grid-cols-20 gap-px p-2 bg-gray-200">
      {cells.map((cell, index) => (
        <input
          key={index}
          value={cell.content}
          onChange={(e) => updateCell(index, e.target.value)}
          className="p-2 border border-gray-400 text-sm outline-none"
        />
      ))}
    </div>
  );
};

export default Grid;
