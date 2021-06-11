/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import {
    observable,
    action,
    makeObservable,
    computed
} from 'mobx';

class Store {

    constructor() {
        makeObservable(this)
    }
    @observable clickTime = 0;

    @computed get doneTime(){
        return this.clickTime+10
    }


    @action
    addClickTime() {

        this.clickTime++;
    }

    @action
    subClickTime() {
        this.clickTime--;
    }


}
const home = new Store()
export default home;