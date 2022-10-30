<template lang="">
    <section class="bg-primary-color text-secondary-color w-64 border-solid border border-quartinary-color h-[95vh] select-none">
        <div class="p-4">
            <span>Hogeschool Leiden</span>
        </div>
            <div class="h-[85vh]">
                <div class="overflow-y-scroll h-full">
                <div class="border-y border-quartinary-color py-4">
                    <ul>
                        <ListItem> <font-awesome-icon :icon="['fas', 'at']" class="w-6"/> Mentions & reactions </ListItem>
                        <ListItem> <font-awesome-icon :icon="['far', 'paper-plane']" class="w-6"/> Drafts & sent </ListItem>
                        <ListItem> <font-awesome-icon :icon="['far', 'building']" class="w-6"/> Slack Connect </ListItem>
                        <ListItem> <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" class="w-6"/> More </ListItem>
                    </ul>
                </div>
                <ChannelList/>
                <DMList/>
                <AppsList/>
            </div>
        </div>
    </section>
</template>

<script>
import ChannelList from '../sidebar/ChannelList.vue';
import DMList from '../sidebar/DMList.vue';
import AppsList from '../sidebar/AppsList.vue';
import ListItem from '../../ui/ListItem.vue';
export default {
    components:{
        ChannelList,
        DMList,
        AppsList,
        ListItem,
    }
}
</script>

<style lang="">
    
</style>