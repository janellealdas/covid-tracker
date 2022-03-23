export class VisitedPlace {
  _id: string;
  place: string;
  date: Date;
  hours: number;
  isCrowded: boolean;

  constructor(visitedPlace: any) {
    this._id = visitedPlace._id;
    this.place = visitedPlace.place;
    this.date = visitedPlace.date;
    this.hours = visitedPlace.hours;
    this.isCrowded = visitedPlace.isCrowded;
  }
}
