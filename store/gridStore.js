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
