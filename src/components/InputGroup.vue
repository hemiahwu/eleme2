<template>
  <div class="text-group">
    <div class="input-group" :class="{ 'is-invalid': error }">
      <input
        @input="
          $emit('update:modelValue', ($event?.target as HTMLInputElement).value)
        "
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
      />
      <button @click="$emit('btnClick')" v-if="btnTitle" :disabled="disabled">
        {{ btnTitle }}
      </button>
    </div>

    <div v-if="error" class="invalid-feedback">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
interface PropsType {
  modelValue: string;
  type: string;
  placeholder: string;
  btnTitle?: string;
  disabled?: boolean;
  error: string;
}
withDefaults(defineProps<PropsType>(), {
  type: "",
  modelValue: "",
  placeholder: "",
  btnTitle: "",
  disabled: false,
  error: "",
});

defineEmits(["btnClick", "update:modelValue"]);
</script>

<style scoped>
.input-group {
  border: 1px solid #ccc;

  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.input-group input {
  height: 100%;
  width: 60%;
  outline: none;
}

.input-group button {
  border: none;
  outline: none;
  background: #fff;
}

.input-group button[disabled] {
  color: #aaa;
}

.is-invalid {
  border: 1px solid red;
}

.invalid-feedback {
  color: red;
  padding-top: 5px;
}
</style>
