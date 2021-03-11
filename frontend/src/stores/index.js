import AuthStore from './auth';
import MessageStore from './message';
import UIStore from './ui';
import FormsStore from './forms';

export default function createRootStore() {
  const messageStore = new MessageStore();
  const authStore = new AuthStore(messageStore);
  const uiStore = new UIStore();
  const formsStore = new FormsStore();

  return {
    authStore,
    messageStore,
    uiStore,
    formsStore,
  };
}
