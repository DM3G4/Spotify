<script lang="ts">
	import '../app.css';
	import Player from '$lib/components/Player.svelte';
</script>

<slot class="bg-black" />
<Player song={{ name: 'Caraluna', artist: 'Bacilos', duration: '4:26' }} />
