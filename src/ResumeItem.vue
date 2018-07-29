<template>
    <div :class="type" class="section">
        <div class="title">{{ title }}</div>
        <div :class="'list list-'+type">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    type: String,
    title: String
  },
  filters: {
    capitalize: function(value) {
        if (!value) return "";
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style lang="scss">

.section {
    margin: 20px 0;    

    > .title {
        color: #4f5d75;
        padding-bottom: 5px;
        margin-bottom: 10px;
        border-bottom: 1px solid #4f5d75;
        font-size: 1.25rem;
        font-weight: 900;

        @media screen and (min-width: 760px) {
            font-size: 1.5rem;
        }
    }
    > .list {}
}
.section.languages,
.section.libraries,
.section.tools {
    .item {
        &:after {
            content: ', ';
        }
    }
    .item:last-child {
        &:after {
            content: none;
        }
    }
}

// Languages
.section.languages {
}

// Libraries
.section.libraries {}

// Tools
.section.tools {}

// Education
.section.education {
    .item {
        margin: 10px 0;

        > .dates {
            font-size: 0.95rem;
            color: #444444;
        }
    }
}

// Experience
.section.experience {
    .item {
        > .position {
            font-size: 1.05rem;
            color: black;
        }
        > .workplace {
            font-size: 0.95rem;
            color: #222222;
        }
        > .dates,
        > .tasks {
            font-size: 0.9rem;
            color: #444444;
        }
        > .tasks {
            list-style-type: square;
        }
    }
}

</style>
