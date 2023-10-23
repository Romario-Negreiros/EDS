import AppCard from "@/components/AppCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

import json from "../../posts.json";

function mixPosts() {
    const posts = [];

    for (let i = 0; i < 5; i++) {
        // posts.push({ ...json["andressa"][i], author: "andressa" });
        posts.push({ ...json["romario"][i], author: "romario" });
        const viniPost = json["vinicius"][i] as any;
        if (viniPost) {
            viniPost["author"] = "vinicius";
            posts.push(viniPost);
        }
        // posts.push({ ...json["vanessa"][i], author: "vanessa" });
    }

    return posts;
}

export default function Home() {
    const posts = mixPosts();

    if (!posts) {
        return (
            <Box
                sx={{
                    height: "calc(100vh - 68px)",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <CircularProgress />
            </Box>
        );
    } else {
        return (
            <Box sx={{ padding: 2 }}>
                <Grid container spacing={2}>
                    {posts.map((post) => (
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <AppCard
                                id={post.id}
                                author={post.author}
                                title={post.title}
                                previewContent={post.paragraphs[0].txt.slice(
                                    0,
                                    150
                                )}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }
}
