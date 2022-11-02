<template>
    <div>
        <ListBlock title="Channel"> 
            <ListItem @click="channelChange(channel)" v-for="channel in channelList" :key="channel"><font-awesome-icon :icon="channel.img" class="w-7 mr-1"/>{{channel.name}}</ListItem>
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
            channelList: this.$store.state.channels,
            dms: this.$store.state.dms
        }
    },
    methods:{
        channelChange(channel){
            console.log(channel)
            this.$store.state.channel = channel.name
            this.$store.state.messages = channel.messages
        }
    }

}
</script>