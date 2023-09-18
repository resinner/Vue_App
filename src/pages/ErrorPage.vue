<template>
  <div class="error-container">
    <section class="error">
      <h1 class="error__title">Такої сторінки не існує!</h1>
    </section>
  </div>
</template>


<script>
export default {
  name: "ErrorPage",
};
</script>


<style lang="scss" scoped>
.error-container {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: url("../assets/img/custom-error-pages.png") no-repeat;
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 30px);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 29, 45, 0.5);
    z-index: -1;
  }
}
.error {
  margin-top: 80px;

  &__title {
    font-size: 60px;
    text-align: center;
    color: #fff;
  }
}
</style>
