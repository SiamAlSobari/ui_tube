<script lang="ts">
	import { page } from '$app/stores';
	import { Bookmark, Home, Play, ThumbsUp, User, UserRoundPlus } from 'lucide-svelte';

	interface Props {
		isOpen: boolean;
	}
	let { isOpen }: Props = $props();

	let pathname = $state('');
	$effect(() => {
		pathname = $page.url.pathname;
	});
	const menu_items = [
		{
			name: 'Beranda',
			icon: Home,
			href: '/beranda'
		},
		{
			name: 'Short',
			icon: Play,
			href: '/short'
		}
	];

	const channel_items = [
		{
			name: 'My Channel',
			icon: User,
			href: '/channel'
		},
		{
			name:'Tersimpan',
			icon: Bookmark,
			href: '/tersimpan'
		},
		{
			name:'Subscribe',
			icon: UserRoundPlus,
			href: '/subscribe'
		},
		{
			name:'Like',
			icon: ThumbsUp,
			href: '/like'
		}
	];
</script>

<aside
	class={`fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 -translate-x-full bg-black/80 shadow-md duration-300 ease-in-out lg:translate-x-0 md:bg-white  dark:bg-zinc-950 ${isOpen ? '!translate-x-0' : '-translate-x-full'}`}
>
	<div class="flex gap-4 flex-col">
		<div>
			<h2 class="p-2 text-2xl font-semibold">Menu</h2>
			<div class="flex flex-col gap-2 p-2">
				{#each menu_items as item}
					<a
						href={item.href}
						class={`flex items-center gap-2 p-2 ${item.href === pathname ? 'bg-yellow-500' : ''}`}
					>
						<item.icon class="h-6 w-6 opacity-80" />
						<span class="opacity-80">{item.name}</span>
					</a>
				{/each}
			</div>
		</div>
		<div>
			<h2 class="p-2 text-2xl font-semibold">Channel Menu</h2>
			<div class="flex flex-col gap-2 p-2">
				{#each channel_items as item}
					<a
						href={item.href}
						class={`flex items-center gap-2 p-2 ${item.href === pathname ? 'bg-yellow-500' : ''}`}
					>
						<item.icon class="h-6 w-6 opacity-80" />
						<span class="opacity-80">{item.name}</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</aside>
