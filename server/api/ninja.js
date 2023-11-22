export default defineEventHandler(async (event) => {

	// const {name} = useQuery(event)

	// api call with private key
	const { data } = await $fetch(
		"https://api.currencyapi.com/v3/latest?apikey=cur_live_03UWOLgCK5ZoGu95kfVMUYGxfAbeEHX7fve1xPh7"
	)

	return { data }
})
