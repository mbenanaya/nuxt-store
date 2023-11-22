<template>
	<div class="card">
		<div class="grid grid-cols-2 gap-10">
			<div class="p-7">
				<img :src="product.image" alt="Product image" class="max-w-[400px] mx-auto my-7">
			</div>
			<div class="p-7">
				<h2 class="my-7 text-4xl">{{ product.title }}</h2>
				<p class="text-xl my-7">Price - ${{ product.price }}</p>
				<h3 class="font-bold border-b-2 mb-4 pb-2">Description :</h3>
				<p class="my-7">{{ product.description }}</p>
				<button class="btn flex">
					<span class="material-symbols-outlined">
						add_shopping_cart
					</span>
					<span>Add to cart</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style></style>

