import AppCard from "@/components/AppCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";

import json from "../../posts.json";

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

function mixPosts() {
    const posts: any[] = [];

    for (let i = 0; i < 12; i++) {
        const euPost = json["romario"].posts[i] as any;
        if (euPost) {
            euPost["author"] = "romario";
            posts.push(euPost);
        }
        const viniPost = json["vinicius"].posts[i] as any;
        if (viniPost) {
            viniPost["author"] = "vinicius";
            posts.push(viniPost);
        }
        const vanessaPost = json["vanessa"].posts[i] as any;
        if (vanessaPost) {
            vanessaPost["author"] = "vanessa";
            posts.push(vanessaPost);
        }
        const andressaPost = json["andressa"].posts[i] as any;
        if (andressaPost) {
            andressaPost["author"] = "andressa";
            posts.push(andressaPost);
        }
    }

    posts.forEach((post, index) => {
        if (post.paragraphs.find((p: any) => p.img !== undefined)) {
            const [a] = posts.splice(index, 1);
            posts.unshift(a);
        }
    });

    posts.forEach((post, index) => {
        if (index === 5 || index === 4 || index === 6 || index === 3) {
            const [a] = posts.splice(index, 1);
            posts.unshift(a);
        }
    })

    return posts;
}

export default function Home() {
    const posts = mixPosts() as Post[];

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
            <Box>
                <Grid container spacing={2} sx={{ padding: 2 }}>
                    {posts.map((post) => (
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <AppCard
                                id={post.id}
                                author={post.author}
                                title={post.title}
                                previewContent={
                                    post.paragraphs[0].txt
                                        ? (post.paragraphs[0].txt.slice(
                                              0,
                                              150
                                          ) as string)
                                        : (post.paragraphs[1].txt?.slice(
                                              0,
                                              150
                                          ) as string)
                                }
                                previewImage={
                                    post.paragraphs.find(
                                        (p) => p.img !== undefined
                                    )?.img
                                }
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }
}
