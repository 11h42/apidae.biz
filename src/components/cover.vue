<template>
	<section class="cover">
		<div class="catchline">
			<h1 class="display-1 text-xs-center">
				<slot name="header"></slot>
				<br>
				<slot name="header-subtitle"></slot>
			</h1>
		</div>
	</section>
</template>

<style>
	.catchline {
		top: 20vh;
		position: relative;
		color: white;
		text-shadow: .25rem .25rem 1rem #000;
	}

	.cover {
		background-image: url('../assets/banner.jpg');
		background-size: cover;
		height: 80vh;
	}

</style>
