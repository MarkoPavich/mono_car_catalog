import AuthStore from './auth'
import MessageStore from './message'

export default function createRootStore(){

    const messageStore = new MessageStore();
    const authStore = new AuthStore(messageStore);

    return {
        authStore,
        messageStore
    }
}