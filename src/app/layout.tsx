import AppBar from "@/components/AppBar";

import "./global.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body>
                <AppBar />
                {children}
            </body>
        </html>
    );
}
