<script>
import News from "../components/News.vue";
import Recommended from "../components/Recommended.vue";

export default {
  name: "NewsView",
  components: {Recommended, News}
}
</script>

<template>
  <div class="news">
    <Recommended/>
    <News/>
    <Recommended/>
  </div>
</template>


<style scoped>
.news {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: auto;
  width: 1476px;
  margin: 20px auto;
  /*background-color: rosybrown;*/
}
</style>