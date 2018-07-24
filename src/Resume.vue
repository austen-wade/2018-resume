<template>
    <div class="container">
        <div class="header">
            <h1 class="title">Austen Wade</h1>
            <div class="contact-info">
                <a class="contact-link email" href="mailto:austen.wade.ut@gmail.com">austen.wade.ut@gmail.com</a>
                <a class="contact-link phone" href="tel:801-989-2439">801-989-2439</a>
                <a class="contact-link linkedin" href="https://www.linkedin.com/in/austen-wade-3b723613b/">LinkedIn</a>
                <a class="contact-link github" target="_blank" href="https://www.github.com/austen-wade">GitHub</a>
                <a class="contact-link codepen" target="_blank" href="https://www.codepen.io/austen-wade">CodePen</a>
            </div>
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
                        <ul class="tasks">
                            <li v-for="task in job.tasks" :key="task">
                                {{ task }}
                            </li>
                        </ul>
                    </div>
                </resume-item>
            </div>
        </div>

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
html,
body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.container {
  display: grid;
  grid-gap: 20px;
  margin: 100px 150px;

  > .main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 50px;

      .left, .right {
          display: grid;
    }
  }

  > .header {
    > .title {
        color: #02a9ea;
      margin: 0;
      font-size: 36px;
      font-weight: 500;
    }
  }


     .contact-info {
      > .contact-link {
        text-decoration: none;
        color: #02a9ea;
        transition: color 0.2s;

        &:after {
            content: '|';
            color: #000;
            margin: 0 5px 0 8px;
        }
        &:hover {
          color: black;
        }
        &:last-child {
            &:after {
                content: none;
            }
        }
      }
    }
  }

</style>
