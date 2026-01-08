export const metadata = {
    title: 'Summit Drilling CMS',
    description: 'Content management for Summit Drilling website',
}

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body style={{ margin: 0 }}>{children}</body>
        </html>
    )
}
