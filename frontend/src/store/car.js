import { create } from "zustand";

export const useCarStore = create((set) => ({
  cars: [],
  setCars: (cars) => set({ cars }),
  // ---------------------------------------------------------------------------------------
  createCar: async (newCar) => {
    if (
      !newCar.make &
      !newCar.model &
      !newCar.image_url &
      !newCar.registration_number &
      !newCar.price &
      !newCar.current_owner &
      !newCar.year
    ) {
      return { success: false, message: "Please fill in all fields." };
    }
    const res = await fetch("/api/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    });
    const data = await res.json();
    set((state) => ({ cars: [...state.cars, data.data] }));
    return { success: true, message: "Car information created successfully" };
  },
  // -----------------------------------------------------------------------------------------------
  // retrieves all the cars that are stored in the database
  fetchCars: async () => {
    const res = await fetch("/api/car");
    const data = await res.json();
    set({ cars: data.data });
  },
  // -----------------------------------------------------------------------------------------------
  // deletes a car based on id
  deleteCar: async (pid) => {
    const res = await fetch(`/api/car/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({ cars: state.cars.filter((car) => car._id !== pid) }));
    return { success: true, message: data.message };
  },
  //-----------------------------------------------------------------------------------------------
  // updates the current car based on id
  updateCar: async (pid, updatedCar) => {
    const res = await fetch(`/api/car/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    });

    const data = await res.json();

    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({
      cars: state.cars.map((car) => (car._id === pid ? data.data : car)),
    }));

    return { success: true, message: data.message };
  },
  //-----------------------------------------------------------------------------------------------
  // updates multi items
  updateMoreThanOneCar: async (updatedCar) => {
    const result = {};
    for (const key in updatedCar) {
      if (updatedCar[key] !== "") {
        result[key] = updatedCar[key];
      }
    }
    // console.log(result);
    const res = await fetch(`/api/car`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({
      cars: state.cars.map((car) => (car ? data.data : car)),
    }));

    return { success: true, message: data.message };
  },
  // --------------------------------------------------------------------------
  filterCars: async () => {
    const res = await fetch("/api/olderCars");
    const data = await res.json();
    set({ cars: data.data });
  },
}));
