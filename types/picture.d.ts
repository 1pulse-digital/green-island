export interface Picture {
  alternativeText: string | undefined;
  formats: Formats;
  url: string;
}

export interface Formats {
  large?: Format;
  medium?: Format;
  small?: Format;
  thumbnail?: Format;
}

export interface Format {
  ext: string;
  hash: string;
  height: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  url: string;
  width: number;
}
