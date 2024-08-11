import { Talk } from "talkjs";

await Talk.ready;

const me = new Talk.User("sample_user_alice");
const session = new Talk.Session({ appId: "tDxnXZSo", me });

const chatbox = session.createChatbox();
chatbox.select("sample_conversation");
chatbox.mount(document.getElementById("talkjs-container"));