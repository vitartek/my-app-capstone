// timesReducer.test.js
import { initializeTimes, updateTimes } from './Main';  // Asegúrate de que la ruta es correcta
import * as api from '../api/api';  // Importamos la función fetchAPI

// Simulamos la función fetchAPI
jest.mock('../api/api', () => ({
  fetchAPI: jest.fn(),
}));

describe("initializeTimes function", () => {
  test("should return the correct initial times", () => {
    api.fetchAPI.mockReturnValue(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

    const result = initializeTimes();
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    expect(api.fetchAPI).toHaveBeenCalled();  // Verificamos que fetchAPI fue llamada
  });
});

describe("updateTimes function", () => {
  test("should return updated times based on the selected date", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "UPDATE_TIMES", payload: "2024-12-21" };

    api.fetchAPI.mockReturnValue(["18:00", "19:00", "20:00", "21:00"]);

    const result = updateTimes(initialState, action);
    expect(result).toEqual(["18:00", "19:00", "20:00", "21:00"]);
    expect(api.fetchAPI).toHaveBeenCalledWith(new Date("2024-12-21"));
  });

  test("should return the same state if action type is not UPDATE_TIMES", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "OTHER_ACTION", payload: "2024-12-21" };
    
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);  // El estado no cambia si el tipo de acción no es UPDATE_TIMES
  });
});
