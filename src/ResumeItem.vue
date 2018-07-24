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
        font-size: 1.25rem;
        color: #42b983;
    }
}
.item- {
    &language, &tool {
        white-space: nowrap;
    }
    &experience {
    }
}
.list {
    display: grid;
}
.list- {
    &languages, &tools {
        padding: 10px 0;
        font-size: 1rem;
        font-weight: 600;
        grid-gap: 40px;
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
