export default function Footer() {
    return (
        <footer className="border-t border-border/50 bg-black/80 text-white backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-foreground font-bold tracking-tight">
                    UNDERGROUND <span className="text-accent">BOUGE</span>
                </div>
                <div className="text-muted-foreground text-sm text-center">
                    © {new Date().getFullYear()} Underground Bouge — Promotion
                    musicale urbaine, Bénin
                </div>
                <a
                    href="https://web.facebook.com/pg/229UB/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-accent transition-colors">
                    Facebook
                </a>
            </div>
        </footer>
    )
}
