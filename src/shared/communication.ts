export type FullThingsResponse = {name: string; content: string; children: string[]}[];

export type FullStateResponse = {
  things: {
    name: string;
    content: string;
    children: {name: string; child: string; tag?: string}[];
  }[];
};

export type ThingData = {content: string; children: string[]};
