import './globals.css';

export const metadata = {
    title: 'Blessing Nneka | Website Developer & AI Automation',
    description: 'Blessing Nneka builds responsive, accessible websites and AI workflows with n8n.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
