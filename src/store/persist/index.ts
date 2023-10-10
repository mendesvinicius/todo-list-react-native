import { PersistOptions, createJSONStorage } from 'zustand/middleware';
import { Store } from '../interfaces';
import { zustandStorage } from './storage';
import R from 'ramda';

const mergeById = R.mergeWithKey((key, left, right) => {
  if (key === 'id') {
    return left;
  }
  return R.uniqBy(R.prop('id'), [...left, ...right]);
});

export const persistConfig: PersistOptions<Store, unknown> = {
  name: 'app-store-persist',
  version: 5,
  storage: createJSONStorage(() => zustandStorage),
  partialize: store => ({
    tasks: store.tasks,
  }),
  merge: (persistedState, currentState) =>
    mergeById(persistedState as object, currentState),
  migrate: persistedState => persistedState as Store,
};
