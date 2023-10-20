import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Grupo() {
    return (
        <Box sx={{ padding: 2, display: "grid", placeItems: "center", minHeight: "calc(100vh - 68.5px)" }}>
            <Paper
                elevation={4}
                sx={{ width: "fit-content", padding: "20px", margin: "auto", display: "flex", gap: "10px", flexDirection: "column" }}
            >
                <Box>
                    <Typography variant="h6">Andressa Carvalho</Typography>
                    <Link href="mailto"><Typography variant="body2">c.andressa@aluno.ufabc.edu.br</Typography></Link>
                </Box>
                <Box>
                    <Typography variant="h6">Romario Negreiros Baldarenas Silva</Typography>
                    <Link href="mailto"><Typography variant="body2">romario.silva@aluno.ufabc.edu.br</Typography></Link>
                </Box>
                <Box>
                    <Typography variant="h6">Vinícius Perez da Silva</Typography>
                    <Link href="mailto"><Typography variant="body2">vinicius.perez@aluno.ufabc.edu.br</Typography></Link>
                </Box>
                <Box>
                    <Typography variant="h6">Vanessa Vitoria da Silva</Typography>
                    <Link href="mailto"><Typography variant="body2">vanessa.vitoria@aluno.ufabc.edu.br</Typography></Link>
                </Box>
            </Paper>
        </Box>
    );
}
