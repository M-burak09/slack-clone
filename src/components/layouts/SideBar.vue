<template lang="">
    <section class="bg-primary-color text-secondary-color w-52 border-solid border border-quartinary-color p-4 pt-2 min-h-[100vh] hover:overflow-scroll">
        <ListBlock title='Channel'/>
        <ListBlock title='Direct messages'/>
        <ListBlock title='Apps'/>
    </section>
</template>

<script>
import ListBlock from '../ui/ListBlock.vue'
export default {
    components:{
        ListBlock,
    }
}
</script>

<style lang="">
    
</style>