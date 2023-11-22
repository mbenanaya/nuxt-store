<template>
	<Head>
		<Title>{{ product.title }}</Title>
		<Meta name="description" :content="product.description" />
	</Head>
	<div>
		<ProductDetails :product="product" />
	</div>
	
</template>

<script setup>
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product, error } = useFetch(uri, { key: id });

if (!product.value) {
	// Set error only if product doesn't exist
	error.value = createError({
		statusCode: 404,
		statusMessage: 'Product Not Found',
		fatal: true,
	});
}

definePageMeta({
	layout: 'products',
});
</script>

<style></style>
