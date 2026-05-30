import { PROJECTS, type Project } from "@/consts";
import { getRepos } from "@/lib/github";

/**
 * Returns the full list of projects to display. Uses the curated PROJECTS list
 * from consts.ts when present, otherwise falls back to auto-pulling public
 * repos from GitHub at build time.
 */
export async function getProjects(): Promise<Project[]> {
  if (PROJECTS.length) return PROJECTS;

  return (await getRepos(12)).map((repo) => ({
    name: repo.name,
    description: repo.description ?? "",
    url: repo.html_url,
    homepage: repo.homepage ?? undefined,
    stars: repo.stargazers_count,
    language: repo.language ?? "code",
  }));
}
