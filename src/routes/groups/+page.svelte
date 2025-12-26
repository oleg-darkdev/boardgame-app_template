<script lang="ts">
	import { groupsByRegion } from '$sharedData';
	import { FnbGroupCard } from '$entitiesApp';
	// import { SEO } from '$sharedUtils';

	let activeScreen = $state(2);
</script>

<!-- изменить цвета, для каждой кнопки свой цвет -->
<section class="w-full pt-6">
	<div class="grid_project-page-explore mx-auto max-w-4xl">
		<div class="item_project-page-explore wrap_top-creative-container">
			<button
				onclick={() => {
					activeScreen = 1;
				}}
				class="link_project-page-explore w-inline-block"
			>
				<h1 class="h_semi-bold top-creative">List</h1>
			</button>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-left"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-left"
			/>
		</div>
		<div class="item_project-page-explore wrap_top-creative-container">
			<button
				onclick={() => {
					activeScreen = 2;
				}}
				class="link_project-page-explore w-inline-block"
			>
				<h1 class="h_semi-bold top-creative">Cards</h1>
			</button>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-left"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-left"
			/>
		</div>
		<div class="item_project-page-explore wrap_top-creative-container">
			<button
				onclick={() => {
					activeScreen = 3;
				}}
				class="link_project-page-explore w-inline-block"
			>
				<h1 class="h_semi-bold top-creative">Map</h1>
			</button>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-left"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-left"
			/>
		</div>
	</div>
</section>

{#if activeScreen == 1}{:else if activeScreen == 2}
	{#each groupsByRegion as groupData}
		<section class="my-20 flex w-full flex-col items-center justify-center">
			<!-- <div class=""> -->

			<a name={groupData.anchor}></a>

			<h2>{groupData.title} - {groupData.data.length}</h2>
			<span>api: {groupData.api.route}</span>
			<p class="mb-2">{groupData.shortDesc}</p>
			<div class="my-4 grid grid-cols-6 gap-4">
				{#each groupData.countries as country}
					<a class="" href="#{country}">{country}</a>
				{/each}
			</div>
			<div class="mx-auto max-w-6xl grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
				{#each groupData.data as group}
					{#if group.imgCollected}
						<FnbGroupCard {group} />
					{/if}
				{/each}
			</div>
		</section>
	{/each}
{:else if activeScreen == 3}
	<h2>карта в разработке</h2>
{/if}

<style lang="postcss"></style>
