import axios from "axios";

export interface Project {
  name: string;
  url: string;
  stars: number;
}

export async function getProjects(url:string): Promise<Project[]> {
//   const apiUrl = "https://api.github.com/users/zhangfisher/repos";

 
    const response = await axios.get(url);
    const projects: Project[] = response.data.map((repo: any) => ({
      name: repo.name,
      url: repo.html_url,
      stars: repo.stargazers_count,
    }));
    return projects;
 
}