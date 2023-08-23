<script lang="ts">
	export let tabs: Array<string> = [];
	import { base } from '$app/paths';
</script>

<div class="text-sm font-medium text-center text-gray-500 flex justify-center">
	<ul class="flex flex-wrap">
		{#each tabs as tab, i}
			{#if i === 1}
				<li class="mr-2" aria-posinset={i + 1}>
					<a
						href="{base}/"
						class="inline-block p-4 text-green-600 border-b-2 border-green-600 rounded-t-lg active dark:text-green-500 dark:border-green-500"
						aria-current="page">{tab}</a
					>
				</li>
			{:else}
				<li class="mr-2" aria-posinset={i + 1}>
					<a
						href="{base}/"
						class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-neutral-600 hover:border-neutral-300 dark:hover:text-neutral-300"
					>
						{tab}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</div>
