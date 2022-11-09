import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import {createStore} from 'vuex';
import {createRouter, createWebHistory} from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark, faAt,faEllipsisVertical,faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faClock,faCircleQuestion,faPaperPlane,faUser,faBuilding,faSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { initializeApp } from "firebase/app";
import Register from './components/layouts/authentication/RegisterUser.vue';
import Login from './components/layouts/authentication/LoginUser.vue';
import HomePage from './components/layouts/home/HomePage.vue';

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


//routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/register', component: Register },
        { path: '/home', component: HomePage }
    ] 
});

//vuex store
const store = createStore({
    
    state() {

        const username = 'Burak Kivrak'
        let userpic = require('./assets/Burak.jpeg');
        let dataChannels = [
            {name:'General', img: ['fas', 'hashtag'], messages: [
                {name: 'Jamel Guiducci', img: require('./assets/Jamel.jpg'), message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: '9:21'},
                {name: 'Derick Fridie', img: require('./assets/Derick.jpg'), message: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.', time: '9:22'},
                {name: 'Chelsie Beight', img: require('./assets/Chelsie.jpg'), message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ', time:'9:23'},
                {name: 'Derick Fridie', img: require('./assets/Derick.jpg'), message: 'sed do consectetur adipiscing.', time: '9:23'},
                {name: 'Derick Fridie', img: require('./assets/Derick.jpg'), message: 'reprehenderit in eiusmod :)', time: '9:28'},
                {name: 'Chelsie Beight', img: require('./assets/Chelsie.jpg'), message:'tempor...', time: '9:30'},
                {name: 'Derick Fridie', img: require('./assets/Derick.jpg'), message: 'reprehenderit in eiusmod :)', time: '9:31'},
                {name: 'Chelsie Beight', img: require('./assets/Chelsie.jpg'), message:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?', time: '9:32'},
                {name: 'Jamel Guiducci', img: require('./assets/Jamel.jpg'), message: 'Lorem ipsum aute irure dolor in reprehenderit', time: '9:36'},
                {name: 'Jamel Guiducci', img: require('./assets/Jamel.jpg'), message: 'in voluptate velit esse cillum ed do consectetur adipiscing', time: '10:24'},
                {name: 'Chelsie Beight', img: require('./assets/Chelsie.jpg'), message:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', time: '10:50'},                
                {name: 'Derick Fridie', img: require('./assets/Derick.jpg'), message: 'Lorem ipsum dolor sit amet!', time: '11:01'},
                {name: 'Jamel Guiducci', img: require('./assets/Jamel.jpg'), message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos', time: '12:36'},
            ]}, 
            {name:'Random', img: ['fas', 'hashtag'], messages :[
                {name: 'Chelsie Beight', img: require('./assets/Chelsie.jpg'), message:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', time: '10:50'},                
                {name: 'Derick Fridie', img: require('./assets/Derick.jpg'), message: 'Lorem ipsum dolor sit amet!', time: '11:01'},
            ]}, 
            {name:'Help', img: ['fas', 'hashtag'], messages :[
                
            ]}, 
            {name:'HSL', img: ['fas', 'hashtag'], messages :[
                {name: 'Jamel Guiducci', img: require('./assets/Jamel.jpg'), message: 'in voluptate velit esse cillum ed do consectetur adipiscing', time: '10:24'},
                {name: 'Chelsie Beight', img: require('./assets/Chelsie.jpg'), message:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', time: '10:50'},                
                {name: 'Derick Fridie', img: require('./assets/Derick.jpg'), message: 'Lorem ipsum dolor sit amet!', time: '11:01'},
                {name: 'Jamel Guiducci', img: require('./assets/Jamel.jpg'), message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos', time: '12:36'},
            ]}, 
            {name:'Ikfram', img: ['fas', 'hashtag'], messages :[
                {name: 'Derick Fridie', img: require('./assets/Derick.jpg'), message: 'reprehenderit in eiusmod :)', time: '9:28'},
            ]}]

        let dataDMs = [
            {name:'Slackbot', img: require('./assets/slackbot.png'), messages: [
                {name: 'Slackbot', img:require('./assets/slackbot.png'), message: 'Lorem ipsum dolor sit amet'}
            ]},
            {name: username, img: userpic, messages: [
            
            ]},
            {name:'Jamel Guiducci', img:require('./assets/Jamel.jpg'), messages: [
                {name: 'Jamel Guiducci', img: require('./assets/Jamel.jpg'), message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: '9:21'},
                {name: username, img: userpic, message: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.', time: '9:22'},
                {name: 'Jamel Guiducci', img: require('./assets/Jamel.jpg'), message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', time: '9:23'},
            ]},
            {name:'Derick Fridie', img:require('./assets/Derick.jpg'), messages: [
                {name: 'Derick Fridie', img: require('./assets/Derick.jpg'), message:'tempor...', time: '9:30'},
            ]},
            {name:'Chelsie Beight', img:require('./assets/Chelsie.jpg'), messages: [
                {name: 'Chelsie Beight', img: require('./assets/Chelsie.jpg'), message:'do eiusmod tempor incididunt', time: '10:30'},
                {name: 'Chelsie Beight', img: require('./assets/Chelsie.jpg'), message:'tempor...', time: '10:38'},
                {name: username, img: userpic, message: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.', time: '11:22'},
                {name: 'Chelsie Beight', img: require('./assets/Chelsie.jpg'), message:'dolor sit amet', time: '12:20'},

            ]},
        ]
        return{
            channels: dataChannels,
            dms: dataDMs,
            channel: 'General',
            messages: dataChannels[0].messages, 
            username: username,
            userpic: userpic,
            organization: 'Hogeschool Leiden'
        }
    }
});

//fontAwesome icons
library.add(faXmark,faClock, faCircleQuestion, faPaperPlane, faUser, faAt, faBuilding, faEllipsisVertical, faHashtag, faSmile);

// create app
const app = createApp(App);
app
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
