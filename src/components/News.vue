<script>
import Recommended from "./Recommended.vue";

export default {
  name: "News",
  components: {Recommended}
}
</script>

<template>
  <div class="article">
    <div class="article-introductory-info">
      <div class="article-title">Жена Сильвестра Сталлоне подала на развод</div>
      <div class="article-date">24 августа 2022</div>
      <div class="article-subtitle">Супруга Сильвестра Сталлоне, бывшая фотомодель Дженнифер Флавин после 25 лет
        совместной жизни подала
        на развод в окружной суд Палм-Бич. Как стало известно из материалов суда онлайн-изданию DailyMail.com, Флавин
        также обвиняет Сталлоне в том, что он укрыл от нее совместно нажитые активы.
      </div>
      <img class="article-main-photo"
           src="https://ichef.bbci.co.uk/news/800/cpsprodpb/9FD1/production/_126431904_gettyimages-1187050795-594x594.jpg.webp">
    </div>
    <div class="article-main-info">
      <div class="article-subtitle">
        У Дженнифер и Сильвестра трое детей - дочери София, Систин и Скарлет.<br/><br/>

        "Я люблю свою семью, и мы мирно и в частном порядке решаем свои личные вопросы", - заявил актер изданию USA
        TODAY через своего представителя.<br/><br/>

        Не далее как в мае Сталлоне, которому 76 лет, и Флавин, которая на 22 года моложе его, отпраздновали
        серебряную свадьбу.<br/><br/>

        "Поздравляю со счастливой 25-летней годовщиной мою чудесную жену, - писал тогда актер. - Не хватает слов,
        чтобы описать, что эта невероятно самоотверженная, преданная, терпеливая женщина значила для нашей жизни, и я
        лишь хочу, чтобы мы так же прожили еще 25 лет! Спасибо, дорогая!"<br/><br/>

        Флавин тогда тоже не поскупилась на комплименты в соцсетях: "Поздравляю нас с 25-й годовщиной свадьбы!<br/>
        Спасибо, что всегда заставляешь меня смеяться, любишь и защищаешь нашу прекрасную семью! Наш брак с каждым
        годом становится все лучше! Я не могу дождаться, чтобы провести остаток наших жизней вместе!"<br/><br/>

        Впрочем, позже этот пост был удален.<br/>
        Первый намек на предстоящие неприятности появился 10 августа, когда Дженнифер опубликовала в "Инстаграме" фото
        с тремя дочерьми и подписью "Эти девочки - вот мой приоритет, ничто другое не имеет значения. Четверо
        навсегда".<br/>
        Сталлоне, как утверждает DailyMail.com, нанес ответный удар и закрасил огромный портрет Дженнифер у себя на
        правом бицепсе изображением собаки.<br/>
      </div>

    </div>
  </div>
</template>


<style scoped>


.article {
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 800px;
  padding: 20px;
  border: 1px solid lightgrey;
}

.article-introductory-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 700px;
}

.article-title {
  font: 30pt "Times New Roman";
}

.article-subtitle {
  font: 16pt "Times New Roman";
  line-height: 30px;
  padding-top: 20px;
}

.article-main-photo {
  width: 100%;
}


</style>