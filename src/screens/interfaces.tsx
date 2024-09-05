export interface ProjectsInterface {
    id : number,
    title : string,
    subtitle : string,
    tags : string[],
    coverImage : string,
    description : string,
    images : string[]
  }
  

export interface ProjectItem {
    type: "image" | "video" | "pdf" | "text";
    src: string;
    title: string;
    description: string;
  }