<template lang="">
    <div>
        <ListBlock title="Channel"> 
            <ListItem class="hover:bg-tertiary-color">General</ListItem>
            <ListItem class="hover:bg-tertiary-color">Random</ListItem>
            <ListItem class="hover:bg-tertiary-color">Help</ListItem>
            <ListItem class="hover:bg-tertiary-color">Test</ListItem>
            <ListItem class="hover:bg-tertiary-color">Yes</ListItem>
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