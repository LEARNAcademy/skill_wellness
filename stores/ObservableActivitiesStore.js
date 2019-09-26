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
          status: "Status: Available Now",
          howToEnroll: 'You just sign up!',
          platform: {
            description: 'Treehouse',
            avatar: "http://cdn.onlinewebfonts.com/svg/img_501919.png",
          },
          skillLevel:{
            description: 'Beginner Level',
            avatar: "http://cdn.onlinewebfonts.com/svg/img_501919.png",
          },
          outcome:{
            description: 'Your own gratification',
            avatar: "http://cdn.onlinewebfonts.com/svg/img_501919.png",
          },
          cost:{
            description: "$25.00",
            avatar: "http://cdn.onlinewebfonts.com/svg/img_501919.png",
          },
        },
        {
          title: "Example Title2",
          subtitle: "Subtitle2",
          description: "Here is the description of Example2.",
          howToEnroll: 'You just sign up!',
          image: "http://icons.iconarchive.com/icons/iconsmind/outline/512/Coding-icon.png",
          status: "Status: Available Now",
          platform: {
            description: 'Treehouse',
            avatar: "http://cdn.onlinewebfonts.com/svg/img_501919.png",
          },
          skillLevel:{
            description: 'Beginner Level',
            avatar: "http://cdn.onlinewebfonts.com/svg/img_501919.png",
          },
          outcome:{
            description: 'Your own gratification',
            avatar: "http://cdn.onlinewebfonts.com/svg/img_501919.png",
          },
          cost:{
            description: "$25.00",
            avatar: "http://cdn.onlinewebfonts.com/svg/img_501919.png",
          },
        }
      ]
    }, 100)

  }

}

export default new ObservableActivitiesStore()
