export const songs = [
	{
		name: 'Hotel California',
		artist: 'Eagles',
		album: 'Hotel California',
		image: 'https://i.scdn.co/image/ab67616d00001e024637341b9f507521afa9a778'
	},
	{
		name: 'I Dont Want to Miss a Thing',
		artist: 'Aerosmith',
		album: 'Armageddon',
		image: 'https://i.scdn.co/image/ab67616d00001e02da8d92affd796f7e20af7375'
	},
	{
		name: 'I Was Made For Loving You',
		artist: 'Kiss',
		album: 'Dynasty',
		image: 'https://i.scdn.co/image/ab67616d00001e024384b6976cadaec272114022'
	}
];

export function getRandom(array: any) {
	return array[Math.floor(Math.random() * array.length)];
}
