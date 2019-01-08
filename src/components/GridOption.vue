<template>
    <div class="gridOption">
        <h2 class="gridOption__headline">{{ $t('details_layoutOption_headline') }}</h2>
        <div class="gridOption__grid">
            <div class="gridOption__row gridOption__row--12" v-bind:class="{'is-active': canBeUsedinGrid(12)}">
                <div class="gridOption__col" v-for="i in 1" :key="i" title="12 in 12" />
            </div>
            <div class="gridOption__row gridOption__row--6" v-bind:class="{'is-active': canBeUsedinGrid(6)}">
                <div class="gridOption__col" v-for="j in 2" :key="j" title="6 in 12" />
            </div>
            <div class="gridOption__row gridOption__row--4" v-bind:class="{'is-active': canBeUsedinGrid(4)}">
                <div class="gridOption__col" v-for="k in 3" :key="k" title="4 in 12" />
            </div>
            <div class="gridOption__row gridOption__row--3" v-bind:class="{'is-active': canBeUsedinGrid(3)}">
                <div class="gridOption__col" v-for="l in 4" :key="l" title="3 in 12" />
            </div>
            <div class="gridOption__row gridOption__row--2" v-bind:class="{'is-active': canBeUsedinGrid(2)}">
                <div class="gridOption__col" v-for="m in 6" :key="m" title="2 in 12" />
            </div>
            <div class="gridOption__row gridOption__row--1" v-bind:class="{'is-active': canBeUsedinGrid(1)}">
                <div class="gridOption__col" v-for="n in 12" :key="n" title="1 in 12" />
            </div>
            <div class="gridOption__row gridOption__row--0" v-bind:class="{'is-active': canBeUsedinGrid(0)}">
                <div class="gridOption__col gridOption__col--full" title="Fullscreen" />
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'GridOption',
    props: {
        gridOptions: {
            type: Array,
            required: true
        }
    },
    methods: {
        canBeUsedinGrid: function(grid) {
            return this.gridOptions.includes(grid);
        }
    }
}
</script>
<style lang="scss">
    $gridOption-background-color: #F6F6F6;
    $gridOption-row-color: #C3C3C3;
    $gridOption-row-active-color: #40B226;
    .gridOption {
        &__grid {
            width: 300px;
            padding: 5px 0;
            background: $gridOption-background-color;
        }

        &__row {
            display: flex;
            margin: 10px 10px;

            &--12 {
               .gridOption__col {
                   width: 100%;
               } 
            }

             &--6 {
               .gridOption__col {
                   width: calc(100% / 2);
               } 
            }

            &--4 {
               .gridOption__col {
                   width: calc(100% / 3);
               } 
            }

            &--3 {
               .gridOption__col {
                   width: calc(100% / 4);
               } 
            }

             &--2 {
               .gridOption__col {
                  width: calc(100% / 6);
               } 
            }

             &--1 {
               .gridOption__col {
                   width: calc(100% / 12);
               } 
            }

             &--0 {
                margin: 10px 0;
               .gridOption__col {
                   width: 100%;
               } 
            }
             &.is-active {
                 .gridOption__col {
                    background-color: $gridOption-row-active-color; 
                 }
            }
        }

        &__col {
            flex: 1;
            box-sizing: border-box;
            background-color: $gridOption-row-color;
            height: 10px;
            margin-right: 5px;
            &:last-of-type {
                margin-right: 0;
            }
        }
    }
</style>
