<script lang="ts">
	import { ChevronDown, GripVertical, Play } from 'lucide-svelte';
	import Song from './Song.svelte';
	import { getRandom, songs } from '$lib/constants/random';
</script>

<div class="flex p-4 flex-col">
	<div
		class="bg-neutral-700 w-full h-20 rounded-lg flex justify-between items-center px-8 text-neutral-500 bg-gradient-to-b from-green-800 to-black"
	>
		<div class="flex items-center gap-x-4">
			<GripVertical />
			<button
				class="bg-green-500 w-10 h-10 rounded-full flex justify-center items-center text-black pl-1"
				><Play fill="black" /></button
			>
			<img
				class="h-10 rounded"
				src="https://i.scdn.co/image/ab67616d00001e02e1f4c211ce1ef95454bbbcc4"
				alt="Video preview"
			/>
			<span class="text-white font-bold text-lg">Playlist</span>
		</div>
		<ChevronDown />
	</div>
	{#each songs as song}
		<Song song={getRandom(songs)} />
	{/each}
</div>
