"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import {
    Sparkles, MapPin, Shield, CheckCircle,
    ShoppingBag, Landmark, Globe,
    AlertTriangle, Truck, HardHat, Plane, Info
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SafeImage } from "@/components/SafeImage";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

// Expanded City & Activity Data
const city_data = [
    { name: "Cairo", image: "/pyramids.webp", desc: "The vibrant capital. Pyramids, world-class museums, and historic streets." },
    { name: "Luxor", image: "/luxor.webp", desc: "Ancient temples and the famous Valley of the Kings." },
    { name: "Aswan", image: "/aswan.webp", desc: "Beautiful Nile views and ancient Nubian culture." },
    { name: "Alexandria", image: "/sharm.webp", desc: "Sea breezes and historic coastal charm." },
    { name: "Hurghada", image: "/sharm.webp", desc: "Perfect for Red Sea diving and luxury resorts." },
    { name: "Sharm El-Sheikh", image: "/sharm.webp", desc: "Premium resorts and beautiful coral reefs." },
    { name: "Siwa Oasis", image: "/siwa.webp", desc: "A remote desert escape with natural salt lakes." },
];

const activities_pool = [
    { id: "pyramids", city: "Cairo", name: "Giza Pyramids Tour", price: 150, category: "History", icon: <Landmark />, desc: "Guided tour of the Pyramids and Sphinx with an expert guide.", image: "/pyramids.webp" },
    { id: "gem", city: "Cairo", name: "Grand Egyptian Museum VIP", price: 75, category: "Culture", icon: <Landmark />, desc: "Skip-the-line access to the world's largest archaeological museum.", image: "/grand museum.webp" },
    { id: "nile-cairo", city: "Cairo", name: "Nile Felucca Ride", price: 45, category: "Relaxation", icon: <Globe />, desc: "A relaxing private boat ride on the Nile at sunset.", image: "/luxor.webp" },
    { id: "vok", city: "Luxor", name: "Valley of the Kings", price: 200, category: "History", icon: <MapPin />, desc: "Explore the ancient tombs of Egypt's most famous Pharaohs.", image: "/valley of kings.webp" },
    { id: "karnak", city: "Luxor", name: "Karnak Temple Tour", price: 80, category: "History", icon: <Landmark />, desc: "A guided walk through the massive Karnak Temple complex.", image: "/karnk temple.webp" },
    { id: "abu-simbel", city: "Aswan", name: "Abu Simbel Plane Trip", price: 480, category: "History", icon: <Plane />, desc: "A private flight to the stunning temples of Ramses II.", image: "/aswan.webp" },
    { id: "library", city: "Alexandria", name: "Library of Alexandria", price: 30, category: "History", icon: <Landmark />, desc: "Tour the modern architectural marvel of the new library.", image: "/sharm.webp" },
    { id: "giftun", city: "Hurghada", name: "Giftun Island Boat Trip", price: 350, category: "Relaxation", icon: <ShoppingBag />, desc: "A private yacht trip to the beautiful Red Sea islands.", image: "/sharm.webp" },
    { id: "ras-mohammed", city: "Sharm El-Sheikh", name: "Ras Mohammed Snorkeling", price: 120, category: "Adventure", icon: <Globe />, desc: "Explore the vibrant coral reefs of the national park.", image: "/sharm.webp" },
    { id: "salt-lake", city: "Siwa Oasis", name: "Salt Lake Swimming", price: 90, category: "Relaxation", icon: <Sparkles />, desc: "Experience the unique therapeutic waters of Siwa.", image: "/siwa.webp" },
];

const city_hotels = {
    "Cairo": [
        { star: 5, name: "Marriott Mena House", price: 420, image: "/pyramids.webp", desc: "Palatial pyramids view." },
        { star: 4, name: "Steigenberger El Tahrir", price: 190, image: "/grand museum.webp", desc: "Urban strategic center." },
        { star: 3, name: "Cleopatra Hotel", price: 85, image: "/market.webp", desc: "Central downtown base." }
    ],
    "Luxor": [
        { star: 5, name: "Sofitel Winter Palace", price: 380, image: "/luxor.webp", desc: "Historic Royal heritage." },
        { star: 4, name: "Steigenberger Nile Palace", price: 170, image: "/valley of kings.webp", desc: "Riverside luxury corridor." },
        { star: 3, name: "Iberotel Luxor", price: 75, image: "/karnk temple.webp", desc: "Strategic Nile access." }
    ],
    "Aswan": [
        { star: 5, name: "Old Cataract Hotel", price: 550, image: "/aswan.webp", desc: "Authorized sovereign luxury." },
        { star: 4, name: "Movenpick Resort", price: 210, image: "/aswan.webp", desc: "Island-sector security." },
        { star: 3, name: "Basma Hotel", price: 95, image: "/pyramids.webp", desc: "Elevated high-ground." }
    ],
    "Alexandria": [
        { star: 5, name: "Four Seasons San Stefano", price: 440, image: "/sharm.webp", desc: "Elite Mediterranean base." },
        { star: 4, name: "Steigenberger Cecil", price: 160, image: "/luxor.webp", desc: "Historic port-sector." }
    ],
    "Hurghada": [
        { star: 5, name: "Baron Palace Sahl Hasheesh", price: 390, image: "/sharm.webp", desc: "Palatial coastal security." }
    ],
    "Sharm El-Sheikh": [
        { star: 5, name: "Four Seasons Resort", price: 620, image: "/sharm.webp", desc: "Maximum Red Sea privacy." }
    ],
    "Siwa Oasis": [
        { star: 5, name: "Adrere Amellal", price: 780, image: "/siwa.webp", desc: "Total digital invisibility." }
    ]
};

const PersonalizedPlan = () => {
    const { user } = useUser();
    const [step, setStep] = useState(1);
    const [hoveredAsset, setHoveredAsset] = useState<any>(null);
    const [formData, setFormData] = useState({
        name: "",
        cities: [] as string[],
        duration: 0,
        hotelStars: 0,
        transport: "car" as "car" | "bus" | "air",
        selectedActivities: [] as string[],
        visaType: "E-Visa",
    });

    useEffect(() => {
        if (user && !formData.name) setFormData(prev => ({ ...prev, name: user.fullName || "" }));
    }, [user]);

    const toggleCity = (city: string) => {
        setFormData(prev => ({
            ...prev,
            cities: prev.cities?.includes(city) ? prev.cities.filter(c => c !== city) : [...(prev.cities || []), city]
        }));
    };

    const toggleActivity = (id: string) => {
        setFormData(prev => ({
            ...prev,
            selectedActivities: prev.selectedActivities?.includes(id) ? prev.selectedActivities.filter(a => a !== id) : [...(prev.selectedActivities || []), id]
        }));
    };

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => Math.max(1, s - 1));

    const getEstimatedTotal = () => {
        const activityTotal = formData.selectedActivities.reduce((sum, id) => {
            const item = activities_pool.find(a => a.id === id);
            return sum + (item?.price || 0);
        }, 0);

        // Transportation logic
        const sectorCount = formData.cities.length;
        let transportRate = 0;
        if (formData.transport === "car") transportRate = 150;
        if (formData.transport === "bus") transportRate = 45;
        if (formData.transport === "air") transportRate = 300;

        const transportTotal = sectorCount > 1 ? (sectorCount - 1) * transportRate : transportRate;

        // Hotel price calculations
        const avgHotelPrice = formData.cities.reduce((sum, city) => {
            const cityHotels = city_hotels[city as keyof typeof city_hotels] || [];
            const tierHotel = cityHotels.find(h => h.star === formData.hotelStars) || cityHotels[0] || { price: 0 };
            return sum + tierHotel.price;
        }, 0) / (formData.cities.length || 1);

        const hotelTotal = avgHotelPrice * (formData.duration || 1);
        const dailyLiaison = 120 * (formData.duration || 1); // Senior liaison rate

        return Math.round(activityTotal + hotelTotal + dailyLiaison + transportTotal);
    };

    return (
        <div className="min-h-screen pt-40 pb-20 px-4">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left: Interactive Engine */}
                <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/5 rounded-[4rem] overflow-hidden shadow-2xl relative">
                    <div className="h-1 w-full bg-white/5 absolute top-0 left-0">
                        <motion.div animate={{ width: `${(step / 8) * 100}%` }} className="h-full bg-gold shadow-[0_0_15px_rgba(212,175,55,1)]" />
                    </div>

                    <div className="p-10 md:p-20 min-h-[700px]">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                                    <h2 className="text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">1. Your <br /><span className="gold-gradient">Name.</span></h2>
                                    <input
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-3xl p-10 text-4xl text-white outline-none focus:border-gold transition-all"
                                        placeholder="Enter your name..."
                                    />
                                    <SignedOut>
                                        <SignInButton mode="modal">
                                            <button className="w-full py-8 bg-white text-black rounded-3xl font-black text-2xl uppercase tracking-[0.2em] transition-all shadow-xl shadow-white/5">
                                                Login to Start Building
                                            </button>
                                        </SignInButton>
                                    </SignedOut>
                                    <SignedIn>
                                        <button onClick={nextStep} disabled={!formData.name} className="w-full py-8 bg-gold text-black rounded-3xl font-black text-2xl uppercase tracking-[0.2em] disabled:opacity-20 transition-all shadow-xl shadow-gold/20">
                                            Continue
                                        </button>
                                    </SignedIn>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
                                    <h2 className="text-4xl font-black text-white tracking-tighter uppercase">2. Sector <span className="gold-gradient">Authorization.</span></h2>
                                    <p className="text-zinc-500 text-sm font-medium">Select the administrative sectors required for your Egyptian deployment.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                        {city_data.map(c => (
                                            <button
                                                key={c.name}
                                                onMouseEnter={() => setHoveredAsset({ ...c, type: 'Sector' })}
                                                onClick={() => toggleCity(c.name)}
                                                className={cn(
                                                    "p-6 rounded-[2.5rem] border flex items-center gap-6 transition-all group",
                                                    formData.cities.includes(c.name) ? "bg-gold border-gold text-black" : "bg-white/5 border-white/10 text-zinc-500"
                                                )}
                                            >
                                                <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden border border-white/10 group-hover:scale-105 transition-transform">
                                                    <SafeImage src={c.image} alt={c.name} className="w-full h-full" />
                                                </div>
                                                <div className="text-left flex-1">
                                                    <div className="font-black uppercase tracking-widest">{c.name}</div>
                                                    <div className="text-[10px] opacity-70 font-bold uppercase mt-1">Status: Secured</div>
                                                </div>
                                                {formData.cities.includes(c.name) && <CheckCircle className="w-6 h-6" />}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <button onClick={prevStep} className="px-10 py-5 bg-white/5 text-white rounded-2xl font-black">BACK</button>
                                        <button onClick={nextStep} disabled={formData.cities.length === 0} className="flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest disabled:opacity-20 transition-all hover:bg-gold hover:text-black">Define Operations</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12 text-center py-10">
                                    <h2 className="text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">3. Deployment <br /><span className="gold-gradient">Duration.</span></h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                        {[3, 5, 7, 10, 14, 21].map(d => (
                                            <button
                                                key={d}
                                                onClick={() => setFormData({ ...formData, duration: d })}
                                                className={cn(
                                                    "py-10 rounded-[3rem] border text-3xl font-black transition-all",
                                                    formData.duration === d ? "bg-gold text-black border-gold scale-105 shadow-2xl" : "bg-white/5 border-white/10 text-zinc-600"
                                                )}
                                            >
                                                {d} DAYS
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <button onClick={prevStep} className="px-10 py-5 bg-white/5 text-white rounded-2xl font-black">BACK</button>
                                        <button onClick={nextStep} disabled={formData.duration === 0} className="flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase hover:bg-gold transition-all">Authorize Assets</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                                    <h2 className="text-4xl font-black text-white tracking-tighter uppercase">4. Operational <span className="gold-gradient">Assets.</span></h2>
                                    <p className="text-zinc-500 text-sm font-medium">Select specific high-value experiences and logistics for your sectors.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                                        {activities_pool.filter(a => formData.cities?.includes(a.city)).map(a => (
                                            <button
                                                key={a.id}
                                                onMouseEnter={() => setHoveredAsset({ ...a, type: 'Operation' })}
                                                onClick={() => toggleActivity(a.id)}
                                                className={cn(
                                                    "p-6 rounded-[2.5rem] border flex items-center justify-between transition-all group",
                                                    formData.selectedActivities.includes(a.id) ? "bg-gold border-gold text-black" : "bg-white/5 border-white/10 text-zinc-600 hover:border-white/20"
                                                )}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-black/20 flex items-center justify-center text-gold">{a.icon}</div>
                                                    <div className="text-left">
                                                        <div className="font-black text-xs uppercase tracking-widest">{a.name}</div>
                                                        <div className="text-[10px] font-bold mt-1">Cost: ${a.price} | Sector: {a.city}</div>
                                                    </div>
                                                </div>
                                                {formData.selectedActivities.includes(a.id) && <CheckCircle className="w-5 h-5" />}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <button onClick={prevStep} className="px-10 py-5 bg-white/5 text-white rounded-2xl font-black">BACK</button>
                                        <button onClick={nextStep} className="flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase hover:bg-gold transition-all">Establish Lodging</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 5 && (
                                <motion.div key="s5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
                                    <h2 className="text-4xl font-black text-white tracking-tighter uppercase">5. Strategic <span className="gold-gradient">Lodging.</span></h2>
                                    <p className="text-zinc-500 text-sm font-medium">Select your intended hospitality tier for secure residential coordination.</p>
                                    <div className="grid grid-cols-1 gap-6 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                                        {[5, 4, 3].map(stars => (
                                            <div key={stars} className="space-y-4">
                                                <h4 className="text-zinc-600 font-black uppercase tracking-[0.3em] text-[10px]">{stars} Star Sovereign Tier</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {formData.cities.map(city => {
                                                        const cityHotels = city_hotels[city as keyof typeof city_hotels] || [];
                                                        const hotel = cityHotels.find(h => h.star === stars);
                                                        if (!hotel) return null;
                                                        return (
                                                            <button
                                                                key={`${city}-${stars}`}
                                                                onMouseEnter={() => setHoveredAsset({ ...hotel, type: 'Lodging', name: `${hotel.name} (${city})` })}
                                                                onClick={() => setFormData({ ...formData, hotelStars: stars })}
                                                                className={cn(
                                                                    "p-6 rounded-[2.5rem] border flex items-center gap-4 transition-all text-left",
                                                                    formData.hotelStars === stars ? "bg-gold border-gold text-black shadow-2xl" : "bg-white/5 border-white/10 text-zinc-500"
                                                                )}
                                                            >
                                                                <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                                                                    <SafeImage src={hotel.image} alt={hotel.name} className="w-full h-full" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="text-[10px] font-black uppercase tracking-widest truncate">{hotel.name}</div>
                                                                    <div className="text-[10px] font-bold opacity-60 italic">{city}</div>
                                                                    <div className="text-xs font-black mt-1">${hotel.price} Per Night</div>
                                                                </div>
                                                                {formData.hotelStars === stars && <CheckCircle className="w-4 h-4" />}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <button onClick={prevStep} className="px-10 py-5 bg-white/5 text-white rounded-2xl font-black">BACK</button>
                                        <button onClick={nextStep} disabled={formData.hotelStars === 0} className="flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase disabled:opacity-20 transition-all hover:bg-gold">Confirm Transit</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 6 && (
                                <motion.div key="s6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12 text-center py-10">
                                    <h2 className="text-5xl font-black text-white tracking-tighter uppercase">6. Logistical <span className="gold-gradient">Movement.</span></h2>
                                    <p className="text-zinc-500 text-sm font-medium">Define your primary mobility layer for inter-sector transitions.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            { id: "car", name: "Executive Sedan", icon: <Truck />, desc: "Private authorized driver for 24/7 sector mobility." },
                                            { id: "bus", name: "Tactical Coach", icon: <HardHat />, desc: "High-capacity group transit with logistics support." },
                                            { id: "air", name: "Sovereign Air", icon: <Plane />, desc: "Private domestic flight protocols for fast-track travel." }
                                        ].map(t => (
                                            <button
                                                key={t.id}
                                                onClick={() => setFormData({ ...formData, transport: t.id as any })}
                                                className={cn(
                                                    "p-10 rounded-[3rem] border transition-all text-left flex flex-col gap-4 group",
                                                    formData.transport === t.id ? "bg-gold text-black border-gold scale-105" : "bg-white/5 border-white/10 text-zinc-600 hover:border-white/20"
                                                )}
                                            >
                                                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-colors", formData.transport === t.id ? "bg-black/20 text-black" : "bg-gold/10 text-gold group-hover:bg-gold/20")}>{t.icon}</div>
                                                <div>
                                                    <div className="font-black uppercase tracking-widest text-lg">{t.name}</div>
                                                    <div className="text-[10px] font-bold opacity-70 uppercase mt-1 leading-tight">{t.desc}</div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <button onClick={prevStep} className="px-10 py-5 bg-white/5 text-white rounded-2xl font-black">BACK</button>
                                        <button onClick={nextStep} className="flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase hover:bg-gold transition-all">Verify Deployment</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 7 && (
                                <motion.div key="s7" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 space-y-12">
                                    <div className="relative w-56 h-56 mx-auto">
                                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-4 border-dashed border-gold/40" />
                                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute inset-4 rounded-full border border-white/10" />
                                        <div className="absolute inset-0 flex items-center justify-center"><Shield className="w-16 h-16 text-gold animate-pulse" /></div>
                                    </div>
                                    <div className="space-y-6 max-w-lg mx-auto">
                                        <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-tight">Analyzing Deployment <br /> <span className="gold-gradient">Feasibility.</span></h2>
                                        <div className="bg-black/40 border border-white/5 p-6 rounded-3xl space-y-2 h-24 overflow-hidden text-[9px] uppercase font-black tracking-[0.2em] text-zinc-500 font-mono text-left">
                                            <motion.div animate={{ y: [-200, 0] }} transition={{ duration: 4 }}>
                                                <div className="text-gold">[MODEM] Syncing with local sector benchmarks...</div>
                                                <div>[CITIES] {formData.cities.length} SECTORS REGISTERED... OK.</div>
                                                <div>[LODGING] {formData.hotelStars} STAR SOVEREIGN CAPACITY VERIFIED...</div>
                                                <div>[TRANSIT] ALLOCATING {formData.transport.toUpperCase()} FREQUENCIES...</div>
                                                <div className="text-zinc-700">[LOG] Bypassing legacy commission layers...</div>
                                                <div className="text-zinc-700 font-normal">[LOG] Mapping optimal Cairo-Luxor tactical path...</div>
                                                <div className="text-gold">[SUCCESS] DISINTERMEDIATION PROTOCOL ACTIVE.</div>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 4 }} onAnimationComplete={nextStep} className="h-1 bg-gold rounded-full max-w-sm mx-auto shadow-[0_0_15px_rgba(212,175,55,1)]" />
                                </motion.div>
                            )}

                            {step === 8 && (
                                <motion.div key="s8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
                                    <div className="flex justify-between items-end border-b border-white/10 pb-10">
                                        <h2 className="text-6xl font-black text-white tracking-tighter uppercase leading-[0.8]">Strategic <br /><span className="gold-gradient">Blueprint.</span></h2>
                                        <div className="text-right">
                                            <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.4em] mb-2">Operational Estimate</div>
                                            <div className="text-4xl font-black text-gold font-mono">${getEstimatedTotal()}</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
                                        {[
                                            { l: "Operative", v: formData.name },
                                            { l: "Window", v: `${formData.duration} DAYS` },
                                            { l: "Sectors", v: formData.cities.join(", ") },
                                            { l: "Ops", v: `${formData.selectedActivities.length} Actions` },
                                            { l: "Logistics", v: formData.transport.toUpperCase() }
                                        ].map(item => (
                                            <div key={item.l}>
                                                <div className="text-[10px] text-zinc-600 font-black uppercase mb-1 tracking-widest">{item.l}</div>
                                                <div className="text-white font-black uppercase italic text-xs truncate">{item.v}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-6">
                                        <div className="flex items-center gap-4 text-gold border-b border-white/5 pb-4">
                                            <Shield className="w-5 h-5 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Economic Protection Notice</span>
                                        </div>
                                        <p className="text-zinc-500 text-sm font-medium leading-relaxed italic">"By authorizing this deployment via the Pharaonic Protocol, you bypass approximately <span className="text-white font-bold">${(getEstimatedTotal() * 0.38).toFixed(0)}</span> in systemic markups and unofficial street taxes."</p>
                                        <button
                                            onClick={() => window.location.href = `/checkout?type=plan&total=${getEstimatedTotal()}&cities=${formData.cities.join(',')}&tier=Deployment`}
                                            className="w-full py-6 bg-gold text-black rounded-2xl font-black tracking-widest uppercase hover:bg-white transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                                        >
                                            Authorize Mission
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 9 && (
                                <motion.div key="s9" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 space-y-12">
                                    <div className="w-40 h-40 bg-gold rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-gold/20 animate-bounce">
                                        <CheckCircle className="w-20 h-20 text-black" />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-5xl font-black text-white tracking-tighter uppercase leading-tight">Deployment Locked.</h2>
                                        <p className="text-zinc-400 text-lg font-medium italic">"The Pharaonic Architect has finalized your tactical route. Prepare for seamless Egyptian immersion."</p>
                                    </div>
                                    <div className="flex justify-center gap-6">
                                        <button onClick={() => window.location.href = `/checkout?type=deployment&tier=Final`} className="px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-gold transition-all shadow-xl uppercase tracking-widest text-xs">Verify & Pay</button>
                                        <button onClick={() => window.location.href = '/card'} className="px-12 py-6 border border-white/10 text-white font-black rounded-2xl hover:bg-white/5 transition-all uppercase tracking-widest text-xs">Aquire Sovereign Card</button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right: Asset Intelligence Preview */}
                <div className="lg:col-span-4 sticky top-40 space-y-10">
                    <div className="p-10 rounded-[3.5rem] bg-[#0a0a0a] border border-white/5 overflow-hidden relative min-h-[500px] flex flex-col">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gold/20" />
                        <h3 className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-8 flex items-center gap-3">
                            <Sparkles className="w-4 h-4 text-gold" /> Plan Overview
                        </h3>

                        <AnimatePresence mode="wait">
                            {hoveredAsset ? (
                                <motion.div key={hoveredAsset.id || hoveredAsset.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8 flex-1 flex flex-col">
                                    <div className="aspect-square w-full rounded-[2.5rem] overflow-hidden border border-white/10 relative group">
                                        <SafeImage src={hoveredAsset.image} alt={hoveredAsset.name} className="w-full h-full group-hover:scale-110 duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent " />
                                        <div className="absolute bottom-6 left-6 text-white font-black uppercase text-xl italic tracking-tighter">{hoveredAsset.name}</div>
                                    </div>
                                    <div className="space-y-4 flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{hoveredAsset.type} Details</span>
                                            {hoveredAsset.price && <span className="text-gold font-black tracking-tighter uppercase text-sm">${hoveredAsset.price}</span>}
                                        </div>
                                        <p className="text-zinc-500 text-sm leading-relaxed font-medium">{hoveredAsset.desc}</p>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 opacity-20">
                                    <Info className="w-16 h-16 text-white" />
                                    <p className="text-[10px] text-white font-black uppercase tracking-[0.3em]">Hover assets for intelligence preview</p>
                                </div>
                            )}
                        </AnimatePresence>

                        <div className="mt-8 pt-8 border-t border-white/5">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Active Selections</span>
                                <span className="text-gold font-black text-xs">{formData.cities.length} Cities | {formData.selectedActivities.length} Operations</span>
                            </div>
                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div animate={{ width: `${(formData.selectedActivities.length / activities_pool.length) * 100}%` }} className="h-full bg-gold" />
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 shadow-2xl shadow-red-500/5">
                        <div className="flex items-center gap-3 mb-2">
                            <AlertTriangle className="text-red-500 w-4 h-4" />
                            <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">Savings Notice</span>
                        </div>
                        <p className="text-zinc-600 text-[10px] leading-relaxed uppercase tracking-tighter font-bold">Standard regional prices for this plan are usually much higher than our direct-entry rates.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalizedPlan;
