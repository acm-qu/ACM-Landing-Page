export interface IProject {
  readonly name:string;
  readonly description:string;
  /** Card image, served from /public/projects/<project-name>.webp */
  readonly image:string;
  /** Live link — internal routes start with "/" and use the router */
  readonly link:string;
  readonly repo:string;
}
