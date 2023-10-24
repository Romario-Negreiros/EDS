import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Image from "next/image";

import json from "../../../../posts.json";
import Link from "next/link";

type Authors = "andressa" | "romario" | "vinicius" | "vanessa";

interface Props {
    params: {
        author: Authors;
        postId: string;
    };
}

interface Path {
    author: Authors;
    postId: string;
}

interface Post {
    id: number;
    author: string;
    title: string;
    paragraphs: {
        title?: string;
        img?: string;
        link?: {
            url: string;
            txt: string;
        };
        txt: string;
        txt2?: string;
    }[];
}

export function generateStaticParams() {
    const paths: Path[] = [];

    // json["andressa"].forEach(post => { paths.push({ author: "andressa", postId: post.id }) })
    json["romario"].posts.forEach((post) => {
        paths.push({ author: "romario", postId: String(post.id) });
    });
    json["vinicius"].posts.forEach(post => { paths.push({ author: "vinicius", postId: String(post.id) }) })
    json["vanessa"].posts.forEach(post => { paths.push({ author: "vanessa", postId: String(post.id) }) })

    return paths;
}

// export function getPost(author: Authors, postId: number) {
// return { ...posts[author][postId], author };
// }

export default function Post({ params: { author, postId } }: Props) {
    const post = { ...json[author].posts[+postId - 1], author: json[author].fullName } as Post;

    return (
        <Box sx={{ padding: 2 }}>
            <Paper
                elevation={4}
                sx={{
                    width: "fit-content",
                    padding: { xs: 0, md: 5 },
                    margin: "auto",
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        margin: "auto",
                        textAlign: "center",
                        maxWidth: "600px",
                    }}
                >
                    {post.title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    component="p"
                    sx={{ textAlign: "center" }}
                >
                    Autor:{" "}
                    {post.author}
                </Typography>
                <Box
                    sx={{
                        margin: "auto",
                        maxWidth: "600px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        padding: { xs: "10px", md: "15px" },
                    }}
                >
                    {post.paragraphs.map((p, i) => (
                        <Box key={i} sx={{ width: "100%" }}>
                            {p.img ? (
                                <Box sx={{ textAlign: "center" }}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            height: "300px",
                                        }}
                                    >
                                        <Image
                                            src={p.img}
                                            fill
                                            style={{ objectFit: "contain", margin: "auto" }}
                                            alt="Ilustração"
                                        />
                                    </Box>
                                    <Typography variant="subtitle2">
                                        {p.txt}
                                    </Typography>
                                </Box>
                            ) : (
                                <Box>
                                    {p.title && (
                                        <Typography variant="h6">
                                            {p.title}
                                        </Typography>
                                    )}
                                    {p.link ? (
                                        <>
                                            <Typography
                                                variant="body2"
                                                sx={{ textIndent: "10px" }}
                                            >
                                                {p.txt}
                                                <Link href={p.link.url} target="_blank">{p.link.txt}</Link>
                                                {p.txt2}
                                            </Typography>
                                        </>
                                    ) : (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                textIndent: "10px",
                                            }}
                                        >
                                            {p.txt}
                                        </Typography>
                                    )}
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            </Paper>
        </Box>
    );
}
