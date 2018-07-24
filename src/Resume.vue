<template>
    <div class="container">
        <div class="header">
            <h1 class="title">Austen Wade</h1>
        </div>
        <div class="main">
            <div class="left">
                <resume-item type="languages">
                    <div class="item-language" v-for="lang in languages" :key="lang">{{ lang }}</div>
                </resume-item>
                <resume-item type="tools">
                    <div class="item-tool" v-for="tool in tools" :key="tool">{{ tool }}</div>
                </resume-item>
                <resume-item type="education">
                    <div class="item-education" v-for="item in education" :key="item.school">
                        <div class="school">{{ item.school }}</div>
                        <div class="dates">{{ item.date }}</div>
                    </div>
                </resume-item>
            </div>
            <div class="right">
                <resume-item type="experience">
                    <div class="item-experience" v-for="job in experience" :key="job.title">
                        <div class="position">{{ job.title }}</div>
                        <div class="workplace">{{ job.workplace }}</div>
                        <div class="dates">{{ job.dates }}</div>
                        <ul>
                            <li v-for="task in job.tasks" :key="task">
                                {{ task }}
                            </li>
                        </ul>
                    </div>
                </resume-item>
            </div>
        </div>
        <footer class="footer">
            <div class="contact-info">
                <a class="contact-link github" target="_blank" href="https://www.github.com/austen-wade">GitHub</a>
                <span class="hide-mobile">|</span>
                <a class="contact-link codepen" target="_blank" href="https://www.codepen.io/austen-wade">CodePen</a>
                <span class="hide-mobile">|</span> 
                <a class="contact-link email" href="mailto:austen.wade.ut@gmail.com">austen.wade.ut@gmail.com</a>
                <span class="hide-mobile">|</span> 
                <a class="contact-link phone" href="tel:801-989-2439">801-989-2439</a>
            </div>
        </footer>

    </div>
</template>

<script>
import data from "./data";
import ResumeItem from "./ResumeItem.vue";

export default {
  components: {
    "resume-item": ResumeItem
  },
  data: function() {
    return data;
  }
};
</script>

<style lang="scss">
// * {
//     border: 1px solid red;
// }
html,
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.container {
  display: grid;
  grid-gap: 20px;
  margin: 20px 100px;

  > .main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 50px;
  }

  > .header {
    > .title {
      margin: 0;
      font-size: 36px;
      font-weight: 500;
    }
  }

  > .footer {
    display: grid;
    justify-items: center;

    > .contact-info {
      > .contact-link {
        text-decoration: none;
        color: #42b983;
        transition: color 0.2s;

        &:hover {
          color: black;
        }
      }
    }
  }
}
</style>
