export class VisitedPlaceSummary {
  date: string;
  place: string;
  count: number;

  constructor(visitedPlace: any) {
    this.date = visitedPlace.date;
    this.place = visitedPlace.place;
    this.count = 1;
  }
}
