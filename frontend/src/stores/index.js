import AuthStore from './auth'
import MessageStore from './message'
import UIStore from './ui'

export default function createRootStore(){

    const messageStore = new MessageStore();
    const authStore = new AuthStore(messageStore);
    const uiStore = new UIStore();

    return {
        authStore,
        messageStore,
        uiStore
    }
}