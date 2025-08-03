<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { ImagePlus } from 'lucide-svelte';

	interface Props {
		onChangeImage?: (event: Event) => void;
	}

	let { onChangeImage }: Props = $props();
</script>

<Label>
	<Input onchange={onChangeImage} class="hidden" type="file" />
	<ImagePlus class=" z-10 h-8 w-8  text-green-400  " />
</Label>
