export class SocialInteractionSummary {
  date: string;
  name: string;
  count: number;

  constructor(socialInteraction: any) {
    this.date = socialInteraction.date;
    this.name = socialInteraction.name;
    this.count = 1;
  }
}
