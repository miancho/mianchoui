<script setup lang="ts">
const { message } = useHello();
</script>

<template>
  <div>
    <h1 class="font-extrabold">{{ message }}</h1>
    <div>
      <Button>Test para la prueba de Boton!</Button>
    </div>
  </div>
</template>
