import { GITHUB_USERNAME } from "@/consts";

export type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
};

type GitHubRepo = Repo & {
  fork: boolean;
  archived: boolean;
  updated_at: string;
};

/**
 * Fetches the user's public repositories at build time and returns the most
 * notable ones (non-fork, non-archived) sorted by stars. Fails soft: any
 * network/API error returns an empty list so the build never breaks.
 */
export async function getRepos(limit = 6): Promise<Repo[]> {
  if (!GITHUB_USERNAME) return [];

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": GITHUB_USERNAME,
        },
      },
    );

    if (!res.ok) {
      console.warn(
        `[github] Could not fetch repos for "${GITHUB_USERNAME}" (${res.status} ${res.statusText})`,
      );
      return [];
    }

    const data = (await res.json()) as GitHubRepo[];
    if (!Array.isArray(data)) return [];

    return data
      .filter((repo) => !repo.fork && !repo.archived)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf(),
      )
      .slice(0, limit)
      .map(({ name, description, html_url, homepage, stargazers_count, language }) => ({
        name,
        description,
        html_url,
        homepage,
        stargazers_count,
        language,
      }));
  } catch (err) {
    console.warn(`[github] Failed to fetch repos for "${GITHUB_USERNAME}":`, err);
    return [];
  }
}
