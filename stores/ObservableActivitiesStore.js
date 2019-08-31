import { observable } from "mobx";

class ObservableActivitiesStore{
  @observable activities = [];
  addActivity(activity){
    this.activities.push(activity)
  }
}

export default new ObservableActivitiesStore()
