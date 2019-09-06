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
          title: "example",
          subtitle: "sub-example",
          description: "blah blah",
          image: "http://www.iconninja.com/files/463/382/476/development-code-curly-brackets-programming-coding-website-icon.png",
          status: "available"
        },
        {
          title: "example2",
          subtitle: "sub-example2",
          description: "blah blah",
          image: "http://www.iconninja.com/files/463/382/476/development-code-curly-brackets-programming-coding-website-icon.png",
          status: "available"
        }
      ]
    }, 100)

  }

}

export default new ObservableActivitiesStore()
