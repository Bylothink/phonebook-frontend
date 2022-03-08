<template>
    <ContainerLayout>
        <h1 class="title">
            Phonebook App
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Surname</th>
                    <th>Name</th>
                    <th>Phone number</th>
                    <th>Address</th>
                    <th>Geodata Lat/Long</th>
                    <th>Other info</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="index in range(10)" :key="index">
                    <td>Doe</td>
                    <td>John</td>
                    <td>(555) 32 21 10</td>
                    <td>Fake, st. 123 Springfield</td>
                    <td>38° N / 123° W</td>
                    <td>
                        <i>No information provided</i>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="6">
                        Search:
                        <input type="text" />
                    </td>
                </tr>
            </tfoot>
        </table>
    </ContainerLayout>
</template>

<script lang="ts" setup>
    import ContainerLayout from "@/layouts/ContainerLayout.vue";

    function* range(end: number)
    {
        for (let index = 0; index < end; index += 1)
        {
            yield index;
        }
    }
</script>

<style lang="postcss" scoped>
    .title
    {
        @apply my-10 text-center;
        @apply font-bold text-3xl;
    }

    .table
    {
        @apply table-auto w-full;
        @apply bg-white rounded-md shadow-sm;

        & > thead > tr > th
        {
            @apply px-3 py-2;
            @apply font-medium;
        }
        & > tbody
        {
            @apply bg-gray-200 shadow-inner;

            & > tr
            {
                @apply hover:bg-gray-300;

                & > td
                {
                    @apply px-3 py-2;
                }
            }
        }
        & > tfoot > tr > td
        {
            @apply px-3 py-2;
            @apply font-medium;

            & > input
            {
                @apply px-2 py-1;
                @apply border-2 border-gray-200 rounded-md shadow-inner;
                @apply outline-blue-500;
            }
        }
    }
</style>
