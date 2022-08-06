export interface IProgrammer {
  id: string;
  url: string;
  name: string;
  description: string;
  mainLanguage: string;
  image: {
    file: {
      url: string;
    };
  };
}
