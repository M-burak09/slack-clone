<template>
    <main class="bg-primary-color text-secondary-color w-full relative"> 
        <div class="border-y border-quartinary-color p-4 flex">
            <h2 clas="">{{$store.state.channel}}</h2>
            <div class="border rounded-md border-quartinary-color p-1 absolute right-4 top-3 flex">
                <img class="w-6 rounded-lg -mr-1 relative z-10" :src="this.$store.state.userpic" alt="">
                <img class="w-6 rounded-lg -mr-1 relative z-2" src="./../../../assets/Derick.jpg" alt="">
                <img class="w-6 rounded-lg" src="./../../../assets/Jamel.jpg" alt="">
                <p class="mx-2 ">4</p>
                <font-awesome-icon :icon="['far', 'user']" class="mr-1 pl-2 mt-1 border-l border-quartinary-color" />
            </div>
        </div>
        <ChatBox/>
    </main>
</template>

<script>
    import ChatBox from './../chats/ChatBox.vue'; 
    export default {
        components:{
            ChatBox,
        },
    }
</script>