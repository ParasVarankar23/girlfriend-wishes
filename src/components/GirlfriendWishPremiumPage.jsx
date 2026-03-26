"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function GirlfriendWishFinalPage() {
    const herName = "Khushi";
    const yourName = "Shrawan";

    // =========================================================
    // STABLE DATA
    // =========================================================
    const relationshipStart = useMemo(() => new Date("2025-12-22T00:00:00"), []);

    const loveMessage = useMemo(
        () =>
            `${herName}, you make my life beautiful. Your smile is my peace, your love is my happiness, and every moment with you feels magical. I am so lucky to have you in my life, Bhoke. 💖`,
        [herName]
    );

    const finalLines = useMemo(
        () => [
            `${herName}, you are my happiness and my peace. 💕`,
            `Every day with you feels more beautiful than the last one. ✨`,
            `I feel so lucky that you are in my life. 🥹💖`,
            `We completed our beautiful 100 days together. 💯💖`,
            `I Love You So Much ${herName} 😘💋❤️`,
            `Forever yours, ${yourName} ❤️`,
        ],
        [herName, yourName]
    );

    const galleryImages = useMemo(
        () => [
            {
                src: "/images/her1.jpeg",
                title: `${herName}, My Beautiful Girl 💕`,
                date: "23rd December 2025",
                cls: "animate-photoTopLeft",
                rotate: "-rotate-2",
            },
            {
                src: "/images/her2.jpeg",
                title: `The Smile I Love Most 😍`,
                date: "6th Jan 2026",
                cls: "animate-photoTopRight",
                rotate: "rotate-2",
            },
            {
                src: "/images/us1.jpeg",
                title: `${yourName} & ${herName} 💞`,
                date: "8th Jan 2026",
                cls: "animate-photoBottomLeft",
                rotate: "rotate-1",
            },
            {
                src: "/images/us2.jpeg",
                title: `Forever ${yourName} + ${herName} ❤️`,
                date: "5th March 2026",
                cls: "animate-photoBottomRight",
                rotate: "-rotate-1",
            },
        ],
        [herName, yourName]
    );

    // =========================================================
    // STATE
    // =========================================================
    const [screen, setScreen] = useState("loader");
    // loader -> intro -> birthdayTimer -> countdown -> q1 -> q2 -> envelope -> message -> gallery -> final

    const [countdown, setCountdown] = useState(3);
    const [birthdayCountdown, setBirthdayCountdown] = useState(5);

    const [displayedText, setDisplayedText] = useState("");
    const [displayedFinalLines, setDisplayedFinalLines] = useState([]);

    const [petals, setPetals] = useState([]);
    const [hearts, setHearts] = useState([]);
    const [confetti, setConfetti] = useState([]);
    const [stars, setStars] = useState([]);
    const [specialBurst, setSpecialBurst] = useState([]);

    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    const [envelopeOpen, setEnvelopeOpen] = useState(false);

    const [showSpecialPopup, setShowSpecialPopup] = useState(false);
    const [showHundredDaysPopup, setShowHundredDaysPopup] = useState(false);
    const [showBirthdayPopup, setShowBirthdayPopup] = useState(false);

    const [finalQuestionAnswered, setFinalQuestionAnswered] = useState(false);

    const [relationshipTime, setRelationshipTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const audioRef = useRef(null);

    // =========================================================
    // HELPERS
    // =========================================================
    const formatTwo = (num) => String(num).padStart(2, "0");

    // =========================================================
    // GENERATED BACKGROUND
    // =========================================================
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
            emoji: ["🎉", "✨", "🎊", "💖", "💕", "💋", "😘"][Math.floor(Math.random() * 7)],
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
        const burst = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 18 + 18,
            delay: Math.random() * 1.8,
            duration: Math.random() * 2 + 2,
            emoji: ["🎉", "🎊", "✨", "💖", "💋", "😘", "💕"][Math.floor(Math.random() * 7)],
        }));
        setSpecialBurst(burst);
    }, []);

    // =========================================================
    // RELATIONSHIP TIMER
    // =========================================================
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

    // =========================================================
    // LOADER -> INTRO
    // =========================================================
    useEffect(() => {
        if (screen !== "loader") return;

        const timer = setTimeout(() => {
            setScreen("intro");
        }, 2200);

        return () => clearTimeout(timer);
    }, [screen]);

    // =========================================================
    // BIRTHDAY TIMER SCREEN
    // =========================================================
    useEffect(() => {
        if (screen !== "birthdayTimer") return;

        setBirthdayCountdown(5);

        const interval = setInterval(() => {
            setBirthdayCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setShowBirthdayPopup(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [screen]);

    // =========================================================
    // AUTO CLOSE BIRTHDAY POPUP
    // =========================================================
    useEffect(() => {
        if (!showBirthdayPopup) return;

        const timer = setTimeout(() => {
            setShowBirthdayPopup(false);
            setScreen("countdown");
        }, 4500);

        return () => clearTimeout(timer);
    }, [showBirthdayPopup]);

    // =========================================================
    // COUNTDOWN
    // =========================================================
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

    // =========================================================
    // ENVELOPE
    // =========================================================
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

    // =========================================================
    // MESSAGE TYPEWRITER
    // =========================================================
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

    // =========================================================
    // MESSAGE -> GALLERY
    // =========================================================
    useEffect(() => {
        if (screen !== "message") return;

        const timer = setTimeout(() => {
            setScreen("gallery");
        }, 7600);

        return () => clearTimeout(timer);
    }, [screen]);

    // =========================================================
    // GALLERY -> FINAL
    // =========================================================
    useEffect(() => {
        if (screen !== "gallery") return;

        const timer = setTimeout(() => {
            setScreen("final");
        }, 7200);

        return () => clearTimeout(timer);
    }, [screen]);

    // =========================================================
    // FINAL SCREEN CONTENT
    // =========================================================
    useEffect(() => {
        if (screen !== "final") return;

        setDisplayedFinalLines([]);
        setShowHundredDaysPopup(false);
        setShowSpecialPopup(false);
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
        }, 1800);
        timers.push(hundredTimer);

        const kissTimer = setTimeout(() => {
            setShowSpecialPopup(true);
        }, 4200);
        timers.push(kissTimer);

        return () => {
            timers.forEach((timer) => clearTimeout(timer));
        };
    }, [screen, finalLines]);

    // =========================================================
    // START MUSIC
    // =========================================================
    const startMusic = async () => {
        try {
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.volume = 0.6;
                const playPromise = audioRef.current.play();

                if (playPromise !== undefined) {
                    await playPromise;
                }

                setIsMusicPlaying(true);
            }
        } catch (error) {
            console.log("Autoplay blocked by browser:", error);
        }
    };

    const toggleMusic = async () => {
        try {
            if (!audioRef.current) return;

            if (isMusicPlaying) {
                audioRef.current.pause();
                setIsMusicPlaying(false);
            } else {
                audioRef.current.volume = 0.6;
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    await playPromise;
                }
                setIsMusicPlaying(true);
            }
        } catch (error) {
            console.log("Music toggle error:", error);
        }
    };

    // =========================================================
    // HANDLERS
    // =========================================================
    const handleStartSurprise = async () => {
        await startMusic();
        setScreen("birthdayTimer");
    };

    const handleQ1Answer = () => {
        setScreen("q2");
    };

    const handleQ2Answer = () => {
        setScreen("envelope");
    };

    const handleReadAgain = async () => {
        setDisplayedText("");
        setDisplayedFinalLines([]);
        setShowHundredDaysPopup(false);
        setShowSpecialPopup(false);
        setShowBirthdayPopup(false);
        setFinalQuestionAnswered(false);
        setEnvelopeOpen(false);
        setCountdown(3);
        setBirthdayCountdown(5);
        setScreen("intro");

        try {
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.volume = 0.6;
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    await playPromise;
                }
                setIsMusicPlaying(true);
            }
        } catch (error) {
            console.log("Replay music blocked:", error);
        }
    };

    const handleFinalYes = () => {
        setFinalQuestionAnswered(true);
    };

    // =========================================================
    // MEMO RENDER HELPERS
    // =========================================================
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

    const specialBurstEffect = useMemo(
        () =>
            specialBurst.map((item) => (
                <div
                    key={item.id}
                    className="absolute animate-specialBurst pointer-events-none select-none"
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
        [specialBurst]
    );

    // =========================================================
    // RENDER
    // =========================================================
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center px-4 py-8">
            {/* AUDIO */}
            <audio ref={audioRef} loop preload="auto">
                <source src="/music/romantic.mp3" type="audio/mpeg" />
            </audio>

            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">{floatingHearts}</div>
            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">{fallingPetals}</div>


            {/* BIRTHDAY TIMER FULL SCREEN */}
            {screen === "birthdayTimer" && (
                <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-pink-100/98 via-rose-50/98 to-purple-100/98 backdrop-blur-md overflow-hidden px-4">
                    <div className="absolute inset-0 pointer-events-none">{floatingHearts}</div>
                    <div className="absolute inset-0 pointer-events-none">{fallingPetals}</div>
                    <div className="absolute inset-0 pointer-events-none">{starsEffect}</div>

                    <p className="relative z-10 text-pink-700 text-xl md:text-3xl font-semibold mb-8 text-center">
                        A special surprise is unlocking for {herName}... 🎂💖
                    </p>

                    <div className="relative z-10 bg-white/85 border-[6px] border-pink-300 rounded-3xl px-6 py-8 md:px-10 md:py-10 shadow-[0_0_60px_rgba(255,105,180,0.25)]">
                        <div className="grid grid-cols-4 gap-3 md:gap-5">
                            <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200 min-w-[70px] md:min-w-[100px]">
                                <p className="text-3xl md:text-6xl font-extrabold text-pink-600">00</p>
                                <p className="text-xs md:text-base text-rose-600 font-semibold">Days</p>
                            </div>
                            <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200 min-w-[70px] md:min-w-[100px]">
                                <p className="text-3xl md:text-6xl font-extrabold text-pink-600">00</p>
                                <p className="text-xs md:text-base text-rose-600 font-semibold">Hours</p>
                            </div>
                            <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200 min-w-[70px] md:min-w-[100px]">
                                <p className="text-3xl md:text-6xl font-extrabold text-pink-600">00</p>
                                <p className="text-xs md:text-base text-rose-600 font-semibold">Minutes</p>
                            </div>
                            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-4 border border-pink-200 min-w-[70px] md:min-w-[100px] animate-timerPulse">
                                <p className="text-3xl md:text-6xl font-extrabold text-pink-600">{formatTwo(birthdayCountdown)}</p>
                                <p className="text-xs md:text-base text-rose-600 font-semibold">Seconds</p>
                            </div>
                        </div>
                    </div>

                    <p className="relative z-10 mt-8 text-rose-600 text-base md:text-2xl font-medium animate-pulse text-center">
                        Birthday popup opening in {formatTwo(birthdayCountdown)} seconds... 💕
                    </p>
                </div>
            )}

            {/* COUNTDOWN FULL SCREEN */}
            {screen === "countdown" && (
                <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-pink-100/98 via-rose-50/98 to-purple-100/98 backdrop-blur-md overflow-hidden px-4">
                    <div className="absolute inset-0 pointer-events-none">{floatingHearts}</div>
                    <div className="absolute inset-0 pointer-events-none">{fallingPetals}</div>
                    <div className="absolute inset-0 pointer-events-none">{starsEffect}</div>

                    <p className="relative z-10 text-pink-700 text-xl md:text-3xl font-semibold mb-8 text-center">
                        Get ready {herName}... 💖
                    </p>

                    <div className="relative z-10 w-56 h-56 md:w-80 md:h-80 rounded-full bg-white/85 border-[8px] border-pink-300 shadow-[0_0_60px_rgba(255,105,180,0.25)] flex items-center justify-center">
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

            {/* SPECIAL BURST */}
            {showSpecialPopup && (
                <div className="absolute inset-0 overflow-hidden z-[90] pointer-events-none">{specialBurstEffect}</div>
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
                        <h3 className="text-2xl md:text-4xl font-extrabold text-pink-600 mb-3">100 Days of Love 💖</h3>
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
                <div className="fixed inset-0 z-[120] flex items-center justify-center bg-white/30 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-xl w-full text-center border-4 border-pink-200 animate-specialPopupStrong relative overflow-hidden">
                        <div className="absolute inset-0 pointer-events-none">{confettiEffect}</div>

                        <div className="relative z-10">
                            <div className="text-5xl md:text-7xl mb-3 animate-bounce">🎂🎉💖</div>

                            <h3 className="text-2xl md:text-5xl font-extrabold text-pink-600 mb-4 leading-tight">
                                Happy Birthday {herName} 🎂💖
                            </h3>

                            <p className="text-base md:text-xl text-rose-700 mb-6 leading-relaxed">
                                Today is your special day, my love ✨
                                <br />
                                {yourName} wishes you all the happiness, smiles, love, and beautiful moments forever 💕
                            </p>

                            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-5 border border-pink-200 mb-4">
                                <p className="text-xl md:text-3xl font-extrabold text-rose-600">Happy Birthday Bhoke 💖🎂✨</p>
                                <p className="mt-3 text-lg md:text-2xl font-bold text-pink-600">I Love You So Much 😘💋❤️</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* SPECIAL KISS POPUP */}
            {showSpecialPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 max-w-xl w-full text-center border-4 border-pink-200 animate-specialPopupStrong">
                        <div className="text-5xl md:text-7xl mb-3 animate-bounce">😘💋</div>

                        <h3 className="text-2xl md:text-5xl font-extrabold text-pink-600 mb-4 leading-tight">
                            A Special Kiss For {herName} 😘💋💖
                        </h3>

                        <p className="text-base md:text-xl text-rose-700 mb-6 leading-relaxed">
                            This kiss is only for my love {herName} 💖
                            <br />
                            I Love You So Much 😘💋❤️
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                            {["Love", "Kiss", "Forever", "Us"].map((label, idx) => (
                                <div key={idx} className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                                    <p className="text-2xl md:text-4xl font-extrabold text-pink-600">
                                        {["💖", "💋", "❤️", "💕"][idx]}
                                    </p>
                                    <p className="text-sm md:text-base text-rose-600 font-semibold">{label}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm md:text-lg text-rose-600 mb-6">My heart always belongs to you 😘💋💕</p>

                        <button
                            onClick={() => setShowSpecialPopup(false)}
                            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            So Sweet 😘💋
                        </button>
                    </div>
                </div>
            )}

            {/* MAIN CARD */}
            {screen !== "countdown" && screen !== "birthdayTimer" && (
                <div className="relative z-10 w-full max-w-[1800px]">
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl p-4 md:p-10 text-center">
                        {/* LOADER */}
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

                        {/* INTRO */}
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

                                    <div className="grid grid-cols-1 gap-4 mb-8 max-w-xl mx-auto">
                                        <div className="bg-white/70 rounded-2xl shadow-lg p-5 border border-pink-200">
                                            <h3 className="text-lg md:text-xl font-bold text-pink-600 mb-2">Together Since 💞</h3>
                                            <p className="text-gray-700 font-medium">22 December 2025</p>
                                            <div className="mt-3 text-lg md:text-2xl font-bold text-rose-600">
                                                {relationshipTime.days}d {relationshipTime.hours}h {relationshipTime.minutes}m{" "}
                                                {relationshipTime.seconds}s
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                                        <button
                                            onClick={handleStartSurprise}
                                            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                        >
                                            Start the Surprise 💖
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Q1 */}
                        {screen === "q1" && (
                            <div className="animate-fadeInUp min-h-[520px] flex flex-col items-center justify-center">
                                <img
                                    src="/images/teddy.jpg"
                                    alt="Teddy Bear"
                                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-pink-200 animate-float"
                                />

                                <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4">Hey {herName} 💕</h2>
                                <p className="text-lg md:text-2xl text-rose-700 mb-8">
                                    Are you ready for {yourName}&apos;s little surprise? ✨
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        onClick={handleQ1Answer}
                                        className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        Yes I&apos;m Ready 💖
                                    </button>

                                    <button
                                        onClick={handleQ1Answer}
                                        className="px-8 py-3 bg-white text-pink-600 border border-pink-300 text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        Always Ready ✨
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Q2 */}
                        {screen === "q2" && (
                            <div className="animate-fadeInUp min-h-[520px] flex flex-col items-center justify-center">
                                <div className="text-5xl md:text-7xl mb-4 animate-heartbeat">💖</div>
                                <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4">One More Question 😍</h2>
                                <p className="text-lg md:text-2xl text-rose-700 mb-8">
                                    {herName}, do you know how much {yourName} loves you? 🥹
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        onClick={handleQ2Answer}
                                        className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        So Much 💕
                                    </button>

                                    <button
                                        onClick={handleQ2Answer}
                                        className="px-8 py-3 bg-white text-pink-600 border border-pink-300 text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                    >
                                        Infinite ❤️
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* ENVELOPE */}
                        {screen === "envelope" && (
                            <div className="animate-fadeInUp min-h-[580px] flex flex-col items-center justify-center">
                                <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4">A Love Letter For {herName} 💌</h2>
                                <p className="text-lg md:text-2xl text-rose-700 mb-8">Opening {yourName}&apos;s heart for you...</p>

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
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl md:text-4xl animate-floatMiniHeart3">
                                                    ❤️
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* MESSAGE */}
                        {screen === "message" && (
                            <div className="animate-fadeInUp min-h-[560px] flex flex-col items-center justify-center">
                                <img
                                    src="/images/teddy.jpg"
                                    alt="Teddy Bear"
                                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-pink-200 animate-float"
                                />

                                <h2 className="text-3xl md:text-6xl font-extrabold text-pink-600 mb-4">For My Princess {herName} 💕</h2>

                                <p className="text-lg md:text-2xl text-rose-700 font-medium mb-8 min-h-[150px] leading-relaxed max-w-3xl mx-auto">
                                    {displayedText}
                                    <span className="animate-pulse">|</span>
                                </p>
                            </div>
                        )}

                        {/* GALLERY */}
                        {screen === "gallery" && (
                            <div className="animate-fadeInUp">
                                <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4">Our Beautiful Memories 📸</h2>

                                <p className="text-lg md:text-xl text-rose-700 mb-8">
                                    Every photo, every moment, every smile... means everything to {yourName} 💖
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                                    {galleryImages.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className={`bg-white/85 p-3 md:p-4 rounded-3xl shadow-2xl border border-pink-200 ${img.cls} ${img.rotate} hover:rotate-0 hover:scale-[1.02] transition-all duration-700`}
                                        >
                                            <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 shadow-inner p-3">
                                                <div className="relative w-full h-[360px] md:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                                                    <img src={img.src} alt={img.title} className="w-full h-full object-contain rounded-2xl" />

                                                    <div className="absolute top-3 left-3 text-xl md:text-2xl animate-pulse">✨</div>
                                                    <div className="absolute bottom-3 right-3 text-xl md:text-2xl animate-pulse">💖</div>

                                                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-pink-200 text-pink-600 text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-100 text-[10px]">
                                                            📅
                                                        </span>
                                                        <span>{img.date}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="mt-4 text-base md:text-xl font-bold text-pink-600 leading-snug">{img.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* FINAL */}
                        {screen === "final" && (
                            <div className="animate-fadeInUp relative z-30 min-h-[2300px] xl:min-h-[2500px] flex flex-col items-center justify-center py-16">
                                {/* FLOATING POLAROID IMAGES AROUND FINAL CONTENT - DESKTOP */}
                                <div className="pointer-events-none absolute inset-0 z-40 hidden xl:block">
                                    {/* TOP LEFT - her4 */}
                                    <div className="absolute top-16 left-[-10px] 2xl:left-6 animate-cornerTopLeft">
                                        <div className="w-[220px] 2xl:w-[250px] bg-white rounded-[2rem] shadow-2xl border-2 border-pink-200 p-3 rotate-[-8deg]">
                                            <div className="bg-white rounded-[1.5rem] p-3">
                                                <div className="relative w-full h-[260px] 2xl:h-[290px] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                                                    <img
                                                        src="/images/her4.jpeg"
                                                        alt={`${herName} special memory`}
                                                        className="w-full h-full object-contain rounded-2xl"
                                                    />
                                                    <div className="absolute top-2 right-2 text-xl animate-pulse">💋</div>

                                                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-pink-200 text-pink-600 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-100 text-[10px]">
                                                            📅
                                                        </span>
                                                        <span>Special Memory</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-3 text-sm 2xl:text-lg font-bold text-pink-600 text-center">
                                                {herName} My Cutie 😘
                                            </p>
                                        </div>
                                    </div>

                                    {/* TOP RIGHT - her3 */}
                                    <div className="absolute top-16 right-[-10px] 2xl:right-6 animate-cornerTopRight">
                                        <div className="w-[220px] 2xl:w-[250px] bg-white rounded-[2rem] shadow-2xl border-2 border-pink-200 p-3 rotate-[8deg]">
                                            <div className="bg-white rounded-[1.5rem] p-3">
                                                <div className="relative w-full h-[260px] 2xl:h-[290px] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                                                    <img
                                                        src="/images/her3.jpeg"
                                                        alt={`${herName} special smile`}
                                                        className="w-full h-full object-contain rounded-2xl"
                                                    />
                                                    <div className="absolute top-2 left-2 text-xl animate-pulse">✨</div>

                                                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-pink-200 text-pink-600 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-100 text-[10px]">
                                                            📅
                                                        </span>
                                                        <span>30 Sept 2025</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-3 text-sm 2xl:text-lg font-bold text-pink-600 text-center">
                                                {herName} Special Smile 💖
                                            </p>
                                        </div>
                                    </div>

                                    {/* BOTTOM LEFT - us3 */}
                                    <div className="absolute bottom-32 left-[-10px] 2xl:left-6 animate-cornerBottomLeft">
                                        <div className="w-[250px] 2xl:w-[290px] bg-white rounded-[2rem] shadow-2xl border-2 border-pink-200 p-3 rotate-[8deg]">
                                            <div className="bg-white rounded-[1.5rem] p-3">
                                                <div className="relative w-full h-[180px] 2xl:h-[210px] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                                                    <img
                                                        src="/images/us3.jpeg"
                                                        alt={`${yourName} and ${herName}`}
                                                        className="w-full h-full object-contain rounded-2xl"
                                                    />
                                                    <div className="absolute top-2 right-2 text-xl animate-pulse">⭐</div>

                                                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-pink-200 text-pink-600 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-100 text-[10px]">
                                                            📅
                                                        </span>
                                                        <span>16 March 2026</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-3 text-sm 2xl:text-lg font-bold text-pink-600 text-center">
                                                {yourName} & {herName} 💞
                                            </p>
                                        </div>
                                    </div>

                                    {/* BOTTOM RIGHT - us4 */}
                                    <div className="absolute bottom-32 right-[-10px] 2xl:right-6 animate-cornerBottomRight">
                                        <div className="w-[250px] 2xl:w-[290px] bg-white rounded-[2rem] shadow-2xl border-2 border-pink-200 p-3 rotate-[-8deg]">
                                            <div className="bg-white rounded-[1.5rem] p-3">
                                                <div className="relative w-full h-[180px] 2xl:h-[210px] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                                                    <img
                                                        src="/images/us4.jpeg"
                                                        alt={`Forever ${yourName} and ${herName}`}
                                                        className="w-full h-full object-contain rounded-2xl"
                                                    />
                                                    <div className="absolute top-2 left-2 text-xl animate-pulse">💖</div>

                                                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-pink-200 text-pink-600 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-pink-100 text-[10px]">
                                                            📅
                                                        </span>
                                                        <span>5 March 2026</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-3 text-sm 2xl:text-lg font-bold text-pink-600 text-center">
                                                Forever {yourName} + {herName} 💕
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* MOBILE / TABLET VERSION */}
                                <div className="w-full max-w-6xl mx-auto mb-8 xl:hidden">
                                    <h3 className="text-2xl md:text-4xl font-extrabold text-pink-600 mb-6 text-center">
                                        More Special Memories 📸💕
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {[
                                            {
                                                src: "/images/her4.jpeg",
                                                title: `${herName} My Cutie 😘`,
                                                date: "Special Memory",
                                                rotate: "-rotate-2",
                                            },
                                            {
                                                src: "/images/her3.jpeg",
                                                title: `${herName} Special Smile 💖`,
                                                date: "30 Sept 2025",
                                                rotate: "rotate-2",
                                            },
                                            {
                                                src: "/images/us3.jpeg",
                                                title: `${yourName} & ${herName} 💞`,
                                                date: "16 March 2026",
                                                rotate: "rotate-1",
                                            },
                                            {
                                                src: "/images/us4.jpeg",
                                                title: `Forever ${yourName} + ${herName} 💕`,
                                                date: "5 March 2026",
                                                rotate: "-rotate-1",
                                            },
                                        ].map((img, idx) => (
                                            <div
                                                key={idx}
                                                className={`bg-white p-3 rounded-3xl shadow-2xl border-2 border-pink-200 ${img.rotate}`}
                                            >
                                                <div className="relative w-full h-[250px] rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                                                    <img src={img.src} alt={img.title} className="w-full h-full object-contain rounded-2xl" />

                                                    <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-pink-50/90 text-pink-700 text-xs font-semibold px-2 py-1.5 rounded-lg shadow-sm">
                                                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-[12px]">📅</span>
                                                        <span>{img.date}</span>
                                                    </div>
                                                </div>

                                                <p className="mt-3 text-sm md:text-base font-bold text-pink-600 text-center">{img.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <img
                                    src="/images/teddy.jpg"
                                    alt="Teddy Bear"
                                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4 shadow-lg border-4 border-pink-200 animate-float z-30"
                                />

                                {/* MAIN CENTER FINAL CARD */}
                                <div className="bg-white/85 border border-pink-200 rounded-3xl p-6 md:p-10 shadow-xl w-full max-w-3xl xl:max-w-4xl mx-auto relative overflow-hidden z-20">
                                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-lg mb-6 animate-badgePulse">
                                        💯 100 Days of Love
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-bold text-rose-600 mb-4">My Final Message For {herName} 💌</h2>

                                    <div className="text-4xl md:text-6xl mb-6 animate-heartbeat">💖😘💋</div>

                                    <div className="space-y-4 min-h-[260px]">
                                        {displayedFinalLines.map((line, idx) => (
                                            <p key={idx} className="text-base md:text-xl text-gray-700 leading-8 animate-finalLineIn">
                                                {line}
                                            </p>
                                        ))}
                                    </div>

                                    <div className="mt-6 p-4 rounded-2xl bg-pink-50 border border-pink-200">
                                        <p className="text-lg md:text-2xl font-bold text-pink-600">✨ We completed our beautiful 100 days ✨</p>
                                    </div>

                                    <div className="mt-8 grid grid-cols-1 gap-4">
                                        <div className="bg-pink-50 rounded-2xl p-4 border border-pink-200">
                                            <h3 className="text-lg font-bold text-pink-600">Together Since 💞</h3>
                                            <p className="mt-2 text-rose-600 font-semibold text-lg">
                                                {relationshipTime.days}d {relationshipTime.hours}h {relationshipTime.minutes}m{" "}
                                                {relationshipTime.seconds}s
                                            </p>
                                        </div>
                                    </div>

                                    {/* SPECIAL VIDEO SECTION */}
                                    <div className="mt-10">
                                        <h3 className="text-2xl md:text-4xl font-extrabold text-pink-600 mb-6">Our Special Video 🎥💖</h3>

                                        <div className="bg-white/90 p-4 rounded-3xl shadow-2xl border border-pink-200">
                                            <div className="rounded-3xl overflow-hidden bg-black relative z-40">
                                                <video
                                                    src="/videos/special.mp4"
                                                    poster="/images/us3.jpeg"
                                                    controls
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-full h-[260px] md:h-[500px] object-cover"
                                                />
                                            </div>

                                            <p className="mt-4 text-base md:text-xl font-bold text-rose-600">
                                                Every second with you is special, {herName} 💖
                                            </p>
                                        </div>
                                    </div>

                                    {/* SPECIAL KISS BOX */}
                                    <div className="mt-8 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 rounded-3xl p-6 md:p-8 border-2 border-pink-200 shadow-xl relative overflow-hidden">
                                        <div className="absolute top-3 left-4 text-2xl md:text-3xl animate-kissFloat1">💋</div>
                                        <div className="absolute top-4 right-5 text-2xl md:text-3xl animate-kissFloat2">😘</div>
                                        <div className="absolute bottom-4 left-6 text-2xl md:text-3xl animate-kissFloat3">💖</div>
                                        <div className="absolute bottom-3 right-6 text-2xl md:text-3xl animate-kissFloat4">💕</div>

                                        <h3 className="text-2xl md:text-4xl font-extrabold text-pink-600 mb-4">💍 Will you always be mine? 💖</h3>

                                        <p className="text-base md:text-xl text-rose-700 font-medium mb-6 leading-relaxed">
                                            {herName}, you are the most special part of {yourName}&apos;s life.
                                            <br />
                                            I Love You So Much 😘💋❤️
                                        </p>

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
                                                <div className="bg-white/80 rounded-3xl p-5 md:p-6 border border-pink-200 shadow-md">
                                                    <div className="text-4xl md:text-6xl mb-3 animate-heartbeat">😘💋❤️</div>
                                                    <p className="text-xl md:text-3xl font-extrabold text-rose-600 leading-relaxed">
                                                        Awww 🥹💖 {yourName} loves you forever, {herName}! ❤️
                                                    </p>
                                                    <p className="mt-3 text-lg md:text-2xl font-bold text-pink-600">I Love You So Much 😘💋💕</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* I LOVE YOU BOX */}
                                    <div className="mt-8 bg-gradient-to-r from-rose-100 via-pink-100 to-purple-100 rounded-3xl p-6 md:p-8 border-2 border-pink-200 shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-4 left-4 text-2xl md:text-3xl animate-kissFloat1">💋</div>
                                        <div className="absolute top-4 right-4 text-2xl md:text-3xl animate-kissFloat2">😘</div>
                                        <div className="absolute bottom-4 left-4 text-2xl md:text-3xl animate-kissFloat3">💕</div>
                                        <div className="absolute bottom-4 right-4 text-2xl md:text-3xl animate-kissFloat4">❤️</div>

                                        <h3 className="text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-red-500 animate-loveGlow">
                                            Happy Birthday Kushi
                                        </h3>

                                        <p className="mt-4 text-base md:text-2xl text-rose-700 font-semibold leading-relaxed">
                                            {herName}, you are my heart, my smile, my happiness, and my forever. 💖
                                            <br />
                                            Every heartbeat of {yourName} says only one thing...
                                        </p>

                                        <p className="mt-4 text-2xl md:text-4xl font-extrabold text-pink-600 animate-heartbeat">
                                            I LOVE YOU SO MUCH 😘💋💕
                                        </p>
                                    </div>

                                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.75; }
          50% { transform: translateY(-50vh) scale(1.15); opacity: 1; }
          100% { transform: translateY(-110vh) scale(0.85); opacity: 0; }
        }

        @keyframes fallPetal {
          0% { transform: translateY(-20px) translateX(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.9; }
          50% { transform: translateY(50vh) translateX(20px) rotate(180deg); opacity: 1; }
          100% { transform: translateY(110vh) translateX(-20px) rotate(360deg); opacity: 0; }
        }

        @keyframes confettiFall {
          0% { transform: translateY(-40px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }

        @keyframes starTwinkle {
          0% { opacity: 0.2; transform: scale(0.7); }
          50% { opacity: 1; transform: scale(1.25); }
          100% { opacity: 0.2; transform: scale(0.7); }
        }

        @keyframes specialBurst {
          0% { opacity: 0; transform: scale(0.5); }
          30% { opacity: 1; transform: scale(1.4); }
          100% { opacity: 0; transform: scale(0.8); }
        }

        @keyframes specialPopupStrong {
          0% { transform: scale(0.65) rotate(-2deg); opacity: 0; }
          50% { transform: scale(1.06) rotate(1deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes timerPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 rgba(255, 105, 180, 0); }
          50% { transform: scale(1.04); box-shadow: 0 0 18px rgba(255, 105, 180, 0.18); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.15); }
          28% { transform: scale(1); }
          42% { transform: scale(1.15); }
          70% { transform: scale(1); }
        }

        @keyframes cinematicCount {
          0% { transform: scale(0.45); opacity: 0; filter: blur(8px); }
          40% { transform: scale(1.2); opacity: 1; filter: blur(0px); }
          100% { transform: scale(1); opacity: 1; filter: blur(0px); }
        }

        @keyframes popupIn {
          0% { transform: scale(0.75); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes finalLineIn {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatMiniHeart {
          0% { transform: translateY(0px) scale(0.8); opacity: 0; }
          50% { transform: translateY(-18px) scale(1.1); opacity: 1; }
          100% { transform: translateY(-30px) scale(1); opacity: 0.8; }
        }

        @keyframes floatMiniHeart2 {
          0% { transform: translateY(0px) scale(0.8); opacity: 0; }
          50% { transform: translateY(-22px) scale(1.15); opacity: 1; }
          100% { transform: translateY(-35px) scale(1); opacity: 0.8; }
        }

        @keyframes floatMiniHeart3 {
          0% { transform: translateY(0px) scale(0.8); opacity: 0; }
          50% { transform: translateY(-26px) scale(1.2); opacity: 1; }
          100% { transform: translateY(-40px) scale(1); opacity: 0.85; }
        }

        @keyframes loaderPulse {
          0% { transform: scale(1); box-shadow: 0 0 18px rgba(255, 105, 180, 0.18); }
          50% { transform: scale(1.06); box-shadow: 0 0 35px rgba(255, 105, 180, 0.28); }
          100% { transform: scale(1); box-shadow: 0 0 18px rgba(255, 105, 180, 0.18); }
        }

        @keyframes loaderBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes photoTopLeft {
          0% { opacity: 0; transform: translate(-160px, -120px) scale(0.8) rotate(-8deg); }
          100% { opacity: 1; transform: translate(0, 0) scale(1) rotate(-2deg); }
        }

        @keyframes photoTopRight {
          0% { opacity: 0; transform: translate(160px, -120px) scale(0.8) rotate(8deg); }
          100% { opacity: 1; transform: translate(0, 0) scale(1) rotate(2deg); }
        }

        @keyframes photoBottomLeft {
          0% { opacity: 0; transform: translate(-160px, 120px) scale(0.8) rotate(6deg); }
          100% { opacity: 1; transform: translate(0, 0) scale(1) rotate(1deg); }
        }

        @keyframes photoBottomRight {
          0% { opacity: 0; transform: translate(160px, 120px) scale(0.8) rotate(-6deg); }
          100% { opacity: 1; transform: translate(0, 0) scale(1) rotate(-1deg); }
        }

        @keyframes cornerTopLeft {
          0% {
            opacity: 0;
            transform: translate(-220px, -180px) scale(0.6) rotate(-20deg);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
            filter: blur(0);
          }
        }

        @keyframes cornerTopRight {
          0% {
            opacity: 0;
            transform: translate(220px, -180px) scale(0.6) rotate(20deg);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
            filter: blur(0);
          }
        }

        @keyframes cornerBottomLeft {
          0% {
            opacity: 0;
            transform: translate(-220px, 180px) scale(0.6) rotate(20deg);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
            filter: blur(0);
          }
        }

        @keyframes cornerBottomRight {
          0% {
            opacity: 0;
            transform: translate(220px, 180px) scale(0.6) rotate(-20deg);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
            filter: blur(0);
          }
        }

        @keyframes kissFloat1 {
          0%, 100% { transform: translateY(0px) scale(1) rotate(-8deg); }
          50% { transform: translateY(-8px) scale(1.12) rotate(-2deg); }
        }

        @keyframes kissFloat2 {
          0%, 100% { transform: translateY(0px) scale(1) rotate(8deg); }
          50% { transform: translateY(-10px) scale(1.15) rotate(2deg); }
        }

        @keyframes kissFloat3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-7px) scale(1.08); }
        }

        @keyframes kissFloat4 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-9px) scale(1.1); }
        }

        @keyframes loveGlow {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0px rgba(244, 114, 182, 0.2));
          }
          50% {
            transform: scale(1.03);
            filter: drop-shadow(0 0 12px rgba(244, 114, 182, 0.35));
          }
        }

        .animate-floatHeart { animation-name: floatHeart; animation-timing-function: linear; animation-iteration-count: infinite; }
        .animate-fallPetal { animation-name: fallPetal; animation-timing-function: linear; animation-iteration-count: infinite; }
        .animate-confettiFall { animation-name: confettiFall; animation-timing-function: linear; animation-iteration-count: infinite; }
        .animate-starTwinkle { animation-name: starTwinkle; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        .animate-specialBurst { animation-name: specialBurst; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
        .animate-specialPopupStrong { animation: specialPopupStrong 0.7s ease forwards; }
        .animate-timerPulse { animation: timerPulse 1.2s ease-in-out infinite; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }
        .animate-float { animation: float 2.5s ease-in-out infinite; }
        .animate-heartbeat { animation: heartbeat 1.4s ease-in-out infinite; }
        .animate-cinematicCount { animation: cinematicCount 0.9s ease forwards; }
        .animate-popupIn { animation: popupIn 0.4s ease forwards; }
        .animate-finalLineIn { animation: finalLineIn 0.7s ease forwards; }
        .animate-floatMiniHeart { animation: floatMiniHeart 1.3s ease forwards; }
        .animate-floatMiniHeart2 { animation: floatMiniHeart2 1.5s ease forwards; }
        .animate-floatMiniHeart3 { animation: floatMiniHeart3 1.7s ease forwards; }
        .animate-loaderPulse { animation: loaderPulse 1.8s ease-in-out infinite; }
        .animate-loaderBar { animation: loaderBar 2s linear forwards; }
        .animate-badgePulse { animation: badgePulse 1.8s ease-in-out infinite; }
        .animate-photoTopLeft { animation: photoTopLeft 1.1s ease forwards; }
        .animate-photoTopRight { animation: photoTopRight 1.1s ease forwards; }
        .animate-photoBottomLeft { animation: photoBottomLeft 1.1s ease forwards; }
        .animate-photoBottomRight { animation: photoBottomRight 1.1s ease forwards; }

        .animate-cornerTopLeft {
          animation: cornerTopLeft 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-cornerTopRight {
          animation: cornerTopRight 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-cornerBottomLeft {
          animation: cornerBottomLeft 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-cornerBottomRight {
          animation: cornerBottomRight 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-kissFloat1 { animation: kissFloat1 2.8s ease-in-out infinite; }
        .animate-kissFloat2 { animation: kissFloat2 3s ease-in-out infinite; }
        .animate-kissFloat3 { animation: kissFloat3 2.6s ease-in-out infinite; }
        .animate-kissFloat4 { animation: kissFloat4 2.9s ease-in-out infinite; }
        .animate-loveGlow { animation: loveGlow 2.4s ease-in-out infinite; }
      `}</style>
        </div>
    );
}