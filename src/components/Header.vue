
<template>
  <div class="news-header">
    <button class="news-menu-button">
      <img class="news-menu-img"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png">
    </button>
    <div class="news-title">Слушки от Настюшки</div>
    <div class="news-menu-themes">
      <button class="news-themes-button news-menu-them-title">
        Лучшее
      </button>
      <router-link :to="'/rubric'">
        <button class="news-themes-button news-menu-them-title">
          Рубрики
        </button>
      </router-link>

      <button class="news-themes-button news-menu-them-title">
        Что поесть
      </button>
      <button class="news-themes-button news-menu-them-title">
        Технологии сегодня
      </button>
      <button class="news-themes-button news-menu-them-title">
        Спорт с понедельника
      </button>
    </div>
    <div class="news-menu-end">
      <button class="news-menu-button">
        <img class="news-search-img"
             src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTU1LjY3IDUzNC44LTk0LjcxOS05NC43MTljMzIuMTk5LTM5LjU4MiA0MS43MzgtOTIuOTU3IDI1LjIzOC0xNDEuMjQtMTYuNDk2LTQ4LjI4NS01Ni43MDctODQuNjY0LTEwNi4zOS05Ni4yNjYtNDkuNjg4LTExLjYwMi0xMDEuODUgMy4yMTA5LTEzOC4wMiAzOS4xOTUtMzUuOTg0IDM2LjE3Ni01MC43OTcgODguMzM2LTM5LjE5NSAxMzguMDIgMTEuNjAyIDQ5LjY4OCA0Ny45OCA4OS44OTggOTYuMjY2IDEwNi4zOSA0OC4yODUgMTYuNSAxMDEuNjYgNi45NjA5IDE0MS4yNC0yNS4yMzhsOTQuNzE5IDk0LjcxOWMzLjgwODYgMy4yNjE3IDkuMDExNyA0LjM3MTEgMTMuODIgMi45NDkyIDQuODEyNS0xLjQyMTkgOC41NzQyLTUuMTgzNiA5Ljk5NjEtOS45OTYxIDEuNDIxOS00LjgwODYgMC4zMTI1LTEwLjAxMi0yLjk0OTItMTMuODJ6bS0yOTMuMDMtMTA0LjYzYy0yMi4yMTEtMjIuMTk5LTM0LjY5NS01Mi4zMTYtMzQuNzAzLTgzLjcxOS0wLjAwNzgxMy0zMS40MDYgMTIuNDY1LTYxLjUyNyAzNC42NjgtODMuNzM4IDIyLjIwMy0yMi4yMDcgNTIuMzItMzQuNjg0IDgzLjcyNy0zNC42ODRzNjEuNTIzIDEyLjQ3NyA4My43MjcgMzQuNjg0YzIyLjIwNyAyMi4yMTEgMzQuNjc2IDUyLjMzMiAzNC42NjggODMuNzM4LTAuMDAzOTA2IDMxLjQwMi0xMi40ODggNjEuNTItMzQuNzAzIDgzLjcxOS0yMi4xMDUgMjIuMzY3LTUyLjI0MiAzNC45NTctODMuNjkxIDM0Ljk1N3MtNjEuNTg2LTEyLjU5LTgzLjY5MS0zNC45NTd6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=">
      </button>
      <button class="news-menu-button">
        <img class="news-notifications-img"
             src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDIzLjM2IDU1OS43NWMtOC41MjM0IDE3LjUyMy0yNi41MiAyOS4zNjMtNDcuMzU5IDI5LjM2My0yMC44MzYgMC0zOC44MzItMTEuODQtNDcuMzU5LTI5LjM2MyAxNC4yMDcgMC45NDUzMSAyNy45NDEgMS40MjE5IDQwLjI1NCAxLjQyMTloMTMuMjYyYzEzLjI2MiAwLjQ3MjY2IDI2Ljk5NiAwIDQxLjIwMy0xLjQyMTl6bTEwMS4zNS0xMzIuNmMtMzQuMDk4LTQwLjcyNy0yOS44MzYtODMuODI0LTMyLjY3Ni0xMTIuNzEtMy43ODkxLTQzLjU3LTEwLjQxOC0xMDQuMTktOTEuODc1LTExMy42NnYtMTQuMjA3Yy0wLjAwMzkwNi0xMi43ODktMTAuODk1LTIzLjY4LTI0LjE1Ni0yMy42OC0xMy4yNTggMC0yMy42NzYgMTAuODkxLTIzLjY3NiAyNC4xNTJ2MTQuMjA3Yy04MS45MyA5Ljk0NTMtODguMDg2IDcwLjU2Mi05MS44NzUgMTE0LjYxLTIuODQzOCAyNy40NjkgMC45NDUzMSA3MS41MTItMzIuNjggMTEyLjI0LTI2LjUyIDMxLjI1OC0xOS40MTggNjUuODI4IDMuMzE2NCA4MC41MDggMzIuMjAzIDE5Ljg5MSA4Ni42NjQgMjcuOTQxIDE0NS4zOSAyNy40NjkgNTguNzIzIDAuNDcyNjYgMTEzLjE5LTcuMTA1NSAxNDUuMzktMjcuNDY5IDIyLjI1NC0xNS4xNTIgMjguODg3LTUwLjE5NSAyLjgzOTgtODEuNDUzeiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K">
      </button>
      <button class="news-menu-button">
        <img class="news-avatar-img"
             src="http://sun9-54.userapi.com/impf/c855324/v855324807/24c8e5/0HCkKDdkZIg.jpg?size=483x604&quality=96&sign=64dfbe0a0e1ee01ee47b4641bc977c6c&type=album">
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Header"
}
</script>

<style scoped>
.news-header {
  background-color: #ed5e42;
  width: auto;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 0 0;
}

.news-menu-img {
  height: 30px;
  width: 30px;

}

.news-menu-button {
  background: none;
  border: none;
  margin: 0 0 0 20px;
}

.news-title {
  font: 20pt Gabriola bold;
  color: white;
  align-self: center;
  margin: 0 0 0 15px;
}

.news-menu-themes {
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0 0 0 30px;
}

.news-menu-them-title {
  font: 16pt Gabriola;
  color: white;
}

.news-themes-button {
  background: none;
  border: none;
  align-self: center;
}

.news-menu-end {
  margin: 0 0 0 40px;
}

.news-search-img {
  height: 35px;
  width: 35px;
}

.news-avatar-img {
  border-radius: 50%;
  height: 45px;
  width: 45px;
}

.news-notifications-img {
  height: 35px;
  width: 35px;
}
</style>