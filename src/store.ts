import { defineStore } from "pinia";

const useStore = defineStore("storeId", {
    state: () =>
    {
        return {
            counter: 0,
            name: "Eduardo",
            isAdmin: true
        };
    }
});

export default useStore;
