import { SafeImage } from "@/components/SafeImage";

// ... (keep blog_content and other definitions until the component start)

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blog_content[slug as keyof typeof blog_content];

    if (!post) return <div className="min-h-screen bg-black flex items-center justify-center text-white font-black uppercase tracking-widest">Protocol Not Found</div>;

    return (
        <div className="min-h-screen bg-[#050505] pt-32 pb-20 selection:bg-gold/30">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Back Link */}
                <Link href="/blogs" className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-gold transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Return to Nexus
                </Link>

                {/* Hero Header */}
                <header className="mb-20">
                    <div className="flex items-center gap-4 text-gold text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                        <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 flex items-center gap-2">
                            <Shield className="w-3 h-3" /> Authorized Briefing
                        </span>
                        <span>{post.category} Sector</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85] mb-12">
                        {post.title}
                    </h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/5">
                        <div className="space-y-1">
                            <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Liaison</div>
                            <div className="text-xs text-white font-black uppercase">{post.author}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Timestamp</div>
                            <div className="text-xs text-white font-black uppercase">{post.date}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Analysis Duration</div>
                            <div className="text-xs text-white font-black uppercase">{post.readTime}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Clearance</div>
                            <div className="text-xs text-gold font-black uppercase">Level 4 Secure</div>
                        </div>
                    </div>
                </header>

                {/* Main Image with Technical Overlay */}
                <div className="relative aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/5 mb-24 group shadow-2xl">
                    <SafeImage src={post.image} alt={post.title} className="w-full h-full group-hover:scale-105 transition-transform duration-[2s]" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* UI Decoration */}
                    <div className="absolute top-10 left-10 p-4 border-l border-t border-gold/30 rounded-tl-3xl opacity-50">
                        <div className="text-[8px] text-gold font-black uppercase tracking-[0.4em]">Visual Identification</div>
                        <div className="text-[10px] text-white/50 font-mono">ID_{post.slug.toUpperCase()}</div>
                    </div>
                </div>

                {/* Content Matrix */}
                <div className="grid lg:grid-cols-12 gap-20">
                    <article className="lg:col-span-8">
                        <div className="prose prose-invert prose-zinc max-w-none 
                            prose-h2:text-4xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tighter prose-h2:italic prose-h2:text-white prose-h2:mb-10 prose-h2:mt-20
                            prose-h3:text-xl prose-h3:font-bold prose-h3:text-gold prose-h3:uppercase prose-h3:tracking-widest prose-h3:mb-6 prose-h3:mt-12
                            prose-p:text-zinc-400 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8
                            prose-strong:text-white prose-strong:font-bold
                            prose-li:text-zinc-400 prose-li:text-lg
                            prose-ul:list-none prose-ul:pl-0
                        "
                            dangerouslySetInnerHTML={{ __html: post.content }} />
                    </article>

                    {/* Right: Technical Sidebar */}
                    <aside className="lg:col-span-4 space-y-10">
                        <div className="p-10 rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 sticky top-32 space-y-10">
                            <div>
                                <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.4em] text-[10px] mb-8 border-b border-white/5 pb-4">
                                    <List className="w-4 h-4 text-gold" /> Briefing Nodes
                                </h4>
                                <ul className="space-y-4">
                                    {post.toc.map(item => (
                                        <li key={item.id}>
                                            <Link href={`#${item.id}`} className="text-xs font-black uppercase tracking-widest text-zinc-600 hover:text-gold transition-all block group flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 rounded-[2.5rem] bg-gold/5 border border-gold/10 relative overflow-hidden group">
                                <Sparkles className="absolute -right-4 -top-4 w-24 h-24 text-gold/5 rotate-12 transition-transform group-hover:scale-120" />
                                <h5 className="flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                                    <Sparkles className="w-4 h-4" /> Operational Asset
                                </h5>
                                <p className="text-[11px] text-zinc-500 mb-6 font-bold uppercase tracking-widest leading-relaxed">Authorize your NileVista Card to unlock the private benchmarks discussed in this briefing.</p>
                                <Link href="/card" className="block w-full py-5 bg-gold text-black text-center rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl">Get Authorized</Link>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em]">Environmental Status</h4>
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-white font-black uppercase tracking-widest text-[10px]">Zone: Alpha Secure</span>
                                    </div>
                                    <div className="text-[10px] text-zinc-600 font-mono">0.4ms</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
<th className="p-8 text-gold uppercase text-[10px] font-black tracking-[0.4em]">NileVista Auth</th>
                        </tr >
                    </thead >
    <tbody className="text-sm">
        <tr className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
            <td className="p-8 text-white font-black uppercase tracking-widest text-xs">Executive Airport Transit</td>
            <td className="p-8 text-zinc-600 line-through font-bold">$120</td>
            <td className="p-8 text-gold font-black bg-gold/5">$45 (Auth)</td>
        </tr>
        <tr className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
            <td className="p-8 text-white font-black uppercase tracking-widest text-xs">Private Guide (Luxor)</td>
            <td className="p-8 text-zinc-600 line-through font-bold">$250</td>
            <td className="p-8 text-gold font-black bg-gold/5">$80 (Auth)</td>
        </tr>
    </tbody>
                </table >
            </div >
    `,
        toc: [
            { id: "asymmetry", label: "I. Information Asymmetry" },
            { id: "benchmarks", label: "II. Authorized Benchmarks" }
        ]
    },
    "safe-coridors-greater-cairo": {
        title: "Safe Corridors: Mapping Greater Cairo's Green Zones",
        date: "Jan 18, 2026",
        author: "Liaison Office",
        authorRole: "Security Operations",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=1200",
        content: `
    < div class="blog-section mb-16" >
        <p className="lead border-l-4 border-gold pl-8 italic mb-12 text-2xl text-white/90">"Cairo is a city of layers. Our AI architects the layer where luxury meets absolute security."</p>
            </div >
            
            <div class="blog-section mb-16">
                <h2 id="zones" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">I. Defining the Green Zone</h2>
                <p className="mb-8 text-zinc-400 leading-relaxed">We utilize satellite telemetry and local intelligence to map Cairo into dynamic zones. <strong>Green Zones</strong> are verified for low friction, high infrastructure integrity, and rapid liaison response capacity.</p>
            </div>
            
            <div class="blog-section mb-16">
                <h2 id="routing" class="text-3xl font-black uppercase tracking-tighter text-white mb-8">II. Dynamic Routing Protocols</h2>
                <p className="mb-8 text-zinc-400 leading-relaxed">Our AI analyzes traffic density, event signals, and urban friction points in real-time to generate paths that allow you to reach any hub in Cairo without the standard urban fatigue.</p>
            </div>
`,
        toc: [
            { id: "zones", label: "I. Defining Green Zones" },
            { id: "routing", label: "II. Dynamic Routing" }
        ]
    }
};

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blog_content[slug as keyof typeof blog_content] || blog_content["sovereign-travel-egypt-2026"];

    return (
        <div className="min-h-screen bg-black pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <Link href="/blogs" className="inline-flex items-center gap-2 text-zinc-500 hover:text-gold transition-colors font-black uppercase tracking-[0.4em] text-[10px] mb-16 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Briefings
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    {/* Left: Article */}
                    <article className="lg:col-span-8 space-y-16">
                        <div className="space-y-12">
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                                <div className="flex items-center gap-4 text-[10px] font-black text-gold uppercase tracking-[0.5em] mb-4">
                                    <div className="w-10 h-px bg-gold/30" />
                                    Authorized Intelligence
                                </div>
                                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic">
                                    {post.title}
                                </h1>
                                <p className="text-zinc-500 text-xl font-medium max-w-2xl leading-relaxed italic">
                                    Analytical briefing regarding the operational landscape of Egyptian transit in the 2026 sector.
                                </p>
                                <div className="flex flex-wrap items-center gap-10 text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] pt-8 border-t border-white/5">
                                    <span className="flex items-center gap-3"><Calendar className="w-4 h-4 text-gold/50" /> {post.date}</span>
                                    <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-gold/50" /> {post.readTime}</span>
                                    <div className="flex items-center gap-4 ml-auto">
                                        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 group hover:border-gold/30 transition-colors">
                                            <Share2 className="w-4 h-4 text-zinc-500 group-hover:text-gold transition-colors" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 group hover:border-gold/30 transition-colors">
                                            <Bookmark className="w-4 h-4 text-zinc-500 group-hover:text-gold transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
                                <img src={post.image} className="w-full h-[650px] object-cover rounded-[3rem] border border-white/10 shadow-2xl relative z-10 brightness-90 group-hover:brightness-100 transition-all duration-700" alt={post.title} />
                                <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-[5rem] -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </motion.div>
                        </div>

                        <div className="flex items-center gap-6 p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 mb-16">
                            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                                <User className="text-gold w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-white font-black uppercase tracking-widest text-sm">{post.author}</div>
                                <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{post.authorRole} • Lead Analyst</div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="blog-content prose prose-invert prose-xl max-w-none 
                                prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-white
                                prose-p:text-zinc-400 prose-p:leading-[1.8] prose-p:font-medium
                                prose-strong:text-white prose-strong:font-black
                                prose-em:text-gold prose-em:font-bold prose-em:italic
                                prose-ul:list-none prose-ul:p-0
                                pb-20"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>

                    {/* Right: Sidebar */}
                    <aside className="lg:col-span-4 space-y-12">
                        <div className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 sticky top-32 space-y-12 shadow-2xl">
                            <div className="space-y-8">
                                <h4 className="flex items-center gap-3 text-white font-black uppercase tracking-[0.4em] text-[10px] border-b border-white/5 pb-6">
                                    <List className="w-4 h-4 text-gold" /> Critical Path
                                </h4>
                                <ul className="space-y-6">
                                    {post.toc.map(item => (
                                        <li key={item.id}>
                                            <a href={`#${ item.id } `} className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600 hover:text-gold transition-all block group flex items-center gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-gold transition-colors" />
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-10 rounded-[2.5rem] bg-gold/5 border border-gold/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                                <h5 className="flex items-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                                    <Shield className="w-4 h-4" /> Operational Advantage
                                </h5>
                                <p className="text-[11px] text-zinc-400 mb-8 font-bold uppercase tracking-widest leading-relaxed">
                                    Access the authorized NileVista layer to bypass the systemic friction discussed in this briefing.
                                </p>
                                <Link href="/card" className="block w-full py-5 bg-gold text-black text-center rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl shadow-gold/10">Get Authorized</Link>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em] border-b border-white/5 pb-4">Real-Time Telemetry</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-[8px] text-zinc-600 font-black uppercase mb-1">Status</div>
                                        <div className="text-[10px] text-green-500 font-black uppercase">Active</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-[8px] text-zinc-600 font-black uppercase mb-1">Latency</div>
                                        <div className="text-[10px] text-white font-black uppercase">0.4ms</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
