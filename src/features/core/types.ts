export type PayloadUpdateScheme = "name" | "scheme" | "svg";

export type DataPoint = {
  ts: Date;
};

export type Tag = {
  id: string;
  name: string;
};

export type Axis = {
  id: string;
  name: string;
  tags: Tag[];
};

export type Axes = {
  [key: string]: Axis;
};
