<template lang="">
    <div>
        <ListBlock title="Apps"> 
            <ListItem class="flex"><img class="w-6 h-6 rounded-md ml-[1px] mr-2" src="./../../../assets/calendar.png">Google Calendar</ListItem>
            <ListItem class="flex"><img class="w-6 h-6 rounded-md ml-[1px] mr-2" src="./../../../assets/poll.png">Simple Poll</ListItem>
            <ListItem class="flex"><img class="w-6 h-6 rounded-md ml-[1px] mr-2" src="./../../../assets/drive.png">Google Drive</ListItem>
            <ListItem class="flex"><img class="w-6 h-6 rounded-md ml-[1px] mr-2" src="./../../../assets/zoom.png">Zoom</ListItem>
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
    }
}
</script>
<style lang="">
    
</style>