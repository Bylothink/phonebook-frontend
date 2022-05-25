<template>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="contact in contacts" :key="contact.id">
                <td>{{ contact.completeName }}</td>
                <td>{{ contact.phone }}</td>
                <td>{{ contact.address }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
    import { ref } from "vue";

    import { Contact } from "@/models";
    import useContactStore from "@/store";

    const contactStore = useContactStore();
    const contacts = ref<Contact[]>([]);

    const loadContacts = async () =>
    {
        contacts.value = await contactStore.getAll();

        console.log(contacts.value);
    };

    loadContacts();
</script>
