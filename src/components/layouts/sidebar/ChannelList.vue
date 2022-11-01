<template lang="">
    <div>
        <ListBlock title="Channel"> 
            <!-- <ListItem @click="channelChange()" ref="test">General</ListItem> -->
            <ListItem @click="channelChange(channel)" v-for="channel in channelList" :key="channel"><font-awesome-icon :icon="['fas', 'hashtag']" class="w-7 mr-1"/>{{channel}}</ListItem>
            <!-- <ListItem><font-awesome-icon :icon="['fas', 'hashtag']" class="w-7 mr-1"/>Help</ListItem> -->
            <!-- <ListItem><font-awesome-icon :icon="['fas', 'hashtag']" class="w-7 mr-1"/>Test</ListItem> -->
            <!-- <ListItem><font-awesome-icon :icon="['fas', 'hashtag']" class="w-7 mr-1"/>Yes</ListItem> -->
        </ListBlock>  

    </div>
</template>
<script>
import ListBlock from '../../ui/ListBlock.vue';
import ListItem from '../../ui/ListItem.vue';

export default {
    components:{
        ListBlock,
        ListItem,
    },
    data() {
        return{
            channelList: ['General', 'Random', 'Help', 'Test', 'Yes']
        }
    },
    methods:{
        channelChange(channel){
            console.log(channel)
            this.$store.state.channel = channel
        }
    }

}
</script>
<style lang="">
    
</style>

