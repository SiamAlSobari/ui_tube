<script lang="ts">
	import { page } from '$app/stores';
	import { Home, User } from 'lucide-svelte';
	let {isOpen} = $props()

	const pathname = $page.url.pathname;

	const menu_items = [
		{
			name: 'beranda',
			icon: Home,
			href: '/beranda'
		},
		{
			name: 'Profile',
			icon: User,
			href: '/profile'
		}
	];
</script>

<aside class="fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 shadow-md">
	<div class="flex flex-col gap-2 p-2">
		{#each menu_items as item}
			<a
				href={item.href}
				class="flex items-center gap-2 p-2"
				class:bg-yellow-500={item.href === pathname}
			>
				<svelte:component this={item.icon} class="h-6 w-6" />
				{item.name}
			</a>
		{/each}
	</div>
</aside>
