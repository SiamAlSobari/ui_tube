<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
</script>

<Button
	onclick={() => {
		goto('/login');
	}}
	class="w-full"
	variant="secondary">Login</Button
>
