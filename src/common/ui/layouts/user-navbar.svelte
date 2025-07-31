<script>
	import ThemeTogle from "../theme-togle.svelte";

</script>
<nav class="flex  flex-wrap p-1 border-b items-center justify-between">
	<div class="flex items-center gap-2">
		<img src="/logo.png" class="h-14 w-16" alt="logo" />
        <h3 class="text-2xl font-bold">Tube App</h3>
	</div>
    <div class="flex items-center gap-2">
        <ThemeTogle/>
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" class="h-14 rounded-full w-14" alt="profile"/>
    </div>
</nav>
