<template lang="">
    <section class="bg-primary-color text-secondary-color w-64 border-solid border border-quartinary-color min-h-[95vh] select-none">
        <div class="p-4">
            <span>Hogeschool Leiden</span>
        </div>
            <div class="hover:overflow-y-scroll">
            <div class="border-y border-quartinary-color py-4 pl-2">
                <ul>
                    <li> <font-awesome-icon :icon="['fas', 'at']" class="w-6"/> Mentions & reactions </li>
                    <li> <font-awesome-icon :icon="['far', 'paper-plane']" class="w-6"/> Drafts & sent </li>
                    <li> <font-awesome-icon :icon="['far', 'building']" class="w-6"/> Slack Connect </li>
                    <li> <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" class="w-6"/> More </li>
                </ul>
            </div>
            <ChannelList/>
            <DMList/>
            <AppsList/>
        </div>
    </section>
</template>

<script>
import ChannelList from '../sidebar/ChannelList.vue';
import DMList from '../sidebar/DMList.vue'
import AppsList from '../sidebar/AppsList.vue'
export default {
    components:{
        ChannelList,
        DMList,
        AppsList
    }
}
</script>

<style lang="">
    
</style>