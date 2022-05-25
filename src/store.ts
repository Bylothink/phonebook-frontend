import { defineStore } from "pinia";

import { Contact } from "./models";

const useStore = defineStore("contact", {
    state: () => ({ }),

    getters: { },
    actions: {
        async getAll(): Promise<Contact[]>
        {
            return [
                new Contact({
                    id: 1,
                    firstName: "John",
                    lastName: "Doe",
                    phone: "123456789",
                    address: "123 Main St."
                }),
                new Contact({
                    id: 2,
                    firstName: "Jane",
                    phone: "987654321"
                })
            ];
        }
    }
});

export default useStore;
