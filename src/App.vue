<template>
  <router-view />
  <div class="notifications">
    <div class="notification" v-for="chat in chats" v-bind:key="chat.id">
      <MessageView :chat="chat" :unreadP="false" @click="goToChat(chat.id)" ></MessageView>
    </div>
  </div>  
</template>

<script>
import SockJS from 'sockjs-client'
import { Stomp } from '@stomp/stompjs'

import ChatService from './services/ChatService'
import UserService from './services/UserService'

import MessageView from './components/MessageView.vue'

let stompClient = null

export default {
  data() {
    return {
      chats: [],
      me: {},
    };
  },
  components: { MessageView },
  name: "App",
  methods: {
    connect(chat, vm) {
      stompClient.subscribe("/topic/" + chat.id, function (message) {
        let messageData = JSON.parse(message.body);
        let cloneChat = JSON.parse(JSON.stringify({...chat}));
        cloneChat.messages.push(messageData)
        if (messageData.action === "ON_CREATE" && messageData.user.login !== vm.me.login 
            && !vm.$route.path.startsWith("/chat/"+cloneChat.id)) {
          vm.chats.push(cloneChat)
        }
      });
    },
    hide() {
      let vm = this;
      if (this.chats.length > 0) {
        setTimeout(function () {
          vm.chats.shift()
        }, 5000)
      }
    },
    goToChat(chatId){
      this.chats = []
      this.$router.push("/chat/"+chatId)
    },
  },
  
  mounted() {
    const vm = this; // сохраняем ссылку на объект Vue
    UserService.me().then((response) => {
      this.me = response.data
    })
    ChatService.getChatsByUser().then((response) => {
      let chats = response.data;
      var socket = new SockJS("http://localhost:9000/gs-guide-websocket");
      stompClient = Stomp.over(socket);
      stompClient.debug = f => f;
      stompClient.connect({}, function () {
        chats.forEach(chat => {
          vm.connect(chat, vm);
        });
      });
    });
  },

  watch: {
    'chats': {
      handler() {
        this.hide()
      },
      deep: true
    }
  },
  
}
</script>

<style>
#app {
  font-family: Georgia, serif;
  text-align: center;
  color: black;
  font-size: 22pt;
}

body {
  background-image: url('assets/background.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

h4 {
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #D276FD;
  margin: 40px 0px 30px 0px;
}

a {
  text-decoration: none;
  color: black;
  align-self: start;
}

a:hover {
  color: #D276FD;
}

.notifications {
  position: fixed;
  bottom: 50px;
  left: 16px;
  z-index: 10;
}
.notification{
  cursor: pointer;
  border: 1px solid;
  border-color: #D276FD;
  margin-top: 10px;
}
</style>
