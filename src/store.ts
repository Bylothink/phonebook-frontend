import axios from "axios";
import { defineStore } from "pinia";

import { Contact } from "./models";

const GET_ALL_QUERY = `{
    contacts {
        id
        firstname
        address
        lastname
        phone
    }
}`;

interface _GetAllResponse
{
    data: { contacts: [{
        id: number;
        firstname: string;
        address?: string;
        lastname?: string;
        phone: string;
    }] };
}

const useStore = defineStore("contact", {
    state: () => ({ }),

    getters: { },
    actions: {
        async getAll(): Promise<Contact[]>
        {
            const data = { query: GET_ALL_QUERY };
            const response = await axios.post<_GetAllResponse>("http://localhost:8000/graphql", data);

            return response.data.data.contacts.map((contact) => new Contact({
                id: contact.id,
                firstName: contact.firstname,
                lastName: contact.lastname,
                phone: contact.phone,
                address: contact.address
            }));
        }
    }
});

export default useStore;
