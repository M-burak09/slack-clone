<template lang="">
    <div>
        <ListBlock title="Direct messages"> 
            <ListItem class="flex"><img class="w-6 h-6 rounded-md ml-[1px] mr-2" src="./../../../assets/slackbot.png">Slackbot</ListItem>
            <ListItem class="flex"><img class="w-6 h-6 rounded-md ml-[1px] mr-2" src="./../../../assets/Burak.jpeg">Burak Kivrak</ListItem>
            <ListItem class="flex"><img class="w-6 h-6 rounded-md ml-[1px] mr-2" src="./../../../assets/Jamel.jpg">Jamel Guiducci</ListItem>
            <ListItem class="flex"><img class="w-6 h-6 rounded-md ml-[1px] mr-2" src="./../../../assets/Derick.jpg">Derick Fridie</ListItem>
            <ListItem class="flex"><img class="w-6 h-6 rounded-md ml-[1px] mr-2" src="./../../../assets/Chelsie.jpg">Chelsie Beight</ListItem>
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