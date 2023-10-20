import AppCard from "@/components/AppCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import json from "../../../posts.json";

type Authors = "andressa" | "romario" | "vinicius" | "vanessa";

interface Props {
    params: {
        author: Authors;
    };
}

export async function generateStaticParams() {
    return [
        {
            author: "andressa",
        },
        {
            author: "romario",
        },
        {
            author: "vinicius",
        },
        {
            author: "vanessa",
        },
    ];
}

// export function getAuthorPosts(author: Authors) {
    // return posts[author];
// }

export default function Author({ params: { author } }: Props) {
    const posts = json[author];

    return (
        <Box sx={{ padding: 2 }}>
            <Typography
                variant="h4"
                component="h1"
            >
                {author.charAt(0).toUpperCase() + author.slice(1)}
            </Typography>
            <Grid container spacing={2}>
                {posts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <AppCard
                            id={post.id}
                            author={author}
                            title={post.title}
                            previewContent={post.paragraphs[0].txt?.slice(0, 150)}
                            disableSecondLink
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
