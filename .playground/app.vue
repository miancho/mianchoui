<script setup lang="ts">
const { message } = useHello()
</script>

<template>
    <div>
        <Hero />
        <h1 class="font-extrabold">{{ message }}</h1>
        <Button>Test!</Button>
    </div>
</template>