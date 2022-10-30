<template lang="">
    <div class=" pl-4 h-[80vh]">
        <ul class="overflow-y-scroll h-full" ref="el" id="el">
            <li v-for="msg in messages" :key="msg.name" class="flex mb-2">
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
            <!-- <form @submit.prevent=""> -->      
                <input @keyup.enter="addChat" class="bg-[#222529] focus:outline-none " v-model="currentChat" type="text" placeholder="Write a message..."/>
                <button @click="addChat" class=" float-right"><font-awesome-icon :icon="['far', 'paper-plane']" /></button>
            <!-- </form> -->
        </div>

</template>

<script>
export default {
    data(){
        return{
            messages: [
                {name: 'Jamel Guiducci', img: require('./../../../assets/Jamel.jpg'), message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: '9:21'},
                {name: 'Derick Fridie', img: require('./../../../assets/Derick.jpg'), message: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.', time: '9:22'},
                {name: 'Chelsie Beight', img: require('./../../../assets/Chelsie.jpg'), message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', time:'9:23'},
                {name: 'Derick Fridie', img: require('./../../../assets/Derick.jpg'), message: 'sed do consectetur adipiscing.', time: '9:23'},
                {name: 'Derick Fridie', img: require('./../../../assets/Derick.jpg'), message: 'reprehenderit in eiusmod :)', time: '9:28'},
                {name: 'Chelsie Beight', img: require('./../../../assets/Chelsie.jpg'), message:'tempor...', time: '9:30'},
                {name: 'Derick Fridie', img: require('./../../../assets/Derick.jpg'), message: 'reprehenderit in eiusmod :)', time: '9:31'},
                {name: 'Chelsie Beight', img: require('./../../../assets/Chelsie.jpg'), message:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?', time: '9:32'},
                {name: 'Jamel Guiducci', img: require('./../../../assets/Jamel.jpg'), message: 'Lorem ipsum aute irure dolor in reprehenderit', time: '9:36'},
                {name: 'Jamel Guiducci', img: require('./../../../assets/Jamel.jpg'), message: 'in voluptate velit esse cillum ed do consectetur adipiscing', time: '10:24'},
                {name: 'Chelsie Beight', img: require('./../../../assets/Chelsie.jpg'), message:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', time: '10:50'},                
                {name: 'Derick Fridie', img: require('./../../../assets/Derick.jpg'), message: 'Lorem ipsum dolor sit amet!', time: '11:01'},
                {name: 'Jamel Guiducci', img: require('./../../../assets/Jamel.jpg'), message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos', time: '12:36'},
            ]
        }
    },

    methods: {
        addChat() {
            const chat = {name:'Burak Kivrak', img: require('./../../../assets/Burak.jpeg'), message: '', time: ''}
            const date = new Date();
            chat.message = this.currentChat;
            chat.time = date.getHours() + ":" + date.getMinutes();
            this.messages.push(chat)
            this.currentChat = ''
        }
    },
    updated(){            
        var elem = document.getElementById("el");
        elem.scrollTop = elem.clientHeight;
        },
}
</script>
<style lang="">
    
</style>