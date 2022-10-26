import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import {createRouter, createWebHistory} from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faClock,faCircleQuestion,faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import Register from './components/layouts/authentication/RegisterUser.vue'
import Login from './components/layouts/authentication/LoginUser.vue'
import HomePage from './components/layouts/home/HomePage.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuP3WpDTJWk3Z3FNF3mxksna61QKL05RY",
  authDomain: "slack-clone-7067d.firebaseapp.com",
  projectId: "slack-clone-7067d",
  storageBucket: "slack-clone-7067d.appspot.com",
  messagingSenderId: "550466522623",
  appId: "1:550466522623:web:2d3eff93e55e28e7ababca"
};

// Initialize Firebase
initializeApp(firebaseConfig);

library.add(faXmark,faClock, faCircleQuestion, faPaperPlane)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Register },
        { path: '/login', component: Login },
        { path: '/home', component: HomePage }
    ] 
});

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
