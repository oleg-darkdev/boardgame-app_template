<script lang="ts">
	let { data } = $props();

	let { groupsListEurope } = data;

	import { FnbGroupCard } from '$entitiesApp';

	// console.log(groupsListEurope);
</script>

<!-- {#each groupsListEurope as groupData} -->
<!-- <section class="my-20 flex w-full flex-col items-center justify-center">
	<h2>{groupsListEurope.title} - {groupsListEurope.data.length}</h2>
	<span>api: {groupsListEurope.api.route}</span>
	<p class="mb-2">{groupsListEurope.shortDesc}</p>
	<div class="mx-auto flex max-w-6xl flex-row flex-wrap justify-between">
		{#each groupsListEurope.data as group}
			<FnbGroupCard {group} />
		{/each}
	</div>
</section> -->

<!-- {/each} -->

<style lang="postcss"></style>
