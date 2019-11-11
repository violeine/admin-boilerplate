import store from "store";

export const save = (name, value) => {
  if (name === undefined) throw new Error("Cant store value with name undefine");
  return store.set(name, value);
};
export const get = name => {
  return store.get(name);
};

export const remove = name => {
  store.remove(name);
};

export const clearAll = () => {
  store.clearAll();
};

export default {
  save,
  get,
  remove,
  clearAll
};
