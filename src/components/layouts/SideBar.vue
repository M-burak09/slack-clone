<template lang="">
    <section class="bg-primary-color text-secondary-color w-64 border-solid border border-quartinary-color min-h-[95vh] select-none">
        <div class="p-4">
            <span>Hogeschool Leiden</span>
        </div>
            <div class="hover:overflow-y-scroll">
            <div class="border-y border-quartinary-color p-4">
                <ul>
                    <li>Mentions & reactions</li>
                    <li>Drafts & sent</li>
                    <li>Slack Connect</li>
                    <li>More</li>
                </ul>
            </div>
            <ListBlock title='Channel'/>
            <ListBlock title='Direct messages'/>
            <ListBlock title='Apps'/>
        </div>
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