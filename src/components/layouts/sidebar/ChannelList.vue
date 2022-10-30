<template lang="">
    <div>
        <ListBlock title="Channel"> 
            <ListItem ><font-awesome-icon :icon="['fas', 'hashtag']" class="w-7 mr-1" />General</ListItem>
            <ListItem><font-awesome-icon :icon="['fas', 'hashtag']" class="w-7 mr-1"/>Random</ListItem>
            <ListItem><font-awesome-icon :icon="['fas', 'hashtag']" class="w-7 mr-1"/>Help</ListItem>
            <ListItem><font-awesome-icon :icon="['fas', 'hashtag']" class="w-7 mr-1"/>Test</ListItem>
            <ListItem><font-awesome-icon :icon="['fas', 'hashtag']" class="w-7 mr-1"/>Yes</ListItem>
        </ListBlock>  

    </div>
</template>
<script>
import ListBlock from '../../ui/ListBlock.vue';
import ListItem from '../../ui/ListItem.vue';
// import {ref} from "vue"
export default {
    components:{
        ListBlock,
        ListItem,
    },
    data(){
        // channelName: ''
    },
    mounted() {
            // console.log(this.$refs.channel)
        },
    methods:{
        channelChange(){
            console.log(this.$refs.test)
        }
    }

}
</script>
<style lang="">
    
</style>