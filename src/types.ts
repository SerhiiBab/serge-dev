export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  previewUrl: string;
  imageUrl: string;
}

export interface Technology {
  name: string; // 0-100
}
