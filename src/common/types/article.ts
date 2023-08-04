export interface Article {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: Createdby;
  last_edited_by: Createdby;
  cover: Cover;
  icon?: any;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
  public_url?: any;
}

export interface Properties {
  Author: Author;
  Status: Status2;
  Tags: Tags;
  Slug: Slug;
  Title: Title;
}

export interface Title {
  id: string;
  type: string;
  title: Richtext[];
}

export interface Slug {
  id: string;
  type: string;
  rich_text: Richtext[];
}

export interface Richtext {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Text {
  content: string;
  link?: any;
}

export interface Tags {
  id: string;
  type: string;
  multi_select: Status[];
}

export interface Status2 {
  id: string;
  type: string;
  status: Status;
}

export interface Status {
  id: string;
  name: string;
  color: string;
}

export interface Author {
  id: string;
  type: string;
  people: Person2[];
}

export interface Person2 {
  object: string;
  id: string;
  name: string;
  avatar_url: string;
  type: string;
  person: Person;
}

export interface Person {
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Cover {
  type: string;
  file?: File;
  external?: External;
}

export interface External {
  url: string;
}

export interface File {
  url: string;
  expiry_time: string;
}

export interface Createdby {
  object: string;
  id: string;
}
