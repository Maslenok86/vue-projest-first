<template>
  <footer class="news-footer">
    <div class="news-footer-text">
      <a>Copyright © 2022 Слушки от Настюшки</a>
      <a>www.rumorofn.com</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.news-footer {
  height: 100px;
  background-color: #262626;
}

.news-footer-text {
  display: flex;
  color: white;
  font: 20pt Gabriola;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}
</style>