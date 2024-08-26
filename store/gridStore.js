import create from 'zustand';

export const useGridStore = create((set) => ({
  cells: Array(1000).fill({ content: '' }),
  updateCell: (index, content) =>
    set((state) => {
      const updatedCells = [...state.cells];
      updatedCells[index] = { ...updatedCells[index], content };
      return { cells: updatedCells };
    }),
}));

export const useGridStore = create((set) => ({
  cells: Array(1000).fill({ content: '', alignment: 'left', fontSize: 12 }),
  updateCell: (index, content) => {
    set((state) => {
      const updatedCells = [...state.cells];
      updatedCells[index] = { ...updatedCells[index], content };
      return { cells: updatedCells };
    });
  },
  updateCellFormatting: (index, formatting) => {
    set((state) => {
      const updatedCells = [...state.cells];
      updatedCells[index] = { ...updatedCells[index], ...formatting };
      return { cells: updatedCells };
    });
  },
}));
