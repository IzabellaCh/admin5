export enum ELiterals {
  Link = 'link',
  Button = 'button',
  Text = 'text',
}

export type TServicePageText = {
  type: 'text' | 'list';
  text: string;
  list?: string[];
};
