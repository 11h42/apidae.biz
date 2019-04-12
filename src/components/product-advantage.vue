<template>
	<article>
		<div class="product-advantage">
			<table class="text-xs-left" onresize="changeSizeSubTitle()" onload="changeSizeSubTitle()" id="heightSubTitle">
				<i class="fa fa-circle-thin fa-3x icon-yellow build-icon"><span class="build-check">&#10003;</span></i>
				<h4 class="sub-tittle">
					<slot name="title"></slot>
				</h4>
			</table>
			<div>
				<slot name="advantage"></slot>
			</div>
			<div>
				<slot name="advantage2"></slot>
			</div>
		</div>
	</article>
</template>

<script>

    export default {
    	methods: {
		}
    }
    function  changeSizeSubTitle() {
    	if (window.innerWidth > 768) {
			var baseHeight = 0;
			for (var id in this.heightSubTitle) {
				var subTitle = this.heightSubTitle[id];
				if (subTitle.clientHeight > baseHeight) {
					baseHeight = subTitle.clientHeight
				}
			}
			for (var id in this.heightSubTitle) {
				var subTitle = this.heightSubTitle[id];
				subTitle.style.height = baseHeight + 'px';
				console.dir(subTitle.style.height)
			}
		}
	}

	window.onresize = changeSizeSubTitle;
	window.onload = changeSizeSubTitle;

</script>

<style scoped>
	table {
	  	display: table;
	}

	.product-advantage {
		text-align: justify;
		display: grid;
		border: none;
		padding: 2em 0 2em 0;
		width: 80%;
		margin-left: 10%;
	}

	.sub-tittle {
		width: calc(100% - 2em);
		text-align: left;
		float: right;
		margin: 0;
		padding: 0;
	}

	.build-check {
		position: absolute;
		font-size: 0.7em;
		top: 1.2em;
		left: calc(10% + 0.6em);
	}

	.icon-yellow {
		color: #fcce21;
	}
</style>
