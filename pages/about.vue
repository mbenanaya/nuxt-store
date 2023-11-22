<template>
	<div>
		<h2 class="text-center mb-[20px] fs-3xl">About</h2>
		<p>{{ data }}</p>
	</div>
</template>
<script setup>
const { data } = await useFetch('/api/currency/MAD')
</script>

<style scoped>
</style>
