import { observable,makeObservable } from "mobx";

export class GlobalStore {
  text = "Hello";
  constructor() {
    makeObservable(this,{
      text:observable
    });
  }
}

export const globalStore = new GlobalStore();
