<template>
    <div class="gridOption" v-if="showGrid">
        <h3 class="gridOption__headline">
            {{ $t('details_layoutOption_headline') }}
            <span class="gridOption__tooltip" :data-tooltip="$t('details_layoutOption_description')"></span>
        </h3>
        <div class="gridOption__grid">
            <div class="gridOption__row gridOption__row--12" v-bind:class="{'is-active': canBeUsedinGrid(12), 'is-selected': isSelected === 12}">
                <div @click="setGrid(12)" class="gridOption__col" v-for="i in 1" :key="i" title="12 in 12" />
            </div>
            <div class="gridOption__row gridOption__row--6" v-bind:class="{'is-active': canBeUsedinGrid(6), 'is-selected': isSelected === 6}">
                <div @click="setGrid(6)" class="gridOption__col" v-for="j in 2" :key="j" title="6 in 12" />
            </div>
            <div class="gridOption__row gridOption__row--4" v-bind:class="{'is-active': canBeUsedinGrid(4), 'is-selected': isSelected === 4}">
                <div @click="setGrid(4)" class="gridOption__col" v-for="k in 3" :key="k" title="4 in 12" />
            </div>
            <div class="gridOption__row gridOption__row--3" v-bind:class="{'is-active': canBeUsedinGrid(3), 'is-selected': isSelected === 3}">
                <div @click="setGrid(3)" class="gridOption__col" v-for="l in 4" :key="l" title="3 in 12" />
            </div>
            <div class="gridOption__row gridOption__row--2" v-bind:class="{'is-active': canBeUsedinGrid(2), 'is-selected': isSelected === 2}">
                <div @click="setGrid(2)" class="gridOption__col" v-for="m in 6" :key="m" title="2 in 12" />
            </div>
            <div class="gridOption__row gridOption__row--0" v-bind:class="{'is-active': canBeUsedinGrid(0), 'is-selected': isSelected === 0}">
                <div @click="setGrid(0)" class="gridOption__col gridOption__col--full" title="Fullscreen" />
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'GridOption',
    data() {
        return {
            showGrid: true,
            isSelected: 12
        }
    },
    props: {
        gridOptions: {
            type: Array,
            required: true
        }
    },
    created: function () {
        if(this.$parent.getComponent) {
            const allowedInGridArray = this.$parent.getComponent.biotope.allowedInGrid;
            if(allowedInGridArray.length) {
                this.$store.dispatch('loadSelectedGrid',allowedInGridArray[0]);
            } else {
                this.showGrid = false;
            }
        }
        
    },
    methods: {
        setGrid: function(grid) {
            if(this.canBeUsedinGrid(grid)) {
                this.isSelected = grid;
                this.$store.dispatch('loadSelectedGrid',grid);
            }
        },
        canBeUsedinGrid: function(grid) {
            return this.gridOptions ? this.gridOptions.includes(grid): false;
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
            margin-top: 15px;
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

             &--0 {
                margin: 10px 0;
               .gridOption__col {
                   width: 100%;
               } 
            }
             &.is-active {
                 .gridOption__col {
                    background-color: $gridOption-row-active-color; 
                    cursor: pointer;
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
