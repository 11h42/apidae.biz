<template>
  <article>
    <div class="product-advantage">
      <div class="text-xs-left position-title" id="heightSubTitle">
        <i class="fa fa-circle-thin fa-3x icon-yellow build-icon"><span class="build-check">&#10003;</span></i>
        <span class="sub-tittle sub-title-responsive">
          <slot name="title"></slot>
        </span>
      </div>
      <div>
        <slot name="advantage"></slot>
      </div>
      <div>
        <slot name="advantage2"></slot>
      </div>
    </div>
  </article>
</template>

<script type="text/ecmascript-6">
</script>

<style scoped>
  .product-advantage {
    text-align: justify;
    display: grid;
    border: none;
    padding: 2em 0 2em 0;
    width: 80%;
    margin-left: 10%;
  }

  .sub-tittle {
    font-weight: bold;
    width: calc(100% - 2.2em);
    text-align: left;
    float: right;
    margin: 0;
    padding: 0 0 0 0.5em;
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

  .position-title {
    margin-bottom: 1em;
  }
</style>
