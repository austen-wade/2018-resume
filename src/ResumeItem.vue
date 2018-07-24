<template>
    <div :class="type" class="section">
        <div class="title">{{ type | capitalize }}</div>
        <div :class="'list list-'+type">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    type: String
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
    .title {
        margin-bottom: 5px;
        font-size: 1.25rem;
        color: #02a9ea;
    }
}
.item- {
    &language, &tool {
        white-space: nowrap;
    }
    &experience {
        font-size: 0.8rem;

        > .position {
            font-size: 1.05rem;
            font-weight: 300;
        }
        > .workplace {
            font-weight: 500;
        }
        > .tasks {
            list-style: square;
        }
    }
    &education {
        &:first-child {
            margin: 10px 0 15px;
        }
    }
}
.list {
    display: grid;
}
.list- {
    &languages, &tools {
        padding: 10px 0;
        font-size: 1rem;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(auto, 100px));
    }
    &tools {

    }
    &experience {
    }
    &education {

    }
}

</style>
