export interface IEvent {
  readonly title:string;
  readonly link:string;
  readonly description:string;
  readonly date:string;
  readonly bullets:string[];
  readonly images?: string[];
  readonly alts: string[];
}