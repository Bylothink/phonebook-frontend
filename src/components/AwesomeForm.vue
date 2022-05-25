<script lang="ts" setup>
    import { ref } from "vue";

    const props = defineProps({
        modelValue: {
            required: true,
            type: String
        }
    });

    const emit = defineEmits(["click", "pippo", "update:modelValue"]);

    const count = ref(0);

    const emitClick = () =>
    {
        count.value += 1;

        emit("click", count.value);

        console.log(props.modelValue);
    };
</script>

<template>
    <div>
        <input :value="modelValue"
               type="text"
               @input="emit('update:modelValue', $event.target.value)" />
        <button @click="emitClick" @mouseover="emit('pippo')">
            Clickami tutto! 😏
        </button>
        <br />
        <small>Hai premuto {{ count }} volte sul di me!</small>
    </div>
</template>

<style>
</style>
