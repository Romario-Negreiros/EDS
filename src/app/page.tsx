import AppCard from "@/components/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Home() {
    return (
        <Box sx={{ padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <AppCard
                        author="Romario"
                        title="Lorem ipsum dolor sit amet"
                        previewContent="
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur recusandae debitis culpa dicta vitae nulla consectetur inventore sit corrupti quaerat reiciendis suscipit, laborum natus dolores veniam officia animi obcaecati placeat excepturi soluta, fuga distinctio laboriosam ducimus! Amet ipsam illo possimus placeat soluta quo voluptatibus reprehenderit repellat enim itaque accusamus officia, autem debitis quidem quas, exercitationem rerum ullam. Neque, nesciunt ab?
"
                        id={1}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <AppCard
                        author="Romario"
                        title="Lorem ipsum dolor sit amet"
                        previewContent="
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur recusandae debitis culpa dicta vitae nulla consectetur inventore sit corrupti quaerat reiciendis suscipit, laborum natus dolores veniam officia animi obcaecati placeat excepturi soluta, fuga distinctio laboriosam ducimus! Amet ipsam illo possimus placeat soluta quo voluptatibus reprehenderit repellat enim itaque accusamus officia, autem debitis quidem quas, exercitationem rerum ullam. Neque, nesciunt ab?
"
                        id={2}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {" "}
                    <AppCard
                        author="Romario"
                        title="Lorem ipsum dolor sit amet"
                        previewContent="
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur recusandae debitis culpa dicta vitae nulla consectetur inventore sit corrupti quaerat reiciendis suscipit, laborum natus dolores veniam officia animi obcaecati placeat excepturi soluta, fuga distinctio laboriosam ducimus! Amet ipsam illo possimus placeat soluta quo voluptatibus reprehenderit repellat enim itaque accusamus officia, autem debitis quidem quas, exercitationem rerum ullam. Neque, nesciunt ab?
"
                        id={3}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {" "}
                    <AppCard
                        author="Romario"
                        title="Lorem ipsum dolor sit amet"
                        previewContent="
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur recusandae debitis culpa dicta vitae nulla consectetur inventore sit corrupti quaerat reiciendis suscipit, laborum natus dolores veniam officia animi obcaecati placeat excepturi soluta, fuga distinctio laboriosam ducimus! Amet ipsam illo possimus placeat soluta quo voluptatibus reprehenderit repellat enim itaque accusamus officia, autem debitis quidem quas, exercitationem rerum ullam. Neque, nesciunt ab?
"
                        id={4}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
