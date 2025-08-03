<script>
	import { fade } from 'svelte/transition';
	import RegisterForm from '../../../domains/auth/components/register-form.svelte';
</script>

<div in:fade={{ duration: 500 }} class="flex min-h-screen w-full items-center justify-center">
	<RegisterForm />
</div>
