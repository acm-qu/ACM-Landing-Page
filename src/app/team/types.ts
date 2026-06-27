export interface ITeamMember {
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly borderColor: string;
  readonly quote?: string;
};

export interface ITeamMemberCardProps extends ITeamMember {
  animKey: string;
}