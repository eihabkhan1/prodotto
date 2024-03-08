<script setup lang="ts">
const response = await useFetch('/api/products/4dc88659-3e52-446c-9d3e-668f40de4d50');

try {
    const res = await $fetch("/api/products/4dc88659-3e52-446c-9d3e-668f40de4d50", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ name: "AYOUB" }),
  });

  console.log("======", res);

} catch (e) {
  console.log("error", e);
}

// const response  = await res.json();

// fetch("/api/products/").then(res => res.json).then()

</script>

<template>
  <pre>
  {{ JSON.stringify(response.data.value, null, 2) }}
  </pre>
</template>

<style>
html {
  background-color: white;
  font: var(--text-sm-regular);
}
</style>