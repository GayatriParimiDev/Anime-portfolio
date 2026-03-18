import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
    const username = "GayatriParimiDev";

    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=12&sort=updated`, {
            headers: {
                Accept: "application/vnd.github+json",
            },
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            return NextResponse.json(
                { repos: [], error: `GitHub request failed (${res.status})` },
                { status: 200 }
            );
        }

        const repos = (await res.json()) as Array<{
            id: number;
            name: string;
            description: string | null;
            html_url: string;
            homepage: string | null;
            topics?: string[];
            language: string | null;
            updated_at: string;
            fork: boolean;
            archived: boolean;
            private: boolean;
        }>;

        const filtered = repos
            .filter((r) => !r.private && !r.fork && !r.archived)
            .slice(0, 9)
            .map((r) => ({
                id: r.id,
                name: r.name,
                description: r.description,
                html_url: r.html_url,
                homepage: r.homepage,
                topics: Array.isArray(r.topics) ? r.topics : [],
                language: r.language,
                updated_at: r.updated_at,
            }));

        return NextResponse.json({ repos: filtered }, { status: 200 });
    } catch {
        return NextResponse.json({ repos: [], error: "GitHub request failed" }, { status: 200 });
    }
}
