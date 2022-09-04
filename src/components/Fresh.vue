<template>
  <div class="news-fresh">
    <router-link :to="'/news'">
      <div class=news-fresh-first>
        <img class="news-first-img"
             src="https://ichef.bbci.co.uk/news/800/cpsprodpb/9FD1/production/_126431904_gettyimages-1187050795-594x594.jpg.webp">
        <div class="news-first-title">Жена Сильвестра Сталлоне подала на развод</div>
      </div>
    </router-link>
    <div class=news-fresh-second>
      <img class="news-second-img"
           src="https://www.patee.ru/r/x6/07/65/d2/960x.jpg">
      <div class="news-second-title">Окрошка с картофелем и колбасой рецепт</div>
    </div>


    <div class=news-fresh-second>
      <img class="news-second-img"
           src="https://cdn.lifehacker.ru/wp-content/uploads/2022/08/Snimok-ekrana-2022-08-25-v-11.59_1661418038-1280x640.jpg">
      <div class="news-second-title">Disney показал второй трейлер фильма «Пиноккио»</div>
    </div>
    <div class=news-fresh-second>
      <img class="news-second-img"
           src="https://cdn.lifehacker.ru/wp-content/uploads/2022/08/1168608868_1661023260-1280x640.jpg">
      <div class="news-second-title">7 лучших парков развлечений России</div>
    </div>
    <div class=news-fresh-second>
      <img class="news-second-img"
           src="https://cdn.lifehacker.ru/wp-content/uploads/2022/08/semyon-borisov-KgVwQ5NpoLw-unsplash_1661352301-1280x640.jpg">
      <div class="news-second-title">IKEA больше не нужна: учёные разработали самосборную мебель</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fresh"
}
</script>

<style scoped>
.news-fresh {
  background-color: white;
  height: auto;
  width: 1476px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
}

.news-fresh-first {
  display: flex;
  flex-direction: column;
  width: 942px;
  height: 400px;
  border: 1px solid lightgrey;
  padding: 20px 20px 20px 20px;
  justify-content: center;
  align-items: center;
}

.news-first-img {
  height: 100%;
  width: auto;
  border-radius: 10px;
}

.news-first-title {
  color: black;
  font: 18pt Gabriola bold;

}

.news-fresh-second {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  height: 400px;
  border: 1px solid lightgrey;
  background: none;
  padding: 20px 20px 20px 20px;

}

.news-second-img {
  width: 100%;
  border-radius: 10px;
}

.news-second-title {
  color: black;
  font: 18pt Gabriola bold;
}


</style>