"use client";

import { useUser, useAuth, SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const liaisons = [
    {
        id: "liaison-01",
        name: "Omar Al-Sayed",
        title: "Senior Archaeological Liaison",
        license: "L-2026-880",
        rating: 4.9,
        trips: 124,
        languages: ["English", "Arabic", "German"],
        specialty: "Pharaonic History",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        bio: "Veteran analyst specializing in the architectural logic of the New Kingdom. Vetted for high-security solo transits.",
        hourlyRate: 100,
        proximity: "0.4 km"
    },
    {
        id: "liaison-02",
        name: "Layla Mansour",
        title: "Executive Logistics Liaison",
        license: "L-2026-912",
        rating: 5.0,
        trips: 86,
        languages: ["English", "French", "Arabic"],
        specialty: "Sovereign Logistics",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
        bio: "Specialist in complex urban movements and bureaucratic negotiation. Ensuring authorized access to NAC restricted zones.",
        hourlyRate: 120,
        proximity: "1.2 km"
    },
    {
        id: "liaison-03",
        name: "Youssef Ibrahim",
        title: "Maritime Security Liaison",
        license: "L-2026-443",
        rating: 4.8,
        trips: 210,
        languages: ["English", "Arabic", "Russian"],
        specialty: "Red Sea Operations",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
        bio: "Former maritime security consultant. Now authorized for luxury yacht transits and underwater heritage audits.",
        hourlyRate: 150,
        proximity: "2.5 km"
    },
    {
        id: "liaison-04",
        name: "Amira Hassan",
        title: "Heritage Archivist Liaison",
        license: "L-2026-772",
        rating: 4.7,
        trips: 45,
        languages: ["English", "Italian", "Arabic"],
        specialty: "Old Cairo Logistics",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
        bio: "Expert in navigating the labyrinthine corridors of Islamic Cairo and securing access to private collections.",
        hourlyRate: 80,
        proximity: "0.8 km"
    }
];

export default function LiaisonPage() {
    const { isSignedIn } = useAuth();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [isSharing, setIsSharing] = useState(true);
    const [selectedHours, setSelectedHours] = useState<{ [key: string]: number }>(
        Object.fromEntries(liaisons.map(l => [l.id, 4]))
    );

    const handleHourChange = (id: string, delta: number) => {
        setSelectedHours(prev => ({
            ...prev,
            [id]: Math.min(12, Math.max(1, prev[id] + delta))
        }));
    };

    const handleBooking = (liaison: typeof liaisons[0]) => {
        const hours = selectedHours[liaison.id];
        const total = liaison.hourlyRate * hours;
        router.push(`/checkout?type=tour&tier=${liaison.name}&total=${total}&hours=${hours}`);
    };

    return (
        <div className="min-h-screen pt-40 pb-20">
            {/* Live Telemetry Banner */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="p-1 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-between pl-8 pr-2 py-2">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className={cn("w-2 h-2 rounded-full", isSharing ? "bg-gold animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)]" : "bg-zinc-600")} />
                            <span className="text-[10px] font-black uppercase text-gold tracking-[0.2em]">{isSharing ? "Live Telemetry Active" : "Telemetry Silenced"}</span>
                        </div>
                        <div className="hidden md:flex items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                            <span>Lat: 30.0444° N</span>
                            <span>Lon: 31.2357° E</span>
                            <span className="text-zinc-700">|</span>
                            <span>Signal: Encryption-v4</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsSharing(!isSharing)}
                        className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[9px] font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all"
                    >
                        {isSharing ? "Silence Signal" : "Share Live Location"}
                    </button>
                </div>
            </div>

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/5 border border-gold/10 text-gold text-[10px] font-black uppercase tracking-[0.3em]">
                    <UserCheck className="w-4 h-4" />
                    Authorized Personnel Only
                </div>
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.8] italic">
                    Liaison <span className="gold-gradient">Nexus.</span>
                </h1>
                <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed italic border-x border-gold/20 px-12">
                    "Decouple from generic tours. Initialize your journey with a merit-audited, licensed liaison specialized in your specific strategic requirements."
                </p>
            </div>

            {/* Filter Hub */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="p-4 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 backdrop-blur-3xl flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                        <input
                            type="text"
                            placeholder="Search License ID, Name, or Specialty..."
                            className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white text-xs font-bold focus:border-gold/50 outline-none transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Liaisons Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                {liaisons.map((liaison) => (
                    <motion.div
                        key={liaison.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gold/10 blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity rounded-full px-12" />
                        <div className="relative bg-[#050505] border border-white/5 rounded-[4rem] p-12 space-y-10 overflow-hidden transition-all group-hover:border-gold/30">
                            <div className="flex items-center gap-10">
                                <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-gold/30 grayscale group-hover:grayscale-0 transition-all">
                                    <SafeImage src={liaison.image} alt={liaison.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="space-y-4 flex-1">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-1 text-gold">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={cn("w-3.5 h-3.5 fill-current", i >= Math.floor(liaison.rating) && "opacity-30")} />
                                                ))}
                                                <span className="text-[10px] font-black ml-2">{liaison.rating}</span>
                                            </div>
                                            <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">{liaison.name}</h3>
                                            <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{liaison.title}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-black text-gold tracking-tighter">${liaison.hourlyRate}</div>
                                            <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Per Hour</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {liaison.languages.map(lang => (
                                            <div key={lang} className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[8px] font-black uppercase tracking-widest">
                                                {lang}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-zinc-500 text-lg font-medium leading-relaxed italic border-l-2 border-gold/20 pl-8">
                                "{liaison.bio}"
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 space-y-1">
                                    <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Specialty</div>
                                    <div className="text-white font-black uppercase text-[10px] tracking-tight">{liaison.specialty}</div>
                                </div>
                                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 space-y-1">
                                    <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">Proximity</div>
                                    <div className="text-gold font-black uppercase text-[10px] tracking-tight flex items-center gap-2">
                                        <MapPin className="w-3 h-3" /> {liaison.proximity}
                                    </div>
                                </div>
                                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 space-y-1">
                                    <div className="text-[8px] text-zinc-600 font-black uppercase tracking-widest">License</div>
                                    <div className="text-zinc-400 font-black uppercase text-[10px] tracking-tight">{liaison.license}</div>
                                </div>
                                <div className="p-4 rounded-[2rem] bg-gold/10 border border-gold/30 flex flex-col items-center justify-center gap-2">
                                    <div className="text-[8px] text-gold font-black uppercase tracking-[0.2em]">Duration</div>
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => handleHourChange(liaison.id, -1)} className="text-gold hover:text-white transition-colors">-</button>
                                        <span className="text-white font-black text-xs">{selectedHours[liaison.id]}H</span>
                                        <button onClick={() => handleHourChange(liaison.id, 1)} className="text-gold hover:text-white transition-colors">+</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {!isSignedIn ? (
                                    <SignInButton mode="modal">
                                        <button className="flex-1 py-7 bg-white text-black rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-gold transition-all flex items-center justify-center gap-4 group/btn shadow-xl shadow-white/5">
                                            Authorize to Book <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </SignInButton>
                                ) : (
                                    <button
                                        onClick={() => handleBooking(liaison)}
                                        className="flex-1 py-7 bg-white text-black rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:bg-gold transition-all flex items-center justify-center gap-4 group/btn shadow-xl shadow-white/5"
                                    >
                                        Initialize Deployment <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                )}
                                <button className="w-20 py-7 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-white hover:bg-white/10 transition-all">
                                    <Globe className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
<button className="w-20 py-7 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-white hover:bg-white/10 transition-all">
    <Globe className="w-5 h-5" />
</button>
                            </div >
                        </div >
                    </motion.div >
                ))}
            </div >
        </div >
    );
}
