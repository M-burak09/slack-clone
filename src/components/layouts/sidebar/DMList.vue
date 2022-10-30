<template lang="">
    <div>
        <ListBlock title="Direct messages"> 
            <ListItem class="hover:bg-tertiary-color">Burak Kivrak</ListItem>
            <ListItem class="hover:bg-tertiary-color">Jamel Guiducci</ListItem>
            <ListItem class="hover:bg-tertiary-color">Derick Fridie</ListItem>
            <ListItem class="hover:bg-tertiary-color">Chelsie Beight</ListItem>
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