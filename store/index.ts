import { Store } from 'vuex';
import { initialiseStores } from '@/plugins/storeAccessor';

const initializer = (store: Store<any>): void => initialiseStores(store);

export const plugins = [initializer];
export * from '~/plugins/storeAccessor';
