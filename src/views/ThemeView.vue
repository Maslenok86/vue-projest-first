<script>
import Recommended from "../components/Recommended.vue";
import Old from "../components/Old.vue";
export default {
  name: "ThemeView",
  components: {Old, Recommended}
}
</script>

<template>
  <div class="news-old-and-recommended">
    <Old/>
    <div class="news-recommended-block">
      <Recommended/>
    </div>
  </div>
</template>

<style scoped>
.news-old-and-recommended {
  display: flex;
  flex-direction: row;
  width: 1476px;
  margin: 20px auto;
}

.news-recommended-block {
  width: 490px;
  height: auto;
  display: flex;
  justify-content: center;
}
</style>