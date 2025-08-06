<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import type { Writable } from 'svelte/store';
	import { categoryQueries } from '../../category/queries';
	import { Loader2 } from 'lucide-svelte';

	interface Props {
		isOpen: Writable<boolean>;
		onSuccess: () => void;
		onCancel: () => void;
	}

	let { isOpen, onSuccess, onCancel }: Props = $props();

	let title = $state('');
	let caption = $state('');
	let thumbnailFile: File | null = $state(null);
	let videoFile: File | null = $state(null);
	let thumbnailPreview: string | null = $state(null);
	let categoriesId: string[] = $state([]);
	let categoryQ = categoryQueries.getCategories();

	function handleThumbnailChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			thumbnailFile = input.files[0];
			thumbnailPreview = URL.createObjectURL(thumbnailFile);
		}
	}

	function handleVideoChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			videoFile = input.files[0];
		}
	}
</script>

<Dialog.Root bind:open={$isOpen}>
	<Dialog.Content showCloseButton={false} class="w-full max-w-md">
		<Dialog.Header class="flex items-center justify-center space-y-1.5">
			<Dialog.Title class="text-lg font-semibold">Upload Video</Dialog.Title>
		</Dialog.Header>

		<div class="mt-4">
			<form class="flex flex-col gap-4">
				<!-- Title -->
				<div class="flex flex-col gap-1">
					<label class="text-sm font-medium" for="title">Title</label>
					<input
						id="title"
						type="text"
						bind:value={title}
						placeholder="Enter video title"
						class="rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-ring focus:outline-none"
					/>
				</div>

				<!-- Caption -->
				<div class="flex flex-col gap-1">
					<label class="text-sm font-medium" for="caption">Caption</label>
					<textarea
						id="caption"
						bind:value={caption}
						rows="3"
						placeholder="Write a short description..."
						class="resize-none rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-ring focus:outline-none"
					></textarea>
				</div>

				<!-- Thumbnail Upload -->
				<div class="flex flex-col gap-1">
					<label for="thumbnail" class="text-sm font-medium">Thumbnail</label>
					<input
						type="file"
						accept="image/*"
						onchange={handleThumbnailChange}
						class="cursor-pointer text-sm file:mr-4 file:rounded file:border-0 file:bg-muted file:px-3 file:py-1 file:text-muted-foreground hover:file:bg-accent"
					/>
					{#if thumbnailPreview}
						<img
							src={thumbnailPreview}
							alt="Thumbnail Preview"
							class="mt-2 h-40 w-full rounded-md border object-cover"
						/>
					{/if}
				</div>

				<!-- Video Upload -->
				<div class="flex flex-col gap-1">
					<label for="video" class="text-sm font-medium">Video</label>
					<input
						type="file"
						accept="video/*"
						onchange={handleVideoChange}
						class="cursor-pointer text-sm file:mr-4 file:rounded file:border-0 file:bg-muted file:px-3 file:py-1 file:text-muted-foreground hover:file:bg-accent"
					/>
					{#if videoFile}
						<p class="mt-1 truncate text-sm text-muted-foreground">{videoFile.name}</p>
					{/if}
				</div>

				<!-- category select -->
				<div class="space-y-2">
					{#if $categoryQ.isLoading}
						<div class="flex items-center space-x-2 text-gray-500">
							<Loader2 class="h-4 w-4 animate-spin" />
							<span>Loading categories...</span>
						</div>
					{:else}
						<h2 class="text-sm font-medium">Categories</h2>
						{#each $categoryQ.data!.data as category}
							<label class="flex cursor-pointer items-center space-x-2">
								<input
									type="checkbox"
									bind:group={categoriesId}
									value={category.id}
									class="form-checkbox rounded"
								/>
								<span>{category.name}</span>
							</label>
						{/each}
					{/if}
				</div>
			</form>
		</div>

		<Dialog.Footer class="mt-6 flex justify-end gap-2">
			<Button variant="secondary" onclick={onCancel}>Cancel</Button>
			<Button onclick={onSuccess}>Upload</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
