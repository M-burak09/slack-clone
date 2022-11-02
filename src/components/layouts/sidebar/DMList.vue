<template lang="">
    <div>
        <ListBlock title="Direct messages"> 
            <ListItem @click="channelChange(dm)" class="flex" v-for="dm in dms" :key="dm"><img class="w-6 h-6 rounded-md ml-[1px] mr-2" :src="dm.img">{{dm.name}}</ListItem>
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
    data(){
        return{ 
            dms: this.$store.state.dms
        }
    },
    methods:{
        channelChange(channel){
            this.$store.state.channel = channel.name
            this.$store.state.messages = channel.messages
        }
    }
}
</script>