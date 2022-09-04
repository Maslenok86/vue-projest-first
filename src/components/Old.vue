<template>
  <div class="news-old">
    <div class="news-old-element">
      <img class="news-old-element-img"
           src="https://resizer.mail.ru/p/5515df55-eca7-5b47-8f99-516bb0cb9aed/AQAOo_3C365kwMcL55KAnbI7AaxMohodKiLFtSIB_h3yzMQnURDP5WU75cjhdTKM6rRd6Uy2_pWSxPfmVqp3Z7H5BuE.webp">
      <div class="news-old-text">
        <a class="news-old-element-text">10 причин завести корги</a>
        <a class="news-old-element-hashtag">#животные</a>
      </div>
    </div>
    <div class="news-old-element">
      <img class="news-old-element-img"
           src="https://cdn.lifehacker.ru/wp-content/uploads/2021/07/Wild_1627575683-1280x640.jpg">
      <div class="news-old-text">
        <a class="news-old-element-text">12 мифов о выживании в дикой природе, в которые опасно верить</a>
        <a class="news-old-element-hashtag">#выживание</a>
      </div>
    </div>
    <div class="news-old-element">
      <img class="news-old-element-img"
           src="https://cdn.lifehacker.ru/wp-content/uploads/2022/02/Bezymyannyj-kollazh_1644739701-1280x640.jpg">
      <div class="news-old-text">
        <a class="news-old-element-text">Лучшие фото подводного мира с конкурса UPY2022</a>
        <a class="news-old-element-hashtag">#новости #фото</a>
      </div>
    </div>
    <div class="news-old-element">
      <img class="news-old-element-img"
           src="https://resizer.mail.ru/p/5515df55-eca7-5b47-8f99-516bb0cb9aed/AQAOo_3C365kwMcL55KAnbI7AaxMohodKiLFtSIB_h3yzMQnURDP5WU75cjhdTKM6rRd6Uy2_pWSxPfmVqp3Z7H5BuE.webp">
      <div class="news-old-text">
        <a class="news-old-element-text">10 причин завести корги</a>
        <a class="news-old-element-hashtag">#животные</a>
      </div>
    </div>
    <div class="news-old-element">
      <img class="news-old-element-img"
           src="https://cdn.lifehacker.ru/wp-content/uploads/2021/07/Wild_1627575683-1280x640.jpg">
      <div class="news-old-text">
        <a class="news-old-element-text">12 мифов о выживании в дикой природе, в которые опасно верить</a>
        <a class="news-old-element-hashtag">#выживание</a>
      </div>
    </div>
    <div class="news-old-element">
      <img class="news-old-element-img"
           src="https://cdn.lifehacker.ru/wp-content/uploads/2022/02/Bezymyannyj-kollazh_1644739701-1280x640.jpg">
      <div class="news-old-text">
        <a class="news-old-element-text">Лучшие фото подводного мира с конкурса UPY2022</a>
        <a class="news-old-element-hashtag">#новости #фото</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Old"
}
</script>

<style scoped>
.news-old {
  display: flex;
  flex-direction: column;
  background-color: white;
  height: auto;
  width: 984px;
}

.news-old-element {
  display: flex;
  border: 1px solid lightgrey;
  padding: 20px 20px 20px 20px;
  align-items: center;
}

.news-old-element-img {
  height: auto;
  width: 300px;
  border-radius: 10px;
}

.news-old-element-text {
  font: 16pt Gabriola bold;
}

.news-old-element-hashtag {
  font: 16pt Gabriola bold;
  color: gray;
}

.news-old-text {
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
}


</style>