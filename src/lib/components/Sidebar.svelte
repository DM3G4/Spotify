<script lang="ts">
	import { ChevronDown, Heart, MoreHorizontal, Music, Music2 } from 'lucide-svelte';
	import Tabs from './Tabs.svelte';
	import { songs } from '$lib/constants/random';

	export let song: { name: string; artist: string; duration: string };
</script>

<div class="bg-neutral-900 rounded-md m-4 p-4 w-80 flex flex-col gap-y-4">
	<Tabs tabs={['Friends', 'Queue']} />
	<img
		class="h-52 rounded"
		src="https://i.scdn.co/image/ab67616d00001e02e1f4c211ce1ef95454bbbcc4"
		alt="Video preview"
	/>
	<div class="flex justify-between">
		<div class="flex flex-col p-2 items-start">
			<span class="text-white text-lg">{song.name}</span>
			<span class="text-sm text-gray-500">{song.artist}</span>
		</div>
		<div class="flex p-2 items-center text-gray-500 gap-x-2">
			<Heart size={20} strokeWidth={2} />
			<MoreHorizontal />
		</div>
	</div>
	<div class="flex justify-between bg-neutral-800 p-4 rounded-md text-white">
		<span class="font-bold">{song.artist}</span>
		<ChevronDown />
	</div>
	<div class="h-full bg-neutral-800 rounded-md p-4 gap-y-4 flex flex-col">
		<span class="font-bold text-white">Next in queue</span>
		{#each songs as song}
			<div class="flex items-center gap-x-2 text-neutral-600 justify-start">
				<span><Music2 /></span>
				<img class="h-8 w-8 rounded" src={song.image} alt="Video preview" />
				<div>
					<span class="text-white max-w-[10px]">{song.name}</span>
					<span class="text-sm">{song.artist}</span>
				</div>
			</div>
		{/each}
	</div>
</div>
