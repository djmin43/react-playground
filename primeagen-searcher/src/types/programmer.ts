import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IProgrammer {
  id: string;
  url: string;
  name: string;
  description: string;
  mainLanguage: string;
  image: IGatsbyImageData | null;
}
