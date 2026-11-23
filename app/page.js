import Image from 'next/image';

const portrait = '/blessing-nneka.jpg';

export default function Home() {
    return (
        <>
            <nav className="navbar" aria-label="Main navigation">
                <a href="#home" className="logo">Blessing bibi Nneka<span>.</span></a>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact" className="contact-link">Contact</a></li>
                </ul>
            </nav>

            <main>
                <section id="home" className="hero" aria-labelledby="hero-heading">
                    <div className="hero-inner">
                        <div>
                            <h1 id="hero-heading">Blessing Nneka</h1>
                            <p className="hero-role">Website Developer &amp; AI Automation Builder</p>
                            <p id="about" className="hero-bio">
                                I build responsive, accessible websites that make it easy for people to find what they need.
                                I also build AI automations with n8n, connecting apps and automating repetitive tasks.
                                My workflows can route enquiries, summarize incoming information, and keep data in sync across the tools you use every day.
                            </p>
                            <div className="hero-actions" id="contact">
                                <a className="hero-download" href={portrait} download>Download Photo</a>
                                <a className="hero-social" href="https://github.com/" aria-label="GitHub">
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                        <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.49c-2.22.48-2.69-.94-2.69-.94-.36-.92-.89-1.16-.89-1.16-.73-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.77-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.22 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" />
                                    </svg>
                                </a>
                                <a className="hero-social" href="https://www.linkedin.com/" aria-label="LinkedIn"><span aria-hidden="true">in</span></a>
                                <a className="hero-social" href="https://x.com/" aria-label="Twitter (X)"><span aria-hidden="true">X</span></a>
                                <a className="hero-social" href="https://www.youtube.com/" aria-label="YouTube"><span aria-hidden="true">&#9654;</span></a>
                            </div>
                        </div>
                        <Image className="hero-portrait" src={portrait} width={673} height={673} alt="Blessing Nneka wearing a pink sweater" unoptimized />
                    </div>
                </section>

                <section id="services" className="services" aria-labelledby="services-heading">
                    <h2 id="services-heading">What I build</h2>
                    <div className="service-grid">
                        <article>
                            <h3>Website development</h3>
                            <p>Responsive, accessible websites with clear navigation and layouts that work across screen sizes.</p>
                        </article>
                        <article>
                            <h3>workflow automation using n8n etc</h3>
                            <p>Connected workflows that move data between forms, spreadsheets, and other tools and trigger follow-up actions.</p>
                        </article>
                        <article>
                            <h3>AI integrations</h3>
                            <p>AI tools that categorize requests, summarize information, and draft replies for human review.</p>
                        </article>
                    </div>
                </section>
            </main>
            <footer className="site-footer">
                <div className="footer-inner">
                    <p>© {new Date().getFullYear()} Blessing Nneka</p>
                    <nav aria-label="Footer navigation">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    );
}

