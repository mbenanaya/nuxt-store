<template>
	<div>
		<div v-if="products" class="grid grid-cols-4 gap-5">
			<div v-for="p in products">
				<ProductCard :product="p" />
			</div>
		</div>
		<div v-else>
			<p class="text-center mt-6 font-semibold text-2xl">Loading...</p>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'products'
})

useHead({
	title: 'Products',
	meta:[
		{
			name: 'description',
			content: 'Products page'
		}
	]
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style></style>

