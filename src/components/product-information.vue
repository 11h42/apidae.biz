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
  function resizeEvent () {
    changeSizeSubTitle();
    changeSizeTitleInformation();
  }

  function loadEvent () {
    changeSizeSubTitle();
    changeSizeTitleInformation();
  }

  function changeSizeTitleInformation () {
    if (window.innerWidth > 768) {
      var baseHeight = 0;
      for (var id in window.heightTitleInformation) {
        var subTitle = window.heightTitleInformation[id];
        if (subTitle.firstChild && subTitle.firstChild.offsetHeight > baseHeight) {
          baseHeight = subTitle.firstChild.offsetHeight;
        }
      }
      for (var idIn in window.heightTitleInformation) {
        var subTitle = window.heightTitleInformation[idIn];
        if (subTitle.style) {
          subTitle.style.height = baseHeight + 'px';
        }
      }
    }
  }

  function changeSizeSubTitle () {
    if (window.innerWidth > 768) {
      var baseHeight = 0;
      for (var id in window.heightSubTitle) {
        var subTitle = window.heightSubTitle[id];
        if (subTitle.lastChild && subTitle.lastChild.offsetHeight > baseHeight) {
          baseHeight = subTitle.lastChild.offsetHeight;
        }
      }
      for (var idIn in window.heightSubTitle) {
        var subTitle = window.heightSubTitle[idIn];
        if (subTitle.style)
          subTitle.style.height = baseHeight + 'px';
      }
    }
  }

  window.onresize = resizeEvent;
  window.onload = loadEvent;
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
