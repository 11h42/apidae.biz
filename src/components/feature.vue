<template>
	<article class="feature">
		<div class="header">
			<h2>
				<slot name="header"></slot>
			</h2>
		</div>
		<figure>
			<img src="" alt="">
			<figcaption>
				<h3 class="catch">
					<slot name="catch"></slot>
				</h3>
				<p class="description">
					<slot name="description"></slot>
				</p>
			</figcaption>
		</figure>
	</article>
</template>
