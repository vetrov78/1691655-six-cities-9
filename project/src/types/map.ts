export type Point = {
  title: string,
  lat: number,
  lng: number;
};

export type Points = Point[];

export type City =
  Point &
  {zoom?: number}

