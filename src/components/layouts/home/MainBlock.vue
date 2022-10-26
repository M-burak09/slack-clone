<template lang="">
    <main class="bg-primary-color text-secondary-color w-full relative"> 
        <div class="border-y border-quartinary-color p-4 flex">
            <h2 clas="">Channel name</h2>
            <div class="border rounded-lg border-quartinary-color px-4"></div>
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

        data() {
            return {
                currentChat: '',
                chat: {name:'Burak Kivrak', img: require('./../../../assets/Burak.jpeg'), message: '', time: ''}
            }
        },

        methods: {
            addChat() {
                // this.chat.push(this.currentChat)
                const date = new Date();
                this.chat.message = this.currentChat;
                this.chat.time = date.getHours() + ":" + date.getMinutes();
            }
        }
        
    }
</script>
<style lang="">
    
</style>