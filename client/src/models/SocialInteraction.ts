export class SocialInteraction {
  _id: string;
  name: string;
  date: Date;
  hours: number;
  isSocialDistancing: boolean;

  constructor(socialInteraction: any) {
    this._id = socialInteraction._id;
    this.name = socialInteraction.name;
    this.date = socialInteraction.date;
    this.hours = socialInteraction.hours;
    this.isSocialDistancing = socialInteraction.isSocialDistancing;
  }
}
