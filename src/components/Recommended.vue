<template>
  <div class="news-recommended">
    <div class="news-recommended-title">Популярное за неделю</div>
    <div class="news-recommended-element">
      <div><img class="news-recommended-img"
                src="https://cdn.lifehacker.ru/wp-content/uploads/2022/02/229_1644324219-e1644324283906-1280x640.jpg">
      </div>
      <div class="news-recommended-text">Шоколадные блины на кефире</div>
    </div>
    <div class="news-recommended-element">
      <div><img class="news-recommended-img"
                src="https://cdn.lifehacker.ru/wp-content/uploads/2020/02/shutterstock_1145877671_1582022647-e1582022745331-1280x640.jpg">
      </div>
      <div class="news-recommended-text">Заварные блины на кефире</div>
    </div>
    <div class="news-recommended-element">
      <div><img class="news-recommended-img"
                src="https://cdn.lifehacker.ru/wp-content/uploads/2021/02/CHto-podarit-babushke-na-8-Marta_1646431262-640x320.jpg">
      </div>
      <div class="news-recommended-text">Что подарить бабушке на 8 Марта</div>
    </div>
    <div class="news-recommended-element">
      <div><img class="news-recommended-img"
                src="https://burninghut.ru/wp-content/uploads/2022/08/8-zahvatyvayushchih-knig-pro-vampirov-i-mistiku-748x496.jpg">
      </div>
      <div class="news-recommended-text">8 захватывающих книг про вампиров и мистику</div>
    </div>
    <div class="news-recommended-element">
      <div><img class="news-recommended-img"
                src="https://cdn.lifehacker.ru/wp-content/uploads/2022/08/12_1659508777-640x320.jpg"></div>
      <div class="news-recommended-text">Международный экзамен по английскому TOEFL будет доступен для россиян, но с
        ограничениями
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommended"
}
</script>

<style scoped>
.news-recommended-block {
  width: 490px;
  height: auto;
  display: flex;
  justify-content: center;
}

.news-recommended {
  width: 300px;
  border: 1px solid lightgrey;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: fit-content;
}

.news-recommended-title {
  font: 16pt Gabriola bold;
  padding: 20px;
}

.news-recommended-element {
  display: flex;
  flex-direction: row;
  height: auto;
  padding: 20px;
  border-top: 1px solid lightgrey;
  align-items: center;
}

.news-recommended-img {
  width: 100px;
}

.news-recommended-text {
  font: 12pt Gabriola bold;
  margin: 0 0 0 10px;
}


</style>