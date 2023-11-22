<template>
	<div class="card text-center flex flex-col justify-center">
		<img :src="product.image" alt="product tuhmb" class="thumb w-full h-[170px] lg:w-[170px] self-center lg:h-[220px]" />
		<p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
		<NuxtLink :to="`/products/${product.id}`">
			<p class="btn my-4">View Details</p>
		</NuxtLink>
	</div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style></style>

