<template>
    <div class="pl-4 h-[80vh]">
        <ul class="overflow-y-scroll h-full" ref="chat">
            <li v-for="msg in $store.state.messages" :key="msg.name" class="flex mb-2">
                <img :src="msg.img" alt="" class="w-10 h-10  mr-2 rounded-md">
                <div>
                    <div class="flex">
                        <p class="font-bold text-white mr-2">{{msg.name}}</p>
                        <p class="text-xs mt-1">{{msg.time}}</p>
                    </div>
                    <p class="">{{msg.message}}</p>
                </div>
            </li>
        </ul>
    </div>

    <div class="m-4 bg-[#222529] border rounded-lg  border-quartinary-color p-4 absolute w-[96%] bottom-2">    
        <input @keyup.enter="addChat" class="bg-[#222529] focus:outline-none " v-model="currentChat" type="text" placeholder="Write a message..."/>
        <button @click="addChat" class=" float-right"><font-awesome-icon :icon="['far', 'paper-plane']" /></button>
    </div>
</template>

<script>
export default {
    methods: {
        addChat() {
            const chat = {name:'Burak Kivrak', img: require('./../../../assets/Burak.jpeg'), message: '', time: ''}
            const date = new Date();
            chat.message = this.currentChat;
            chat.time = date.getHours() + ":" + date.getMinutes();
            this.$store.state.messages.push(chat)
            this.currentChat = ''
        }
    },
    updated(){            
        const chat = this.$refs.chat
        chat.scrollTop = chat.clientHeight;
        },
}
</script>