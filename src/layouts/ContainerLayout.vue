<template>
    <Component :is="is" class="container">
        <slot></slot>
    </Component>
</template>

<script lang="ts" setup>
    defineProps({
        is: {
            default: "main",
            type: [String, Object]
        }
    });
</script>

<style lang="postcss" scoped>
    .container
    {
        @apply mx-auto my-4;
    }
</style>
