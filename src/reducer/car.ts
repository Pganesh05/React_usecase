// src/features/counter/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Car {
  id: number;
  name: string;
  model: string;
  color: string;
  location: string;
  yearOfManufacture: string;
  kms: string;
  noOfOwners: string;
}

interface CarState {
  cars: Car[];
}

const initialState: CarState = {
  cars: [],
};

export const carSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addcar: (state, action: PayloadAction<Car>) => {
      state.cars.push(action.payload);
    },
    updatecar: (
      state,
      action: PayloadAction<{ carId: number; updatedcar: Car }>
    ) => {
      const { carId, updatedcar } = action.payload;
      const index = state.cars.findIndex((car) => car.id === carId);
      if (index !== -1) {
        state.cars[index] = updatedcar;
      }
    },
  },
});

export const { addcar, updatecar } = carSlice.actions;

export const selectcars = (state: RootState) => state.app.cars;

export default carSlice.reducer;
