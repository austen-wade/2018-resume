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
        @media print {
            font-size: 1.1rem;
        }
    }
    .item {
        @media print {
            font-size: 0.8rem;
        }
    }
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

.section.education {
    .item {
        margin: 10px 0;

        > .dates {
            font-size: 0.95rem;
            color: #444444;

            @media print {
               font-size: 0.8rem;
            }
        }
    }
}

.section.experience {
    .item {
        > .position {
            font-size: 1.05rem;
            color: black;

            @media print {
               font-size: 0.8rem;
            }
        }
        > .workplace {
            font-size: 0.95rem;
            color: #222222;

            @media print {
               font-size: 0.7rem;
            }
        }
        > .dates,
        > .tasks {
            font-size: 0.9rem;
            color: #444444;

            @media print {
               font-size: 0.75rem;
            }
        }
        > .tasks {
            list-style-type: square;
        }
    }
}

</style>
