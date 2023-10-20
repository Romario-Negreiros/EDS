import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Image from "next/image";

import posts from "../../../../posts.json";

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

export function generateStaticParams() {
    const paths: Path[] = [];

    // posts["andressa"].forEach(post => { paths.push({ author: "andressa", postId: post.id }) })
    posts["romario"].forEach((post) => {
        paths.push({ author: "romario", postId: String(post.id) });
    });
    // posts["vinicius"].forEach(post => { paths.push({ author: "vinicius", postId: post.id }) })
    // posts["vanessa"].forEach(post => { paths.push({ author: "vanessa", postId: post.id }) })

    return paths;
}

// export function getPost(author: Authors, postId: number) {
// return { ...posts[author][postId], author };
// }

export default function Post({ params: { author, postId } }: Props) {
    const post = { ...posts[author][+postId - 1], author };

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
                    {post.author.charAt(0).toUpperCase() + post.author.slice(1)}
                </Typography>
                <Box
                    sx={{ margin: "auto", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "10px", padding: { xs: "10px", md: "15px" } }}
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
                                            bgcolor: "red"
                                        }}
                                    >
                                        <Image
                                            src={p.img}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            alt="Ilustração"
                                        />
                                    </Box>
                                    <Typography variant="subtitle2">
                                        {p.txt}
                                    </Typography>
                                </Box>
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
                    ))}
                </Box>
            </Paper>
        </Box>
    );
}
