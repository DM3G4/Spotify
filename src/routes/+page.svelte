<script lang="ts">
	import Playlist from '$lib/components/Playlist.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Song from '$lib/components/Song.svelte';
	import Tabs from '$lib/components/Tabs.svelte';
	import { ChevronDown, GripVertical, Heart, MoreHorizontal, Play } from 'lucide-svelte';
</script>

<div class="w-screen h-screen pb-20 bg-black flex">
	<div class="flex flex-col w-full bg-neutral-900 m-4 mr-0 rounded-md p-4">
		<div class="flex justify-between w-full">
			<Tabs tabs={['Home', 'Playlists', 'Podcasts', 'Search']} />
			<div class="flex p-4 gap-x-4">
				<button class="bg-white rounded-full w-20 my-2 font-bold text-sm">Premium</button>
				<img class="w-12 h-12" src="https://api.dicebear.com/6.x/thumbs/svg?radius=50" alt="" />
			</div>
		</div>
		<div class="bg-neutral-800 rounded-lg overflow-y-scroll">
			<Tabs />
			<Playlist />
			<Playlist />
		</div>
	</div>
	<Sidebar song={{ name: 'Caraluna', artist: 'Bacilos', duration: '4:26' }} />
</div>
