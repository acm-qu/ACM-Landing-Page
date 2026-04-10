export interface ITeamMember {
  readonly name: string;
  readonly role: string;
  readonly image: string;
  readonly borderColor: string;
};

export interface ITeamMemberCardProps extends ITeamMember {}