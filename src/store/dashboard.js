import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useDashboard = create(
  persist(
    (set, get) => ({
      data: null,
      setData: (payload) => {
        const result = axios.get("/dashboard", payload);
        set((state) => ({
          data: {
            ...state.data,
            result,
          },
        }));
      },
    }),
    {
      name: "dashboard",
      // getStorage: () => sessionStorage,
    }
  )
);

export default useDashboard;
