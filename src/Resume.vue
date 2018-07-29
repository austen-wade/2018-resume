<template>
    <div class="container">
        <div class="header">
            <h1 class="title">Austen Wade</h1>
            <div class="contact-info">
                <a class="link email" href="mailto:austen.wade.ut@gmail.com">austen.wade.ut@gmail.com</a>
                <span class="separator">|</span>
                <a class="link phone" href="tel:801-989-2439">801-989-2439</a>
                <span class="separator -hide-print">|</span>
                <a class="link linkedin -hide-print" href="https://www.linkedin.com/in/austen-wade-3b723613b/">LinkedIn</a>
                <span class="separator -hide-print">|</span>
                <a class="link github -hide-print" target="_blank" href="https://www.github.com/austen-wade">GitHub</a>
                <span class="separator -hide-print">|</span>
                <a class="link codepen -hide-print" target="_blank" href="https://www.codepen.io/austen-wade">CodePen</a>
            </div>
        </div>

        <resume-item type="languages" title="Languages">
            <span class="item language" v-for="lang in languages" :key="lang">{{ lang }}</span>
        </resume-item>

        <resume-item type="libraries" title="Libraries &amp; Frameworks">
            <span class="item libraries" v-for="item in libraries" :key="item">{{ item }}</span>
        </resume-item>

        <resume-item type="tools" title="Tools &amp; Software">
            <span class="item tool" v-for="tool in tools" :key="tool">{{ tool }}</span>
        </resume-item>

        <resume-item type="education" title="Education">
            <div class="item education" v-for="item in education" :key="item.school">
                <div class="school">{{ item.school }}</div>
                <div class="dates">{{ item.date }}</div>
            </div>
        </resume-item>

        <resume-item type="experience" title="Experience">
            <div class="item experience" v-for="job in experience" :key="job.title">
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body, html {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #ffffff;
    color: #333333;
    margin: 10px 15px;
    font-size: 15px;

    @media screen and (min-width: 760px) {
        margin: 10px 30px;
        font-size: 16px;
    }
    @media screen and (min-width: 1080px) {
        margin: 25px 60px 50px;
    }
    @media print {
        margin: 0 30px 0;
    }
}
a {
    color: #3e92cc;
    text-decoration: none;
    transition: 0.2s color;

    &:hover {
        text-decoration: underline;
    }
}
.container {
    animation: 1s fadeIn;
}
.header {
    > .title {
        color: #4f5d75;
        font-size: 1.75rem;
        margin: 0;

        @media screen and (min-width: 760px) {
            font-size: 2rem;
        }
        @media print {
            font-size: 1.5rem;
        }
    }
}
.contact-info {
    line-height: 1.25;
    font-size: 1.2rem;

    @media (min-width: 760px) {
        font-size: 1rem;
    }

    > .link {
        display: block;

        @media (min-width: 760px) {
            display: inline;
        }
        @media print {
            &.-hide-print {
                display: none;
            }
        }
    }
    > .separator {
        display: none;

        @media (min-width: 760px) {
            display: inline;
        }
        @media print {
            &.-hide-print {
                display: none;
            }
        }
    }
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
}
</style>
