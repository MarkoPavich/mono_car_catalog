import AuthStore from './auth';
import MessageStore from './message';
import UIStore from './ui';
import FormsStore from './forms';
import VehiclesStore from './vehhicles';

export default function createRootStore() {
  const messageStore = new MessageStore();
  const authStore = new AuthStore(messageStore);
  const uiStore = new UIStore();
  const formsStore = new FormsStore();
  const vehiclesStore = new VehiclesStore();

  return {
    authStore,
    messageStore,
    uiStore,
    formsStore,
    vehiclesStore,
  };
}
