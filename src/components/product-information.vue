<template>
  <article>
    <div class="product-information">
      <div class="text-xs-left">
        <h4 id="heightTitleInformation">
          <slot name="title"></slot>
        </h4>
      </div>
      <div>
        <slot name="information"></slot>
      </div>
    </div>
  </article>
</template>

<script type="text/ecmascript-6">
</script>

<style scoped>
  .product-information {
    text-align: left;
    border: none;
    padding: 0 0 2em 0;
    width: 80%;
    margin-left: 10%;
  }
</style>
