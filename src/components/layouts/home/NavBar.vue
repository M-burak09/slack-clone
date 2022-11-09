<template>
    <section class="bg-tertiary-color text-white h-12 select-none flex justify-center w-full">
        <font-awesome-icon :icon="['far', 'clock']" class="ml-2 my-auto"/>
        <input type="text" v-model="input" :placeholder="'Search ' + $store.state.organization" class="rounded-md border border-quartinary-color bg-primary-color ml-4 px-2 my-2 w-1/2 max-w-[600px]"/>
        <font-awesome-icon :icon="['fas', 'xmark']" class="-ml-6 my-auto"/>
        <div class="absolute right-4 top-2 flex">
            <font-awesome-icon :icon="['far', 'circle-question']" class="pr-4 mt-2"/>
            <img @click="profileModal = true" class="cursor-pointer w-6 h-6 mt-1 rounded-md" :src="$store.state.userpic" alt="">
            <span class="h-3 w-3 bg-green-500 -mr-1 -mb-1 inline-block rounded-xl absolute bottom-0 border-2 border-tertiary-color right-0"></span>
        </div>
        <div v-show="profileModal" @click="profileModal=false" class="absolute z-20 w-full h-full"></div>
        <div v-show="profileModal" class="text-secondary-color absolute z-30 right-4 top-10 bg-[#222529] rounded-lg border border-quartinary-color py-4 w-80">
            <div class="flex px-6 mb-2">
                <img class="w-10 h-10 my-auto rounded-lg" :src="$store.state.userpic" alt="">
                <div class="ml-3">
                    <p class="font-bold text-white">{{$store.state.username}}</p>
                    <div class="flex">
                        <span class="h-2 w-2 mt-2 mr-2 bg-green-700 inline-block rounded-xl"></span>
                        <p class="text-sm text-secondary-color">Active</p>
                    </div>
                </div>   
            </div>
            <div class="mx-6">
            <button class="bg-primary-color my-2 py-1 w-full rounded-sm border border-quartinary-color text-left hover:border-white"> 
                <font-awesome-icon :icon="['far', 'smile']" class="ml-2 mr-4"/> Update your status
            </button></div>
            <ul>
                <li class="dialog-items mb-2">Set yourself as <b>away</b></li>
                <li class="dialog-items -mb-2">Pause notifications</li>
                <span class="border-b border-quartinary-color w-full inline-block"></span>
                <li class="dialog-items mb-2">Profile</li>
                <li class="dialog-items -mb-2">Preferences</li>
                <span class="border-b border-quartinary-color w-full inline-block"></span>
                <li class="dialog-items mt-2" @click="handleSignOut" v-if={isLoggendIn}> Sign out of {{$store.state.organization}}</li>
            </ul>
            
        </div>
        
    </section>
</template>

<script>
    export default{
        data(){
            return{
                profileModal:false,
            }
        },
    }
</script>

<script setup> 
    import {onMounted, ref} from "vue";
    import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
    import {useRouter} from 'vue-router'

    const isLoggedIn = ref(false);
    const router = useRouter();

    let auth;
    onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
        isLoggedIn.value = true;
        } else {
        isLoggedIn.value = false;
        }
        });
    });

    const handleSignOut = () => {
    signOut(auth).then(() =>{
        router.push("/")
    });
    }

    const auths = getAuth();
    const user = auths.currentUser;
    console.log(user)
    if (user !== null) {
      const email = user.email;
    }

</script>