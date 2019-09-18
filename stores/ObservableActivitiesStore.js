import { observable } from "mobx";

class ObservableActivitiesStore{
  @observable activities = [];
  addActivity(activity){
    this.activities.push(activity)
  }
  getActivities(){
    setTimeout(() => {
      this.activities = [
        {
          title: "Example Title1",
          subtitle: "Subtitle1",
          description: "Here is the description of Example1.",
          image: "http://cdn.onlinewebfonts.com/svg/img_501919.png",
          status: "Status: Available Now"
        },
        {
          title: "Example Title2",
          subtitle: "Subtitle2",
          description: "Here is the description of Example2.",
          image: "http://icons.iconarchive.com/icons/iconsmind/outline/512/Coding-icon.png",
          status: "Status: Available Now"
        }
      ]
    }, 100)

  }

}

export default new ObservableActivitiesStore()
