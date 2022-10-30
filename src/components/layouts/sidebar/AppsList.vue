<template lang="">
    <div>
        <ListBlock title="Apps"> 
            <ListItem class="hover:bg-tertiary-color">Slackbot</ListItem>
            <ListItem class="hover:bg-tertiary-color">Google Calendar</ListItem>
            <ListItem class="hover:bg-tertiary-color">Google Drive</ListItem>
            <ListItem class="hover:bg-tertiary-color">Simple Poll</ListItem>
            <ListItem class="hover:bg-tertiary-color">Zoom</ListItem>
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