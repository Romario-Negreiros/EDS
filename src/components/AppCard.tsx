import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface Props {
    id: number;
    author: string;
    title: string;
    previewContent: string;
    previewImage?: string;
    disableSecondLink?: boolean;
}

export default function AppCard({
    id,
    author,
    title,
    previewContent,
    previewImage,
    disableSecondLink,
}: Props) {
    return (
        <Card sx={{ minHeight: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {previewImage && (
                <CardMedia sx={{ height: "170px" }} image={previewImage} />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {previewContent}...
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">
                    <Link href={`/${author.toLowerCase()}/${id}`}>
                        Ler tudo
                    </Link>
                </Button>
                {!disableSecondLink && (
                    <Button size="small">
                        <Link href={`/${author.toLowerCase()}`}>Mais de {author}</Link>
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
