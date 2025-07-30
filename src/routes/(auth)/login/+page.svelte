<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { LockKeyhole, Mail } from 'lucide-svelte';
	import {
		loginValidation,
		type loginValidationType
	} from '../../../common/validations/auth-validation';
	import * as Card from '$lib/components/ui/card/index';
	import { login_mutation } from '../../../domains/auth/queries';
	import { goto } from '$app/navigation';

	let form: loginValidationType = {
		email: '',
		password: ''
	};
	let errors: Partial<Record<keyof loginValidationType, string>> = {};
	const login = login_mutation();
	
	function handleSubmit() {
		const result = loginValidation.safeParse(form);
		if (!result.success) {
			errors = result.error.flatten().fieldErrors as Partial<
				Record<keyof loginValidationType, string>
			>;
			return;
		} else {
			$login.mutate(form,{
				onSuccess:(data)=>{
					goto('/')
				}
			});
		}
	}
</script>

<div class="flex min-h-screen w-full items-center justify-center">
	<Card.Root class="w-full max-w-md dark:border-0">
		<Card.Content>
			<form on:submit|preventDefault={handleSubmit} class="w-full space-y-4">
				<div class="space-y-1">
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
							bind:value={form.email}
							class="w-full rounded-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0"
							placeholder="Enter your email"
						/>
					</div>
					{#if errors.email}
						<p class="text-sm text-red-500">{errors.email}</p>
					{/if}
				</div>

				<div class="space-y-1">
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
							class="w-full rounded-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0"
							placeholder="Enter your password"
						/>
					</div>

					{#if errors.password}
						<p class="text-sm text-red-500">{errors.password}</p>
					{/if}
				</div>
				<Button class="w-full" variant="secondary" type="submit">Login</Button>
			</form>
		</Card.Content>
	</Card.Root>
</div>
