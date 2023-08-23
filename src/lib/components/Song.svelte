<script lang="ts">
	import { GripVertical, Heart, MoreHorizontal } from 'lucide-svelte';
	export let song: { name: string; artist: string; album: string; image: string };
</script>

<div class="flex px-10 py-4 text-neutral-500">
	<div class="flex justify-between w-full">
		<div class="flex items-center gap-x-4">
			<GripVertical />
			<img class="h-10 rounded" src={song.image} alt="Video preview" />
			<div class="flex flex-col">
				<span class="text-white w-52 truncate">{song.name}</span>
				<span class="text-neutral-500">{song.artist}</span>
			</div>
		</div>
		<span>{song.album}</span>
		<div class="flex items-center gap-x-4">
			<Heart />
			<span class="text-neutral-500">4:20</span>
			<MoreHorizontal />
		</div>
	</div>
</div>
