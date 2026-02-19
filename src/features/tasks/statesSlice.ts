import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type { BoardState } from "@/types/board";

interface StatesState {
  list: BoardState[];
}

const initialState: StatesState = {
  list: [
    { id: "todo", name: "Todo", color: "#bfdbfe" },
    { id: "inprogress", name: "In Progress", color: "#fde68a" },
    { id: "completed", name: "Completed", color: "#bbf7d0" },
  ],
};

const statesSlice = createSlice({
  name: "states",
  initialState,
  reducers: {
    addState(state, action: PayloadAction<BoardState>) {
      state.list.push(action.payload);
    },

    reorderStates(state, action: PayloadAction<BoardState[]>) {
      state.list = action.payload;
    },
  },
});

export const { addState, reorderStates } = statesSlice.actions;
export default statesSlice.reducer;