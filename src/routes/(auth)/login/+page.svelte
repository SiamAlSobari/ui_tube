<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { LockKeyhole, Mail } from 'lucide-svelte';
	import {
		loginValidation,
		type loginValidationType
	} from '../../../common/validations/auth-validation';

	let form: loginValidationType = {
		email: '',
		password: ''
	};
	let errors: Partial<Record<keyof loginValidationType, string>> = {};

	function handleSubmit() {
		const result = loginValidation.safeParse(form);
		if (!result.success) {
			errors = result.error.flatten().fieldErrors as Partial<
				Record<keyof loginValidationType, string>
			>;
			console.error('Validation errors:', errors);
			return;
		} else {
			console.log('Login successful:', form);
		}
	}
</script>

<div class="flex justify-center w-full items-center min-h-screen ">
	<form on:submit|preventDefault={handleSubmit}  class="w-3/12 space-y-4">
		<div>
			<Label>Email</Label>
			<div class="flex overflow-hidden rounded border">
				<Button
					variant="ghost"
					size="icon"
					class="rounded-none border-r px-3 text-gray-600 hover:bg-gray-100 focus:outline-none"
					disabled
				>
					<Mail class="h-4 w-4" />
				</Button>
				<Input
					type="password"
					bind:value={form.password}
					class="w-full rounded-none border-none focus-visible:ring-0 focus:ring-0 focus:outline-none"
					placeholder="Enter your email"
				/>
			</div>
			{#if errors.email}
				<p class="text-sm text-red-500">{errors.email}</p>
			{/if}
		</div>

		<div>
			<Label>Password</Label>
			<div class="flex overflow-hidden rounded border">
				<Button
					variant="ghost"
					size="icon"
					class="rounded-none border-r px-3 text-gray-600 hover:bg-gray-100 focus:outline-none"
					disabled
				>
					<LockKeyhole class="h-4 w-4" />
				</Button>
				<Input
					type="password"
					bind:value={form.password}
					class="w-full focus-visible:ring-0 rounded-none border-none focus:ring-0 focus:outline-none"
					placeholder="Enter your password"
				/>
			</div>

			{#if errors.password}
				<p class="text-sm text-red-500">{errors.password}</p>
			{/if}
		</div>
		<Button class="w-full" variant="secondary" type="submit">Login</Button>
	</form>
</div>
