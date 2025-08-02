<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Menu } from 'lucide-svelte';
	import ThemeTogle from '../toggles/theme-togle.svelte';
	import ProfileDropdown from '../../../domains/profile/components/profile-dropdown.svelte';
	interface Props {
		handleOpen: () => void;
	}
	let { handleOpen }: Props = $props();
</script>

<nav
	class="z-40 flex flex-wrap items-center justify-between border-b bg-white p-1 dark:bg-zinc-950"
>
	<div class="flex items-center gap-2">
		<img src="/logo.png" class="h-14 w-16" alt="logo" />
		<h3 class="text-2xl font-bold">Tube App</h3>
		<button class="lg:hidden"  onclick={handleOpen}>
			<Menu class="h-7  w-7" />
		</button>
	</div>
	<div class="flex items-center gap-2">
		<ThemeTogle />
		<ProfileDropdown />
	</div>
</nav>
