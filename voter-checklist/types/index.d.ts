export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  keywords: Array<string>;
  url: {
    base: string;
    author: string;
  };
  links: {
    github: string;
  };
  //   ogImage: string;
};

export type Voter = {
  id: number;
  membership_no: string;
  tower_no: string;
  flat_no: string;
  member_name: string;
  contact_no: string;
  remarks: string;
  status: string;
};
