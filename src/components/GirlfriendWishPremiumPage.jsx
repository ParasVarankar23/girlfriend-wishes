"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function GirlfriendWishFinalPage() {
    const herName = "Khushi";
    const yourName = "Shrawan";

    // ================= STABLE DATA =================
    const relationshipStart = useMemo(() => new Date("2025-12-22T00:00:00"), []);

    const loveMessage = useMemo(
        () =>
            `${herName}, you make my life beautiful. Your smile is my peace, your love is my happiness, and every moment with you feels magical. I am so lucky to have you in my life, my love. 💖`,
        [herName]
    );

    const finalLines = useMemo(
        () => [
            `${herName}, you are my happiness and my peace. 💕`,
            `Every day with you feels more beautiful than the last one.`,
            `I feel so lucky that you are in my life.`,
            `We completed our beautiful 100 days together. 💯💖`,
            `Forever yours, ${yourName} ❤️`,
        ],
        [herName, yourName]
    );

    const galleryImages = useMemo(
        () => [
            {
                src: "/images/her1.jpeg",
                title: `${herName}, My Beautiful Girl 💕`,
                cls: "animate-photoTopLeft",
                rotate: "-rotate-2",
            },
            {
                src: "/images/her2.jpeg",
                title: `The Smile I Love Most 😍`,
                cls: "animate-photoTopRight",
                rotate: "rotate-2",
            },
            {
                src: "/images/us1.jpeg",
                title: `${yourName} & ${herName} 💞`,
                cls: "animate-photoBottomLeft",
                rotate: "rotate-1",
            },
            {
                src: "/images/us2.jpeg",
                title: `Forever ${yourName} + ${herName} ❤️`,
                cls: "animate-photoBottomRight",
                rotate: "-rotate-1",
            },
        ],
        [herName, yourName]
    );

    // ================= STATE =================
    const [screen, setScreen] = useState("loader");
    const [countdown, setCountdown] = useState(3);

    const [displayedText, setDisplayedText] = useState("");
    const [displayedFinalLines, setDisplayedFinalLines] = useState([]);

    const [petals, setPetals] = useState([]);
    const [hearts, setHearts] = useState([]);
    const [confetti, setConfetti] = useState([]);
    const [stars, setStars] = useState([]);
    const [birthdayBurst, setBirthdayBurst] = useState([]);

    const [musicStarted, setMusicStarted] = useState(false);
    const [envelopeOpen, setEnvelopeOpen] = useState(false);

    const [showBirthdayPopup, setShowBirthdayPopup] = useState(false);
    const [showHundredDaysPopup, setShowHundredDaysPopup] = useState(false);

    const [finalQuestionAnswered, setFinalQuestionAnswered] = useState(false);

    const [relationshipTime, setRelationshipTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [birthdayCountdown, setBirthdayCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        label: `Countdown to ${herName}'s Birthday 🎂`,
    });

    const [isBirthdayToday, setIsBirthdayToday] = useState(false);

    const audioRef = useRef(null);

    // ================= HELPERS =================
    const formatTwo = (num) => String(num).padStart(2, "0");

    // ================= GENERATED BACKGROUND =================
    useEffect(() => {
        const generatedHearts = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 18 + 18,
            duration: Math.random() * 5 + 6,
            delay: Math.random() * 4,
            emoji: ["❤️", "💖", "💕", "💗"][Math.floor(Math.random() * 4)],
        }));
        setHearts(generatedHearts);
    }, []);

    useEffect(() => {
        const generatedPetals = Array.from({ length: 24 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 14 + 16,
            duration: Math.random() * 6 + 6,
            delay: Math.random() * 5,
            rotate: Math.random() * 360,
        }));
        setPetals(generatedPetals);
    }, []);

    useEffect(() => {
        const generatedConfetti = Array.from({ length: 36 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 10 + 10,
            duration: Math.random() * 3 + 3,
            delay: Math.random() * 3,
            rotate: Math.random() * 360,
            emoji: ["🎉", "✨", "🎊", "💖", "💕"][Math.floor(Math.random() * 5)],
        }));
        setConfetti(generatedConfetti);
    }, []);

    useEffect(() => {
        const generatedStars = Array.from({ length: 28 }, (_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 18 + 14,
            delay: Math.random() * 3,
            duration: Math.random() * 2 + 2,
            emoji: ["✨", "⭐", "🌟"][Math.floor(Math.random() * 3)],
        }));
        setStars(generatedStars);
    }, []);

    useEffect(() => {
        const burst = Array.from({ length: 34 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 18 + 18,
            delay: Math.random() * 1.8,
            duration: Math.random() * 2 + 2,
            emoji: ["🎉", "🎊", "✨", "💖", "🎂"][Math.floor(Math.random() * 5)],
        }));
        setBirthdayBurst(burst);
    }, []);

    // ================= LOADER TO INTRO =================
    useEffect(() => {
        if (screen !== "loader") return;

        const timer = setTimeout(() => {
            setScreen("intro");
        }, 2200);

        return () => clearTimeout(timer);
    }, [screen]);

    // ================= RELATIONSHIP TIMER =================
    useEffect(() => {
        const updateRelationshipTime = () => {
            const now = new Date();
            const diff = now - relationshipStart;

            if (diff < 0) {
                setRelationshipTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setRelationshipTime({ days, hours, minutes, seconds });
        };

        updateRelationshipTime();
        const interval = setInterval(updateRelationshipTime, 1000);
        return () => clearInterval(interval);
    }, [relationshipStart]);

    // ================= BIRTHDAY COUNTDOWN + AUTO OPEN ONLY ON 3 APRIL =================
    useEffect(() => {
        const updateBirthdayCountdown = () => {
            const now = new Date();
            const todayBirthday = now.getMonth() === 3 && now.getDate() === 3; // April = 3
            setIsBirthdayToday(todayBirthday);

            let target = new Date(now.getFullYear(), 3, 3, 0, 0, 0);

            if (now > target && !todayBirthday) {
                target = new Date(now.getFullYear() + 1, 3, 3, 0, 0, 0);
            }

            const diff = target - now;

            const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
            const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
            const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
            const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

            setBirthdayCountdown({
                days,
                hours,
                minutes,
                seconds,
                label: todayBirthday
                    ? `Happy Birthday ${herName} 🎂`
                    : `Countdown to ${herName}'s Birthday 🎂`,
            });

            // auto open only on 3 April
            if (todayBirthday) {
                setShowBirthdayPopup(true);
            }
        };

        updateBirthdayCountdown();
        const interval = setInterval(updateBirthdayCountdown, 1000);
        return () => clearInterval(interval);
    }, [herName]);

    // ================= COUNTDOWN =================
    useEffect(() => {
        if (screen !== "countdown") return;

        setCountdown(3);

        const t1 = setTimeout(() => setCountdown(2), 1000);
        const t2 = setTimeout(() => setCountdown(1), 2000);
        const t3 = setTimeout(() => setCountdown(0), 3000);
        const t4 = setTimeout(() => setScreen("q1"), 4300);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, [screen]);

    // ================= MESSAGE TYPEWRITER =================
    useEffect(() => {
        if (screen !== "message") return;

        let index = 0;
        setDisplayedText("");

        const interval = setInterval(() => {
            setDisplayedText(loveMessage.slice(0, index + 1));
            index++;
            if (index >= loveMessage.length) clearInterval(interval);
        }, 24);

        return () => clearInterval(interval);
    }, [screen, loveMessage]);

    // ================= ENVELOPE =================
    useEffect(() => {
        if (screen !== "envelope") return;

        setEnvelopeOpen(false);

        const openTimer = setTimeout(() => {
            setEnvelopeOpen(true);
        }, 900);

        const nextTimer = setTimeout(() => {
            setScreen("message");
        }, 3400);

        return () => {
            clearTimeout(openTimer);
            clearTimeout(nextTimer);
        };
    }, [screen]);

    // ================= MESSAGE -> GALLERY =================
    useEffect(() => {
        if (screen !== "message") return;

        const timer = setTimeout(() => {
            setScreen("gallery");
        }, 7600);

        return () => clearTimeout(timer);
    }, [screen]);

    // ================= GALLERY -> FINAL =================
    useEffect(() => {
        if (screen !== "gallery") return;

        const timer = setTimeout(() => {
            setScreen("final");
        }, 7200);

        return () => clearTimeout(timer);
    }, [screen]);

    // ================= FINAL SCREEN CONTENT =================
    useEffect(() => {
        if (screen !== "final") return;

        setDisplayedFinalLines([]);
        setShowHundredDaysPopup(false);
        setFinalQuestionAnswered(false);

        const timers = [];

        finalLines.forEach((line, idx) => {
            const timer = setTimeout(() => {
                setDisplayedFinalLines((prev) => [...prev, line]);
            }, idx * 1100);
            timers.push(timer);
        });

        const hundredTimer = setTimeout(() => {
            setShowHundredDaysPopup(true);
        }, 2200);
        timers.push(hundredTimer);

        return () => {
            timers.forEach((timer) => clearTimeout(timer));
        };
    }, [screen, finalLines]);

    // ================= START MUSIC =================
    const startMusic = async () => {
        try {
            if (audioRef.current && !musicStarted) {
                audioRef.current.currentTime = 0;
                audioRef.current.volume = 0.6;
                const playPromise = audioRef.current.play();

                if (playPromise !== undefined) {
                    await playPromise;
                }

                setMusicStarted(true);
            }
        } catch (err) {
            console.log("Music blocked by browser, continuing without music.");
        }
    };

    // ================= ACTIONS =================
    const handleStart = () => {
        startMusic();
        setScreen("countdown");
    };

    const handleQ1 = () => setScreen("q2");
    const handleQ2 = () => setScreen("envelope");

    const handleReadAgain = () => {
        setDisplayedFinalLines([]);
        setShowHundredDaysPopup(false);
        setFinalQuestionAnswered(false);
        setScreen("message");
    };

    const handleFinalYes = () => {
        setFinalQuestionAnswered(true);
    };

    // ================= MEMO RENDER HELPERS =================
    const floatingHearts = useMemo(
        () =>
            hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="absolute animate-floatHeart opacity-65 select-none"
                    style={{
                        left: `${heart.left}%`,
                        bottom: "-60px",
                        fontSize: `${heart.size}px`,
                        animationDuration: `${heart.duration}s`,
                        animationDelay: `${heart.delay}s`,
                    }}
                >
                    {heart.emoji}
                </div>
            )),
        [hearts]
    );

    const fallingPetals = useMemo(
        () =>
            petals.map((petal) => (
                <div
                    key={petal.id}
                    className="absolute animate-fallPetal opacity-80 select-none"
                    style={{
                        left: `${petal.left}%`,
                        top: "-40px",
                        fontSize: `${petal.size}px`,
                        animationDuration: `${petal.duration}s`,
                        animationDelay: `${petal.delay}s`,
                        transform: `rotate(${petal.rotate}deg)`,
                    }}
                >
                    🌹
                </div>
            )),
        [petals]
    );

    const confettiEffect = useMemo(
        () =>
            confetti.map((piece) => (
                <div
                    key={piece.id}
                    className="absolute animate-confettiFall select-none pointer-events-none"
                    style={{
                        left: `${piece.left}%`,
                        top: "-40px",
                        fontSize: `${piece.size}px`,
                        animationDuration: `${piece.duration}s`,
                        animationDelay: `${piece.delay}s`,
                        transform: `rotate(${piece.rotate}deg)`,
                    }}
                >
                    {piece.emoji}
                </div>
            )),
        [confetti]
    );

    const starsEffect = useMemo(
        () =>
            stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute animate-starTwinkle pointer-events-none select-none"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        fontSize: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                    }}
                >
                    {star.emoji}
                </div>
            )),
        [stars]
    );

    const birthdayBurstEffect = useMemo(
        () =>
            birthdayBurst.map((item) => (
                <div
                    key={item.id}
                    className="absolute animate-birthdayBurst pointer-events-none select-none"
                    style={{
                        top: `${item.top}%`,
                        left: `${item.left}%`,
                        fontSize: `${item.size}px`,
                        animationDelay: `${item.delay}s`,
                        animationDuration: `${item.duration}s`,
                    }}
                >
                    {item.emoji}
                </div>
            )),
        [birthdayBurst]
    );

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center px-4 py-8">
            {/* AUDIO */}
            <audio ref={audioRef} loop preload="auto">
                <source src="/music/romantic.mp3" type="audio/mpeg" />
            </audio>

            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">{floatingHearts}</div>
            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">{fallingPetals}</div>

            {/* COUNTDOWN OUTSIDE CARD - THIS FIXES THE WHITE BOX ISSUE */}
            {screen === "countdown" && (
                <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-pink-100/98 via-rose-50/98 to-purple-100/98 backdrop-blur-md overflow-hidden px-4">
                    <div className="absolute inset-0 pointer-events-none">{floatingHearts}</div>
                    <div className="absolute inset-0 pointer-events-none">{fallingPetals}</div>
                    <div className="absolute inset-0 pointer-events-none">{starsEffect}</div>

                    <p className="relative z-10 text-pink-700 text-xl md:text-3xl font-semibold mb-8 text-center">
                        Get ready {herName}... 💖
                    </p>

                    {/* ONLY PERFECT CIRCLE */}
                    <div className="relative z-10 w-52 h-52 md:w-80 md:h-80 rounded-full bg-white/85 border-[8px] border-pink-300 shadow-[0_0_60px_rgba(255,105,180,0.25)] flex items-center justify-center">
                        {countdown > 0 ? (
                            <span className="text-8xl md:text-[180px] font-extrabold text-pink-600 leading-none animate-cinematicCount">
                                {countdown}
                            </span>
                        ) : (
                            <span className="text-7xl md:text-[150px] leading-none animate-heartbeat">💖</span>
                        )}
                    </div>

                    <p className="relative z-10 mt-8 text-rose-600 text-base md:text-2xl font-medium animate-pulse text-center">
                        Your surprise is opening...
                    </p>
                </div>
            )}

            {/* FINAL EFFECTS */}
            {screen === "final" && (
                <>
                    <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">{confettiEffect}</div>
                    <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">{starsEffect}</div>
                </>
            )}

            {/* STRONGER BIRTHDAY EFFECT ONLY ON 3 APRIL */}
            {showBirthdayPopup && isBirthdayToday && (
                <div className="absolute inset-0 overflow-hidden z-[90] pointer-events-none">
                    {birthdayBurstEffect}
                </div>
            )}

            {/* SOFT GLOWS */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-52 h-52 bg-purple-300/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-rose-300/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

            {/* 100 DAYS POPUP */}
            {showHundredDaysPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-md w-full text-center animate-popupIn border-4 border-pink-200">
                        <div className="text-5xl md:text-7xl mb-3 animate-bounce">💯</div>
                        <h3 className="text-2xl md:text-4xl font-extrabold text-pink-600 mb-3">
                            100 Days of Love 💖
                        </h3>
                        <p className="text-base md:text-lg text-rose-700 mb-5 leading-relaxed">
                            {yourName} & {herName},
                            <br />
                            We completed our beautiful 100 days together. ✨💞
                        </p>
                        <button
                            onClick={() => setShowHundredDaysPopup(false)}
                            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Aww 💕
                        </button>
                    </div>
                </div>
            )}

            {/* BIRTHDAY POPUP */}
            {showBirthdayPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm px-4">
                    <div
                        className={`bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-xl w-full text-center border-4 border-pink-200 ${isBirthdayToday ? "animate-birthdayPopupStrong" : "animate-popupIn"
                            }`}
                    >
                        <div className={`text-5xl md:text-7xl mb-3 ${isBirthdayToday ? "animate-bounce" : "animate-bounce"}`}>
                            🎂
                        </div>

                        <h3 className="text-2xl md:text-5xl font-extrabold text-pink-600 mb-4 leading-tight">
                            {isBirthdayToday ? `Happy Birthday Khushi 🎉💖` : `Birthday Special for ${herName} 💖`}
                        </h3>

                        {isBirthdayToday ? (
                            <>
                                <p className="text-base md:text-xl text-rose-700 mb-6 leading-relaxed">
                                    Happy Birthday Khushi 💖🎂
                                    <br />
                                    May your day be full of smiles, hugs, love, happiness, and beautiful surprises. ✨💕
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                    <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                                        <p className="text-2xl md:text-4xl font-extrabold text-pink-600">00</p>
                                        <p className="text-sm md:text-base text-rose-600 font-semibold">Days</p>
                                    </div>
                                    <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                                        <p className="text-2xl md:text-4xl font-extrabold text-pink-600">00</p>
                                        <p className="text-sm md:text-base text-rose-600 font-semibold">Hours</p>
                                    </div>
                                    <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                                        <p className="text-2xl md:text-4xl font-extrabold text-pink-600">00</p>
                                        <p className="text-sm md:text-base text-rose-600 font-semibold">Minutes</p>
                                    </div>
                                    <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                                        <p className="text-2xl md:text-4xl font-extrabold text-pink-600">00</p>
                                        <p className="text-sm md:text-base text-rose-600 font-semibold">Seconds</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="text-base md:text-xl text-rose-700 mb-5 leading-relaxed">
                                    {herName}, your special day is coming soon... ✨
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 border border-pink-200 shadow-sm">
                                        <p className="text-2xl md:text-4xl font-extrabold text-pink-600">
                                            {formatTwo(birthdayCountdown.days)}
                                        </p>
                                        <p className="text-sm md:text-base text-rose-600 font-semibold">Days</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 border border-pink-200 shadow-sm">
                                        <p className="text-2xl md:text-4xl font-extrabold text-pink-600">
                                            {formatTwo(birthdayCountdown.hours)}
                                        </p>
                                        <p className="text-sm md:text-base text-rose-600 font-semibold">Hours</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 border border-pink-200 shadow-sm">
                                        <p className="text-2xl md:text-4xl font-extrabold text-pink-600">
                                            {formatTwo(birthdayCountdown.minutes)}
                                        </p>
                                        <p className="text-sm md:text-base text-rose-600 font-semibold">Minutes</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 border border-pink-200 shadow-sm animate-timerPulse">
                                        <p className="text-2xl md:text-4xl font-extrabold text-pink-600">
                                            {formatTwo(birthdayCountdown.seconds)}
                                        </p>
                                        <p className="text-sm md:text-base text-rose-600 font-semibold">Seconds</p>
                                    </div>
                                </div>

                                <p className="text-sm md:text-lg text-rose-600 mb-6">
                                    I hope your birthday is filled with love, smiles, hugs, happiness, and beautiful surprises. 🎉
                                </p>
                            </>
                        )}

                        <button
                            onClick={() => setShowBirthdayPopup(false)}
                            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            So Sweet 💕
                        </button>
                    </div>
                </div>
            )}

            {/* MAIN CARD (NOT SHOWN DURING COUNTDOWN) */}
            {screen !== "countdown" && (
                <div className="relative z-10 w-full max-w-6xl">
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl p-4 md:p-10 text-center">
                        {/* ================= LOADER ================= */}
                        {screen === "loader" && (
                            <div className="min-h-[560px] flex flex-col items-center justify-center rounded-3xl relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
                                <div className="absolute inset-0">{floatingHearts}</div>
                                <div className="absolute inset-0">{fallingPetals}</div>

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-pink-300 bg-white/80 flex items-center justify-center shadow-[0_0_35px_rgba(255,105,180,0.25)] animate-loaderPulse">
                                        <span className="text-3xl md:text-5xl font-extrabold text-pink-600">K + S</span>
                                    </div>

                                    <p className="mt-6 text-pink-600 text-xl md:text-3xl font-bold tracking-wide">
                                        Loading Your Love Story...
                                    </p>

                                    <div className="mt-6 w-56 h-2 bg-pink-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-pink-400 to-rose-500 animate-loaderBar rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ================= INTRO ================= */}
                        {screen === "intro" && (
                            <div className="animate-fadeInUp min-h-[560px] flex flex-col items-center justify-center rounded-3xl relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
                                <div className="absolute inset-0">{floatingHearts}</div>
                                <div className="absolute inset-0">{fallingPetals}</div>

                                <div className="relative z-10 px-6">
                                    <img
                                        src="/images/teddy.jpg"
                                        alt="Teddy Bear"
                                        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-pink-200 animate-float"
                                    />

                                    <h1 className="text-3xl md:text-6xl font-extrabold text-pink-600 mb-4">
                                        A Special Surprise For {herName} 💖
                                    </h1>

                                    <p className="text-base md:text-xl text-rose-700 mb-6 max-w-2xl mx-auto">
                                        {herName}, {yourName} made something magical just for you... ✨
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="bg-white/70 rounded-2xl shadow-lg p-5 border border-pink-200">
                                            <h3 className="text-lg md:text-xl font-bold text-pink-600 mb-2">Together Since 💞</h3>
                                            <p className="text-gray-700 font-medium">22 December 2025</p>
                                            <div className="mt-3 text-lg md:text-2xl font-bold text-rose-600">
                                                {relationshipTime.days}d {relationshipTime.hours}h {relationshipTime.minutes}m {relationshipTime.seconds}s
                                            </div>
                                        </div>

                                        <div className="bg-white/70 rounded-2xl shadow-lg p-5 border border-pink-200">
                                            <h3 className="text-lg md:text-xl font-bold text-pink-600">
                                                {birthdayCountdown.label}
                                            </h3>
                                            <p className="text-gray-700 font-medium">
                                                {isBirthdayToday ? "Today is 3 April 🎂" : "3 April 🎂"}
                                            </p>
                                            <div className="mt-3 text-lg md:text-2xl font-bold text-rose-600">
                                                {isBirthdayToday
                                                    ? "Happy Birthday Khushi 💖"
                                                    : `${birthdayCountdown.days}d ${birthdayCountdown.hours}h ${birthdayCountdown.minutes}m ${birthdayCountdown.seconds}s`}
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleStart}
                                        className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg md:text-xl font-semibold rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                                    >
                                        Start the Surprise 💌
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ================= Q1 ================= */}
                        {screen === "q1" && (
                            <div className="animate-fadeInUp">
                                <img
                                    src="/images/teddy.jpg"
                                    alt="Teddy Bear"
                                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-pink-200 animate-float"
                                />

                                <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4">
                                    Hey {herName} 💕
                                </h2>
                                <p className="text-lg md:text-2xl text-rose-700 mb-8">
                                    Are you ready for {yourName}'s little surprise? ✨
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        onClick={handleQ1}
                                        className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        Yes 💖
                                    </button>
                                    <button
                                        onClick={handleQ1}
                                        className="px-8 py-4 bg-white text-pink-600 border border-pink-300 text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        Of course 😘
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ================= Q2 ================= */}
                        {screen === "q2" && (
                            <div className="animate-fadeInUp">
                                <div className="text-5xl md:text-7xl mb-4 animate-heartbeat">💖</div>
                                <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4">One More Question 😍</h2>
                                <p className="text-lg md:text-2xl text-rose-700 mb-8">
                                    {herName}, do you know how much {yourName} loves you? 🥹
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        onClick={handleQ2}
                                        className="px-8 py-4 bg-white text-pink-600 border border-pink-300 text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        A lot 💕
                                    </button>
                                    <button
                                        onClick={handleQ2}
                                        className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        Infinite ❤️
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ================= ENVELOPE ================= */}
                        {screen === "envelope" && (
                            <div className="animate-fadeInUp">
                                <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4">
                                    A Love Letter For {herName} 💌
                                </h2>
                                <p className="text-lg md:text-2xl text-rose-700 mb-8">
                                    Opening {yourName}'s heart for you...
                                </p>

                                <div className="flex justify-center">
                                    <div className="relative w-72 md:w-96 h-64 md:h-80 flex items-center justify-center">
                                        <div
                                            className={`absolute left-1/2 -translate-x-1/2 w-48 md:w-64 bg-white rounded-2xl shadow-2xl border-2 border-pink-200 p-4 md:p-6 transition-all duration-1000 ${envelopeOpen
                                                ? "bottom-28 md:bottom-36 opacity-100 rotate-0 scale-100"
                                                : "bottom-14 md:bottom-20 opacity-0 rotate-6 scale-90"
                                                }`}
                                        >
                                            <p className="text-pink-600 font-bold text-sm md:text-lg">To: {herName} 💖</p>
                                            <p className="mt-2 text-rose-600 text-xs md:text-sm">From: {yourName} ❤️</p>
                                        </div>

                                        <div className="absolute bottom-0">
                                            <img
                                                src="/images/envelope.jpg"
                                                alt="Envelope"
                                                className={`w-64 md:w-80 drop-shadow-2xl transition-all duration-1000 ${envelopeOpen ? "scale-110 rotate-2" : "scale-100"
                                                    }`}
                                            />
                                        </div>

                                        {envelopeOpen && (
                                            <>
                                                <div className="absolute top-10 left-16 text-2xl md:text-3xl animate-floatMiniHeart">💖</div>
                                                <div className="absolute top-6 right-16 text-2xl md:text-3xl animate-floatMiniHeart2">💕</div>
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl md:text-4xl animate-floatMiniHeart3">❤️</div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ================= MESSAGE ================= */}
                        {screen === "message" && (
                            <div className="animate-fadeInUp">
                                <img
                                    src="/images/teddy.jpg"
                                    alt="Teddy Bear"
                                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-pink-200 animate-float"
                                />

                                <h2 className="text-3xl md:text-6xl font-extrabold text-pink-600 mb-4">
                                    For My Princess {herName} 💕
                                </h2>

                                <p className="text-lg md:text-2xl text-rose-700 font-medium mb-8 min-h-[150px] leading-relaxed max-w-3xl mx-auto">
                                    {displayedText}
                                    <span className="animate-pulse">|</span>
                                </p>
                            </div>
                        )}

                        {/* ================= GALLERY ================= */}
                        {screen === "gallery" && (
                            <div className="animate-fadeInUp">
                                <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4">
                                    Our Beautiful Memories 📸
                                </h2>
                                <p className="text-lg md:text-xl text-rose-700 mb-8">
                                    Every photo, every moment, every smile... means everything to {yourName} 💖
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                                    {galleryImages.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className={`bg-white/80 p-3 md:p-4 rounded-3xl shadow-2xl border border-pink-200 ${img.cls} ${img.rotate} hover:rotate-0 hover:scale-[1.02] transition-all duration-700`}
                                        >
                                            <div className="relative w-full h-[280px] md:h-[360px] bg-pink-50 rounded-2xl overflow-hidden">
                                                <img
                                                    src={img.src}
                                                    alt={img.title}
                                                    className="w-full h-full object-cover rounded-2xl"
                                                />

                                                <div className="absolute top-3 left-3 text-xl md:text-2xl animate-pulse">✨</div>
                                                <div className="absolute bottom-3 right-3 text-xl md:text-2xl animate-pulse">💖</div>
                                            </div>

                                            <p className="mt-3 text-base md:text-lg font-bold text-pink-600">{img.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ================= FINAL ================= */}
                        {screen === "final" && (
                            <div className="animate-fadeInUp relative z-30">
                                <img
                                    src="/images/teddy.jpg"
                                    alt="Teddy Bear"
                                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-pink-200 animate-float"
                                />

                                <div className="bg-white/80 border border-pink-200 rounded-3xl p-6 md:p-10 shadow-xl max-w-3xl mx-auto relative overflow-hidden">
                                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-lg mb-6 animate-badgePulse">
                                        💯 100 Days of Love
                                    </div>

                                    {isBirthdayToday && (
                                        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-300 animate-birthdayPopupStrong">
                                            <p className="text-xl md:text-3xl font-extrabold text-pink-600">
                                                🎂 Happy Birthday Khushi 💖
                                            </p>
                                        </div>
                                    )}

                                    <h2 className="text-3xl md:text-5xl font-bold text-rose-600 mb-4">
                                        My Final Message For {herName} 💌
                                    </h2>

                                    <div className="text-4xl md:text-6xl mb-6 animate-heartbeat">💖</div>

                                    <div className="space-y-4 min-h-[260px]">
                                        {displayedFinalLines.map((line, idx) => (
                                            <p key={idx} className="text-base md:text-xl text-gray-700 leading-8 animate-finalLineIn">
                                                {line}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="mt-6 p-4 rounded-2xl bg-pink-50 border border-pink-200">
                                        <p className="text-lg md:text-2xl font-bold text-pink-600">
                                            ✨ We completed our beautiful 100 days ✨
                                        </p>
                                    </div>

                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                                            <h3 className="text-lg font-bold text-pink-600">Together Since 💞</h3>
                                            <p className="mt-2 text-rose-600 font-semibold text-lg">
                                                {relationshipTime.days}d {relationshipTime.hours}h {relationshipTime.minutes}m {relationshipTime.seconds}s
                                            </p>
                                        </div>

                                        <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                                            <h3 className="text-lg font-bold text-pink-600">
                                                {isBirthdayToday ? "Birthday Today 🎂" : `${herName}'s Birthday 🎂`}
                                            </h3>
                                            <p className="mt-2 text-rose-600 font-semibold text-lg">
                                                {isBirthdayToday
                                                    ? "Happy Birthday Khushi 💖"
                                                    : `${birthdayCountdown.days}d ${birthdayCountdown.hours}h ${birthdayCountdown.minutes}m ${birthdayCountdown.seconds}s`}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-5 border border-pink-200">
                                        <h3 className="text-xl md:text-3xl font-bold text-pink-600 mb-4">
                                            💍 Will you always be mine? 💖
                                        </h3>

                                        {!finalQuestionAnswered ? (
                                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                <button
                                                    onClick={handleFinalYes}
                                                    className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                                >
                                                    Yes, Always 💕
                                                </button>
                                                <button
                                                    onClick={handleFinalYes}
                                                    className="px-8 py-3 bg-white text-pink-600 border border-pink-300 text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                                >
                                                    Forever ❤️
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="animate-fadeInUp">
                                                <p className="text-lg md:text-2xl font-bold text-rose-600">
                                                    Awww 🥹💖 {yourName} loves you forever, {herName}! ❤️
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-8">
                                        <button
                                            onClick={handleReadAgain}
                                            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                        >
                                            Read Again 💗
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes floatHeart {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.75;
          }
          50% {
            transform: translateY(-50vh) scale(1.15);
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) scale(0.85);
            opacity: 0;
          }
        }

        @keyframes fallPetal {
          0% {
            transform: translateY(-20px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          50% {
            transform: translateY(50vh) translateX(20px) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(-20px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes confettiFall {
          0% {
            transform: translateY(-40px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes starTwinkle {
          0% {
            opacity: 0.2;
            transform: scale(0.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
          100% {
            opacity: 0.2;
            transform: scale(0.7);
          }
        }

        @keyframes birthdayBurst {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          30% {
            opacity: 1;
            transform: scale(1.4);
          }
          100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }

        @keyframes birthdayPopupStrong {
          0% {
            transform: scale(0.65) rotate(-2deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.06) rotate(1deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes timerPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255, 105, 180, 0);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 0 18px rgba(255, 105, 180, 0.18);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          14% {
            transform: scale(1.15);
          }
          28% {
            transform: scale(1);
          }
          42% {
            transform: scale(1.15);
          }
          70% {
            transform: scale(1);
          }
        }

        @keyframes cinematicCount {
          0% {
            transform: scale(0.45);
            opacity: 0;
            filter: blur(8px);
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            transform: scale(1);
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes popupIn {
          0% {
            transform: scale(0.75);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes finalLineIn {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatMiniHeart {
          0% {
            transform: translateY(0px) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateY(-18px) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateY(-30px) scale(1);
            opacity: 0.8;
          }
        }

        @keyframes floatMiniHeart2 {
          0% {
            transform: translateY(0px) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateY(-22px) scale(1.15);
            opacity: 1;
          }
          100% {
            transform: translateY(-35px) scale(1);
            opacity: 0.8;
          }
        }

        @keyframes floatMiniHeart3 {
          0% {
            transform: translateY(0px) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translateY(-26px) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translateY(-40px) scale(1);
            opacity: 0.85;
          }
        }

        @keyframes loaderPulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 18px rgba(255, 105, 180, 0.18);
          }
          50% {
            transform: scale(1.06);
            box-shadow: 0 0 35px rgba(255, 105, 180, 0.28);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 18px rgba(255, 105, 180, 0.18);
          }
        }

        @keyframes loaderBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes badgePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes photoTopLeft {
          0% {
            opacity: 0;
            transform: translate(-160px, -120px) scale(0.8) rotate(-8deg);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(-2deg);
          }
        }

        @keyframes photoTopRight {
          0% {
            opacity: 0;
            transform: translate(160px, -120px) scale(0.8) rotate(8deg);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(2deg);
          }
        }

        @keyframes photoBottomLeft {
          0% {
            opacity: 0;
            transform: translate(-160px, 120px) scale(0.8) rotate(6deg);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(1deg);
          }
        }

        @keyframes photoBottomRight {
          0% {
            opacity: 0;
            transform: translate(160px, 120px) scale(0.8) rotate(-6deg);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(-1deg);
          }
        }

        .animate-floatHeart {
          animation-name: floatHeart;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .animate-fallPetal {
          animation-name: fallPetal;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .animate-confettiFall {
          animation-name: confettiFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .animate-starTwinkle {
          animation-name: starTwinkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .animate-birthdayBurst {
          animation-name: birthdayBurst;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .animate-birthdayPopupStrong {
          animation: birthdayPopupStrong 0.7s ease forwards;
        }

        .animate-timerPulse {
          animation: timerPulse 1.2s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }

        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 1.4s ease-in-out infinite;
        }

        .animate-cinematicCount {
          animation: cinematicCount 0.9s ease forwards;
        }

        .animate-popupIn {
          animation: popupIn 0.4s ease forwards;
        }

        .animate-finalLineIn {
          animation: finalLineIn 0.7s ease forwards;
        }

        .animate-floatMiniHeart {
          animation: floatMiniHeart 1.3s ease forwards;
        }

        .animate-floatMiniHeart2 {
          animation: floatMiniHeart2 1.5s ease forwards;
        }

        .animate-floatMiniHeart3 {
          animation: floatMiniHeart3 1.7s ease forwards;
        }

        .animate-loaderPulse {
          animation: loaderPulse 1.8s ease-in-out infinite;
        }

        .animate-loaderBar {
          animation: loaderBar 2s linear forwards;
        }

        .animate-badgePulse {
          animation: badgePulse 1.8s ease-in-out infinite;
        }

        .animate-photoTopLeft {
          animation: photoTopLeft 1.1s ease forwards;
        }

        .animate-photoTopRight {
          animation: photoTopRight 1.1s ease forwards;
        }

        .animate-photoBottomLeft {
          animation: photoBottomLeft 1.1s ease forwards;
        }

        .animate-photoBottomRight {
          animation: photoBottomRight 1.1s ease forwards;
        }
      `}</style>
        </div>
    );
}