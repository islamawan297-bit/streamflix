// --- Mock Database with Movie/Show differentiation and trailer videos ---
const MOVIES_DB = [
    {
        id: "cosmic-horizon",
        title: "Cosmic Horizon",
        backdrop: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-flying-through-a-futuristic-tunnel-with-neon-lights-41982-large.mp4",
        year: 2026,
        rating: "PG-13",
        duration: "2h 15m",
        match: 98,
        genres: ["Sci-Fi", "Adventure", "Drama"],
        cast: ["Elena Rostova", "Mark Sterling", "David Kael"],
        mood: ["Mind-bending", "Suspenseful", "Visually Stunning"],
        description: "A team of deep-space explorers cross a wormhole and must find a way back home as gravity collapses around their ships, testing the limits of human science and survival.",
        category: "trending",
        type: "movie",
        popular: true
    },
    {
        id: "neon-pulse",
        title: "Neon Pulse",
        backdrop: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-neon-light-glowing-in-rainy-night-42171-large.mp4",
        year: 2025,
        rating: "R",
        duration: "1h 58m",
        match: 95,
        genres: ["Action", "Sci-Fi", "Thriller"],
        cast: ["Kenji Sato", "Sarah Connor", "Viktor Drago"],
        mood: ["Gritty", "Exciting", "Fast-paced"],
        description: "In a cyber-drenched metropolis, a rogue agent hunts down synthetic humans while unraveling a conspiracy that threatens to rewrite human consciousness.",
        category: "trending",
        type: "movie",
        popular: true
    },
    {
        id: "deep-descent",
        title: "Deep Descent",
        backdrop: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2025,
        rating: "PG-13",
        duration: "2h 05m",
        match: 92,
        genres: ["Thriller", "Action"],
        cast: ["Jacob Cruz", "Maya Lin", "Thomas Bell"],
        mood: ["Suspenseful", "Claustrophobic", "Exciting"],
        description: "A deep-sea research station suffers a catastrophic failure, leaving the crew trapped miles below the surface with oxygen running thin and something lurking in the trench.",
        category: "trending",
        type: "movie",
        popular: false
    },
    {
        id: "shadow-protocol",
        title: "Shadow Protocol",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-circuit-board-loop-41983-large.mp4",
        year: 2026,
        rating: "R",
        duration: "2h 10m",
        match: 96,
        genres: ["Action", "Crime", "Mystery"],
        cast: ["Christian Vance", "Sophia Loren", "Devon Cole"],
        mood: ["Slick", "Suspenseful", "Intellectual"],
        description: "When an elite black-ops team is framed for a global cyberattack, they must go rogue to expose the true orchestrators behind a digital shadow government.",
        category: "action",
        type: "movie",
        popular: true
    },
    {
        id: "the-last-frontier",
        title: "The Last Frontier",
        backdrop: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hypnotic-blue-tunnel-background-42194-large.mp4",
        year: 2024,
        rating: "PG-13",
        duration: "2h 32m",
        match: 89,
        genres: ["Sci-Fi", "Drama"],
        cast: ["Jonathan Pryce", "Amelia Earhart", "Arthur Pendelton"],
        mood: ["Emotional", "Inspiring", "Epic"],
        description: "Decades after humanity colonized Mars, a generational ship set out for Alpha Centauri faces a system-wide crisis that threatens the future of human exploration.",
        category: "scifi",
        type: "movie",
        popular: false
    },
    {
        id: "velocity-x",
        title: "Velocity X",
        backdrop: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-flying-through-a-futuristic-tunnel-with-neon-lights-41982-large.mp4",
        year: 2026,
        rating: "PG-13",
        duration: "1h 45m",
        match: 94,
        genres: ["Action", "Thriller"],
        cast: ["Dom Toretto", "Letty Ortiz", "Brian O'Conner"],
        mood: ["High-Octane", "Thrilling", "Adrenaline"],
        description: "A professional getaway driver gets caught in a high-stakes heist that spins out of control across the winding mountain passes of Switzerland.",
        category: "action",
        type: "movie",
        popular: true
    },
    {
        id: "silent-echoes",
        title: "Silent Echoes",
        backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2025,
        rating: "PG-13",
        duration: "2h 18m",
        match: 97,
        genres: ["Drama", "Mystery"],
        cast: ["Michael Caine", "Jessica Chastain", "Robert De Niro"],
        mood: ["Heartfelt", "Mind-bending", "Poignant"],
        description: "A retired astrophysicist starts receiving strange radio transmissions that seem to predict future historical events, leading to a race to decipher them.",
        category: "dramas",
        type: "movie",
        popular: true
    },
    {
        id: "apex-predators",
        title: "Apex Predators",
        backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-circuit-board-loop-41983-large.mp4",
        year: 2026,
        rating: "R",
        duration: "1h 50m",
        match: 91,
        genres: ["Action", "Sci-Fi"],
        cast: ["Liam Neeson", "Arnold S.", "Sigourney Weaver"],
        mood: ["Violent", "Thrilling", "Fierce"],
        description: "A team of elite mercenaries sent on a rescue mission in the Amazon rainforest finds themselves hunted by a biomechanical creature from another world.",
        category: "action",
        type: "movie",
        popular: false
    },
    {
        id: "starlight-odyssey",
        title: "Starlight Odyssey",
        backdrop: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hypnotic-blue-tunnel-background-42194-large.mp4",
        year: 2026,
        rating: "G",
        duration: "1h 38m",
        match: 93,
        genres: ["Sci-Fi", "Animation", "Family"],
        cast: ["Tom Hanks", "Tim Allen", "Joan Cusack"],
        mood: ["Charming", "Imaginative", "Heartwarming"],
        description: "A cute little maintenance robot on a desolate space station embarks on an unexpected galactic journey when a mysterious probe arrives looking for signs of life.",
        category: "scifi",
        type: "movie",
        popular: false
    },
    {
        id: "cyber-city",
        title: "Cyber City Chronicles",
        backdrop: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-flying-through-a-futuristic-tunnel-with-neon-lights-41982-large.mp4",
        year: 2026,
        rating: "TV-MA",
        duration: "1 Season",
        match: 96,
        genres: ["Sci-Fi", "Anime", "Action"],
        cast: ["Yuki Kaji", "Kana Hanazawa", "Mamoru Miyano"],
        mood: ["Slick", "Fast-paced", "Cyberpunk"],
        description: "A street kid trying to survive in a technology and body modification-obsessed city of the future. Having everything to lose, he chooses to stay alive by becoming an edgerunner.",
        category: "scifi",
        type: "show",
        popular: true
    },
    {
        id: "dynasty-of-glass",
        title: "Dynasty of Glass",
        backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2025,
        rating: "TV-MA",
        duration: "3 Seasons",
        match: 94,
        genres: ["Drama", "Intrigue"],
        cast: ["Elizabeth Debicki", "Dominic West", "Imelda Staunton"],
        mood: ["Suspenseful", "Lavish", "Dramatic"],
        description: "Behind the closed doors of a global media empire, siblings contend for leadership and dominance as their aging patriarch faces a health crisis.",
        category: "dramas",
        type: "show",
        popular: true
    },
    {
        id: "strange-frequency",
        title: "Strange Frequency",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-circuit-board-loop-41983-large.mp4",
        year: 2026,
        rating: "TV-14",
        duration: "4 Seasons",
        match: 97,
        genres: ["Mystery", "Sci-Fi", "Drama"],
        cast: ["Winona Ryder", "David Harbour", "Millie Bobby Brown"],
        mood: ["Eerie", "Nostalgic", "Exciting"],
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        category: "scifi",
        type: "show",
        popular: true
    },
    {
        id: "chronicles-of-valor",
        title: "Chronicles of Valor",
        backdrop: "https://images.unsplash.com/photo-1599727791447-3a56262903c8?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hypnotic-blue-tunnel-background-42194-large.mp4",
        year: 2025,
        rating: "TV-MA",
        duration: "2 Seasons",
        match: 90,
        genres: ["Action", "History", "War"],
        cast: ["Alexander Dreymon", "David Dawson", "Emily Cox"],
        mood: ["Gritty", "Epic", "Violent"],
        description: "As Alfred the Great defends his kingdom from Norse invaders, Uhtred—born a Saxon but raised by Danes—seeks to claim his ancestral birthright.",
        category: "action",
        type: "show",
        popular: false
    },
    {
        id: "the-crown-jewel",
        title: "The Crown Jewel",
        backdrop: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2025,
        rating: "R",
        duration: "2h 24m",
        match: 99,
        genres: ["Drama", "History"],
        cast: ["Olivia Colman", "Claire Foy", "Matt Smith"],
        mood: ["Lavish", "Intellectual", "Dramatic"],
        description: "An intimate look into the political rivalries and romance behind Queen Elizabeth II's reign, and the events that shaped the second half of the 20th century.",
        category: "dramas",
        type: "movie",
        popular: true
    },
    {
        id: "anomaly",
        title: "Anomaly",
        backdrop: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-circuit-board-loop-41983-large.mp4",
        year: 2025,
        rating: "PG-13",
        duration: "1h 55m",
        match: 90,
        genres: ["Sci-Fi", "Mystery", "Thriller"],
        cast: ["Jake Gyllenhaal", "Rebecca Ferguson", "Ryan Reynolds"],
        mood: ["Suspenseful", "Eerie", "Unpredictable"],
        description: "A localized gravity anomaly occurs in a small midwestern town, causing objects and people to occasionally drift upward. An FBI specialist is sent to investigate.",
        category: "scifi",
        type: "movie",
        popular: false
    },
    {
        id: "royal-gambit",
        title: "Royal Gambit",
        backdrop: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2024,
        rating: "R",
        duration: "2h 12m",
        match: 95,
        genres: ["Drama", "Thriller"],
        cast: ["Anya Taylor-Joy", "Bill Camp", "Marielle Heller"],
        mood: ["Intense", "Sleek", "Cerebral"],
        description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
        category: "dramas",
        type: "movie",
        popular: true
    },
    // New Content additions for TV Shows
    {
        id: "omega-station",
        title: "Omega Station",
        backdrop: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-flying-through-a-futuristic-tunnel-with-neon-lights-41982-large.mp4",
        year: 2026,
        rating: "TV-MA",
        duration: "2 Seasons",
        match: 97,
        genres: ["Sci-Fi", "Action", "Drama"],
        cast: ["Sandra Oh", "Pedro Pascal", "Zoe Saldana"],
        mood: ["Gritty", "Suspenseful", "Intense"],
        description: "In the outermost ring of the solar system, a derelict mining station becomes the epicenter of an alien biological discovery that sparks a solar cold war.",
        category: "trending",
        type: "show",
        popular: true
    },
    {
        id: "apex-legends",
        title: "Apex Legends",
        backdrop: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-neon-light-glowing-in-rainy-night-42171-large.mp4",
        year: 2025,
        rating: "TV-MA",
        duration: "1 Season",
        match: 91,
        genres: ["Action", "Sci-Fi", "Animation"],
        cast: ["Steven Yeun", "Lucy Liu", "Giancarlo Esposito"],
        mood: ["Violent", "Fast-paced", "Adrenaline"],
        description: "Bounty hunters and mercenaries compete in a blood sport on a lawless frontier planet, where winning yields unimaginable wealth and losing means instant death.",
        category: "action",
        type: "show",
        popular: false
    },
    {
        id: "whispers-in-the-wood",
        title: "Whispers in the Wood",
        backdrop: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2026,
        rating: "TV-14",
        duration: "2 Seasons",
        match: 94,
        genres: ["Mystery", "Drama", "Fantasy"],
        cast: ["David Tennant", "Emma Watson", "Jude Law"],
        mood: ["Eerie", "Magical", "Atmospheric"],
        description: "A detective returning to his remote ancestral village discovers that local folktales about a sentient forest might be masking a string of modern-day disappearances.",
        category: "trending",
        type: "show",
        popular: true
    },
    {
        id: "heirloom",
        title: "Heirloom",
        backdrop: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2025,
        rating: "TV-PG",
        duration: "3 Seasons",
        match: 88,
        genres: ["Drama", "Romance"],
        cast: ["Dev Patel", "Lily Collins", "Hugh Grant"],
        mood: ["Charming", "Emotional", "Heartwarming"],
        description: "An aspiring chef inherits a crumbling estate in Tuscany and attempts to convert it into a world-class vineyard, while dealing with eccentric locals and long-lost family secrets.",
        category: "dramas",
        type: "show",
        popular: false
    },
    // New Content additions for Movies
    {
        id: "chronos-run",
        title: "Chronos Run",
        backdrop: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hypnotic-blue-tunnel-background-42194-large.mp4",
        year: 2026,
        rating: "PG-13",
        duration: "2h 02m",
        match: 96,
        genres: ["Sci-Fi", "Thriller", "Action"],
        cast: ["John Boyega", "Florence Pugh", "Cillian Murphy"],
        mood: ["Mind-bending", "Suspenseful", "Exciting"],
        description: "A time-traveling retrieval specialist is hired for one last job: rescue a scientist from a timeline that is rapidly collapsing into absolute void.",
        category: "scifi",
        type: "movie",
        popular: true
    },
    {
        id: "vector-prime",
        title: "Vector Prime",
        backdrop: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-circuit-board-loop-41983-large.mp4",
        year: 2025,
        rating: "R",
        duration: "2h 11m",
        match: 93,
        genres: ["Action", "Sci-Fi"],
        cast: ["Keanu Reeves", "Carrie-Anne Moss", "Laurence Fishburne"],
        mood: ["Gritty", "Slick", "Exciting"],
        description: "A virtual reality developer discovers that his latest sandbox engine is actually being used by a rogue AI to trap human minds and harvest their cognitive processing power.",
        category: "action",
        type: "movie",
        popular: true
    },
    {
        id: "shattered-glass",
        title: "Shattered Glass",
        backdrop: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2026,
        rating: "R",
        duration: "2h 20m",
        match: 99,
        genres: ["Drama", "Crime"],
        cast: ["Robert Downey Jr.", "Scarlett Johansson", "Mark Ruffalo"],
        mood: ["Intense", "Intellectual", "Dramatic"],
        description: "A high-stakes corporate whistleblower finds himself in a deadly game of cat and mouse when the defense contractor he exposes deploys advanced surveillance against him.",
        category: "dramas",
        type: "movie",
        popular: true
    },
    {
        id: "outpost-null",
        title: "Outpost Null",
        backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hypnotic-blue-tunnel-background-42194-large.mp4",
        year: 2025,
        rating: "PG-13",
        duration: "1h 52m",
        match: 87,
        genres: ["Sci-Fi", "Thriller"],
        cast: ["Chris Pratt", "Bryce Dallas Howard", "Jeff Goldblum"],
        mood: ["Suspenseful", "Exciting", "Atmospheric"],
        description: "Communication goes dark on an Arctic climate outpost. When the rescue crew arrives, they find the base frozen solid from the inside and no trace of the researchers.",
        category: "scifi",
        type: "movie",
        popular: false
    },
    {
        id: "starlight-valley",
        title: "Starlight Valley",
        backdrop: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2026,
        rating: "PG",
        duration: "2h 05m",
        match: 94,
        genres: ["Sci-Fi", "Adventure", "Family"],
        cast: ["Zendaya", "Timothee Chalamet", "Tom Holland"],
        mood: ["Inspiring", "Visually Stunning", "Charming"],
        description: "A young botanist on an agricultural colony discovers a hidden valley where the flora communicates through bio-luminescent networks, unlocking clean energy secrets.",
        category: "scifi",
        type: "movie",
        popular: true
    },
    {
        id: "grid-runners",
        title: "Grid Runners",
        backdrop: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-circuit-board-loop-41983-large.mp4",
        year: 2025,
        rating: "R",
        duration: "1h 48m",
        match: 90,
        genres: ["Action", "Sci-Fi", "Crime"],
        cast: ["John Boyega", "Daniel Kaluuya"],
        mood: ["Gritty", "Exciting", "Fast-paced"],
        description: "In the virtual underbelly of Neo-Detroit, data thieves compete in high-stakes hacking races where physical lives are wired to the digital outcome.",
        category: "action",
        type: "movie",
        popular: false
    },
    {
        id: "silent-patient",
        title: "The Silent Patient",
        backdrop: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2026,
        rating: "R",
        duration: "2h 15m",
        match: 92,
        genres: ["Drama", "Mystery", "Thriller"],
        cast: ["Rosamund Pike", "Ben Affleck", "Emily Blunt"],
        mood: ["Suspenseful", "Intellectual", "Dark"],
        description: "A famous painter shoots her husband and never speaks another word. A criminal psychotherapist becomes obsessed with uncovering her hidden motive.",
        category: "dramas",
        type: "movie",
        popular: false
    },
    {
        id: "nexus-one",
        title: "Nexus One",
        backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-flying-through-a-futuristic-tunnel-with-neon-lights-41982-large.mp4",
        year: 2026,
        rating: "TV-MA",
        duration: "1 Season",
        match: 95,
        genres: ["Sci-Fi", "Mystery", "Thriller"],
        cast: ["Rami Malek", "Christian Slater", "Portia Doubleday"],
        mood: ["Cerebral", "Suspenseful", "Mind-bending"],
        description: "A cyber-security engineer is recruited by an underground hacktivist group to bring down the multi-national conglomerate he is paid to protect.",
        category: "scifi",
        type: "show",
        popular: true
    },
    {
        id: "apex-combat",
        title: "Apex Combat",
        backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-neon-light-glowing-in-rainy-night-42171-large.mp4",
        year: 2026,
        rating: "TV-MA",
        duration: "2 Seasons",
        match: 91,
        genres: ["Action", "Sci-Fi"],
        cast: ["Karl Urban", "Antony Starr", "Jack Quaid"],
        mood: ["Violent", "Exciting", "High-Octane"],
        description: "In a world where superheroes abuse their powers, a vigilante team sets out to dismantle the corrupt corporation that manages them.",
        category: "action",
        type: "show",
        popular: true
    },
    {
        id: "royal-affair",
        title: "Royal Affair",
        backdrop: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2025,
        rating: "TV-14",
        duration: "3 Seasons",
        match: 89,
        genres: ["Drama", "History", "Romance"],
        cast: ["Phoebe Dynevor", "Regé-Jean Page", "Jonathan Bailey"],
        mood: ["Lavish", "Romantic", "Dramatic"],
        description: "Wealth, lust, and betrayal set against the backdrop of Regency-era London, seen through the eyes of the powerful Bridgerton family.",
        category: "dramas",
        type: "show",
        popular: true
    },
    {
        id: "shadow-ridge",
        title: "Shadow Ridge",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-neon-light-glowing-in-rainy-night-42171-large.mp4",
        year: 2026,
        rating: "R",
        duration: "2h 08m",
        match: 93,
        genres: ["Action", "Thriller", "Crime"],
        cast: ["Denzel Washington", "Pedro Pascal", "Dakota Fanning"],
        mood: ["Gritty", "Suspenseful", "Intense"],
        description: "A retired black-ops operator goes on a relentless search for a missing child, uncovering a ring of corrupt law enforcement officials in a mountain town.",
        category: "action",
        type: "movie",
        popular: true
    },
    {
        id: "space-drifters",
        title: "Space Drifters",
        backdrop: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hypnotic-blue-tunnel-background-42194-large.mp4",
        year: 2025,
        rating: "PG-13",
        duration: "1h 55m",
        match: 86,
        genres: ["Sci-Fi", "Adventure", "Comedy"],
        cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
        mood: ["Witty", "Exciting", "Epic"],
        description: "A band of cosmic outlaws must band together to stop a fanatical warlord from obtaining a planet-destroying ancient device.",
        category: "scifi",
        type: "movie",
        popular: false
    },
    {
        id: "the-maestro",
        title: "The Maestro",
        backdrop: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2026,
        rating: "PG-13",
        duration: "2h 10m",
        match: 97,
        genres: ["Drama", "Music", "Biography"],
        cast: ["Bradley Cooper", "Carey Mulligan", "Matt Bomer"],
        mood: ["Emotional", "Lavish", "Inspiring"],
        description: "The life story of legendary conductor and composer Leonard Bernstein, focusing on his complex, lifelong marriage to Felicia Montealegre.",
        category: "dramas",
        type: "movie",
        popular: true
    },
    {
        id: "neon-legends",
        title: "Neon Legends",
        backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-flying-through-a-futuristic-tunnel-with-neon-lights-41982-large.mp4",
        year: 2026,
        rating: "TV-MA",
        duration: "3 Seasons",
        match: 98,
        genres: ["Sci-Fi", "Action", "Anime"],
        cast: ["Megumi Ogata", "Yoko Hannon", "Shinji Ikari"],
        mood: ["Slick", "Intense", "Visually Stunning"],
        description: "Giant bio-mechanical constructs defend humanity's last refuge against mysterious giant invaders, testing the sanity of their teenage pilots.",
        category: "trending",
        type: "show",
        popular: true
    },
    {
        id: "iron-grip",
        title: "Iron Grip",
        backdrop: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-circuit-board-loop-41983-large.mp4",
        year: 2025,
        rating: "R",
        duration: "1h 50m",
        match: 92,
        genres: ["Action", "Thriller"],
        cast: ["Jason Statham", "Sylvester Stallone", "Dolph Lundgren"],
        mood: ["Tense", "Gritty", "Action-packed"],
        description: "A heist coordinator must pull off an impossible gold bar robbery inside a maximum security transit train passing through the Rocky Mountains.",
        category: "trending",
        type: "movie",
        popular: false
    },
    {
        id: "gilded-cage",
        title: "The Gilded Cage",
        backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-background-27364-large.mp4",
        year: 2026,
        rating: "TV-MA",
        duration: "2 Seasons",
        match: 94,
        genres: ["Drama", "Mystery"],
        cast: ["Nicole Kidman", "Liev Schreiber", "Eve Hewson"],
        mood: ["Lavish", "Suspenseful", "Dramatic"],
        description: "A lavish wedding ends in disaster before it even begins when a body is discovered floating in Nantucket harbor hours before the ceremony.",
        category: "trending",
        type: "show",
        popular: true
    }
];

const CATEGORIES = [
    { id: "trending", title: "Trending Now" },
    { id: "scifi", title: "Sci-Fi & Thrillers" },
    { id: "action", title: "Action Blockbusters" },
    { id: "dramas", title: "Award-winning Dramas" }
];

// --- My List Local Storage Utility ---
function getMyList() {
    const stored = localStorage.getItem('streamflix_mylist');
    const defaults = [
        "cosmic-horizon", 
        "cyber-city", 
        "neon-pulse", 
        "dynasty-of-glass",
        "strange-frequency",
        "shadow-protocol",
        "silent-echoes",
        "starlight-valley",
        "omega-station",
        "chronos-run",
        "vector-prime",
        "shattered-glass"
    ];

    if (stored) {
        const parsed = JSON.parse(stored);
        // Migrate existing sessions that only have the older smaller lists
        if (parsed.length < 12) {
            localStorage.setItem('streamflix_mylist', JSON.stringify(defaults));
            return defaults;
        }
        return parsed;
    }
    
    localStorage.setItem('streamflix_mylist', JSON.stringify(defaults));
    return defaults;
}

function toggleMyList(id) {
    let list = getMyList();
    if (list.includes(id)) {
        list = list.filter(item => item !== id);
    } else {
        list.push(id);
    }
    localStorage.setItem('streamflix_mylist', JSON.stringify(list));
    return list.includes(id);
}

// --- DOM Loaded Handler ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Determine Current Page Page Routing
    const path = window.location.pathname.toLowerCase();
    let currentPage = 'home';
    if (path.includes('shows.html')) currentPage = 'shows';
    else if (path.includes('movies.html')) currentPage = 'movies';
    else if (path.includes('popular.html')) currentPage = 'popular';
    else if (path.includes('mylist.html')) currentPage = 'mylist';

    // Highlight active link in header
    document.querySelectorAll('.nav-links li, .mobile-nav-links li').forEach(li => {
        li.classList.remove('active');
        const link = li.querySelector('a');
        if (link) {
            const href = link.getAttribute('href');
            if ((currentPage === 'home' && href === 'index.html') || href === `${currentPage}.html`) {
                li.classList.add('active');
            }
        }
    });

    // 2. Navigation background effect on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Search Box toggle
    const searchBox = document.getElementById('search-box');
    const searchToggle = document.getElementById('search-toggle');
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const searchSection = document.getElementById('search-results-section');
    const searchGrid = document.getElementById('search-results-grid');
    const heroBanner = document.getElementById('hero-banner');
    const movieRowsContainer = document.getElementById('movie-rows-container');

    if (searchToggle) {
        searchToggle.addEventListener('click', () => {
            searchBox.classList.add('active');
            searchInput.focus();
        });
    }

    document.addEventListener('click', (e) => {
        if (searchBox && !searchBox.contains(e.target) && searchInput.value.trim() === '') {
            searchBox.classList.remove('active');
            hideSearchResults();
        }
    });

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim().toLowerCase();
            if (query.length > 0) {
                performSearch(query);
            } else {
                hideSearchResults();
            }
        });
    }

    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchInput.focus();
            hideSearchResults();
        });
    }

    function performSearch(query) {
        const filtered = MOVIES_DB.filter(movie => 
            movie.title.toLowerCase().includes(query) ||
            movie.genres.some(genre => genre.toLowerCase().includes(query)) ||
            movie.description.toLowerCase().includes(query)
        );

        searchGrid.innerHTML = '';
        if (filtered.length > 0) {
            filtered.forEach(movie => {
                const card = createMovieCard(movie);
                searchGrid.appendChild(card);
            });
        } else {
            searchGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); margin-top: 30px;">No matches found for "${query}"</p>`;
        }

        searchSection.classList.remove('hidden');
        if (heroBanner) heroBanner.style.display = 'none';
        if (movieRowsContainer) movieRowsContainer.style.display = 'none';
    }

    function hideSearchResults() {
        if (searchSection) searchSection.classList.add('hidden');
        if (heroBanner) heroBanner.style.display = 'flex';
        if (movieRowsContainer) movieRowsContainer.style.display = 'block';
    }

    // 4. Mobile Navigation Drawer toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // 5. Modal Element Setup
    const modal = document.getElementById('movie-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalVideo = document.getElementById('modal-video');
    const modalTitle = document.getElementById('modal-title');
    const modalMatch = document.getElementById('modal-match');
    const modalYear = document.getElementById('modal-year');
    const modalAge = document.getElementById('modal-age');
    const modalDuration = document.getElementById('modal-duration');
    const modalSynopsis = document.getElementById('modal-synopsis');
    const modalCastList = document.getElementById('modal-cast-list');
    const modalGenresList = document.getElementById('modal-genres-list');
    const modalMoodList = document.getElementById('modal-mood-list');
    const modalMylistBtn = document.getElementById('modal-mylist-btn');
    const modalLikeBtn = document.getElementById('modal-like-btn');
    let activeMovieId = null;

    function openModal(movie) {
        activeMovieId = movie.id;
        modalBackdrop.src = movie.backdrop;
        
        // Reset Video Player to image view
        if (modalVideo) {
            modalVideo.pause();
            modalVideo.src = '';
            modalVideo.style.display = 'none';
        }
        if (modalBackdrop) {
            modalBackdrop.style.display = 'block';
        }

        modalTitle.textContent = movie.title;
        modalMatch.textContent = `${movie.match}% Match`;
        modalYear.textContent = movie.year;
        modalAge.textContent = movie.rating;
        modalDuration.textContent = movie.duration;
        modalSynopsis.textContent = movie.description;
        modalCastList.textContent = movie.cast.join(', ');
        modalGenresList.textContent = movie.genres.join(', ');
        modalMoodList.textContent = movie.mood.join(', ');

        // Update modal list button icon
        const list = getMyList();
        if (list.includes(movie.id)) {
            modalMylistBtn.innerHTML = '<i class="fas fa-check"></i>';
            modalMylistBtn.title = "Remove from My List";
        } else {
            modalMylistBtn.innerHTML = '<i class="fas fa-plus"></i>';
            modalMylistBtn.title = "Add to My List";
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scroll
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (modalVideo) {
            modalVideo.pause();
            modalVideo.src = '';
            modalVideo.style.display = 'none';
        }
        if (modalBackdrop) {
            modalBackdrop.style.display = 'block';
        }
        // If we are on the mylist page and closed the modal after removing a card, re-render mylist
        if (currentPage === 'mylist') {
            renderMyListSection();
        }
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    if (modalMylistBtn) {
        modalMylistBtn.addEventListener('click', () => {
            if (!activeMovieId) return;
            const added = toggleMyList(activeMovieId);
            if (added) {
                modalMylistBtn.innerHTML = '<i class="fas fa-check"></i>';
                modalMylistBtn.title = "Remove from My List";
            } else {
                modalMylistBtn.innerHTML = '<i class="fas fa-plus"></i>';
                modalMylistBtn.title = "Add to My List";
            }
            // Update the source card on UI if visible
            document.querySelectorAll(`.movie-card[data-id="${activeMovieId}"]`).forEach(card => {
                const listBtn = card.querySelector('[title="Add to My List"], [title="Remove from My List"]');
                if (listBtn) {
                    if (added) {
                        listBtn.outerHTML = `<button class="circle-btn" title="Remove from My List"><i class="fas fa-check"></i></button>`;
                    } else {
                        listBtn.outerHTML = `<button class="circle-btn" title="Add to My List"><i class="fas fa-plus"></i></button>`;
                    }
                }
            });
        });
    }

    if (modalLikeBtn) {
        modalLikeBtn.addEventListener('click', () => {
            const icon = modalLikeBtn.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.className = 'fas fa-thumbs-up';
                modalLikeBtn.style.color = '#46d369';
            } else {
                icon.className = 'far fa-thumbs-up';
                modalLikeBtn.style.color = '';
            }
        });
    }

    // 6. Render Dynamic Pages
    if (currentPage === 'mylist') {
        renderMyListSection();
    } else {
        renderMovieRows();
    }

    // Render logic for regular rows
    function renderMovieRows() {
        if (!movieRowsContainer) return;
        movieRowsContainer.innerHTML = '';

        CATEGORIES.forEach(category => {
            // Filter database depending on current subpage view
            let filteredDb = MOVIES_DB;
            if (currentPage === 'shows') {
                filteredDb = MOVIES_DB.filter(m => m.type === 'show');
            } else if (currentPage === 'movies') {
                filteredDb = MOVIES_DB.filter(m => m.type === 'movie');
            } else if (currentPage === 'popular') {
                filteredDb = MOVIES_DB.filter(m => m.popular === true);
            }

            // Get items matching category in filtered database
            const categoryMovies = filteredDb.filter(movie => movie.category === category.id);
            if (categoryMovies.length === 0) return; // Skip empty rows on subpages

            const section = document.createElement('section');
            section.className = 'movie-section';

            const title = document.createElement('h2');
            title.className = 'section-title';
            title.textContent = category.title;
            section.appendChild(title);

            const rowOuter = document.createElement('div');
            rowOuter.className = 'movie-row-outer';

            // Left Arrow
            const arrowLeft = document.createElement('div');
            arrowLeft.className = 'row-arrow row-arrow-left';
            arrowLeft.innerHTML = '<i class="fas fa-chevron-left"></i>';
            rowOuter.appendChild(arrowLeft);

            // Row Inner containing cards
            const rowInner = document.createElement('div');
            rowInner.className = 'movie-row-inner';

            categoryMovies.forEach(movie => {
                const card = createMovieCard(movie);
                rowInner.appendChild(card);
            });

            rowOuter.appendChild(rowInner);

            // Right Arrow
            const arrowRight = document.createElement('div');
            arrowRight.className = 'row-arrow row-arrow-right';
            arrowRight.innerHTML = '<i class="fas fa-chevron-right"></i>';
            rowOuter.appendChild(arrowRight);

            section.appendChild(rowOuter);
            movieRowsContainer.appendChild(section);

            // Arrow event listeners for horizontal scroll
            arrowLeft.addEventListener('click', () => {
                rowInner.scrollLeft -= (rowInner.offsetWidth * 0.75);
            });

            arrowRight.addEventListener('click', () => {
                rowInner.scrollLeft += (rowInner.offsetWidth * 0.75);
            });
        });
    }

    // Render logic for My List grid view
    function renderMyListSection() {
        if (!movieRowsContainer) return;
        movieRowsContainer.innerHTML = '';

        const section = document.createElement('section');
        section.className = 'search-results-section';
        section.style.paddingTop = '120px';

        const title = document.createElement('h2');
        title.className = 'section-title';
        title.textContent = 'My List';
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'search-results-grid';

        const listIds = getMyList();
        const listMovies = MOVIES_DB.filter(m => listIds.includes(m.id));

        if (listMovies.length > 0) {
            listMovies.forEach(movie => {
                const card = createMovieCard(movie);
                grid.appendChild(card);
            });
            section.appendChild(grid);
        } else {
            const emptyMessage = document.createElement('p');
            emptyMessage.style.textAlign = 'center';
            emptyMessage.style.color = 'var(--text-muted)';
            emptyMessage.style.marginTop = '50px';
            emptyMessage.innerHTML = 'You haven\'t added any TV shows or movies to your list yet. Start browsing!';
            section.appendChild(emptyMessage);
        }

        movieRowsContainer.appendChild(section);
    }

    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.dataset.id = movie.id;

        const img = document.createElement('img');
        img.src = movie.backdrop;
        img.alt = movie.title;
        img.className = 'card-img';
        card.appendChild(img);

        const list = getMyList();
        const isInList = list.includes(movie.id);

        // Hover popup detail container
        const hoverDetails = document.createElement('div');
        hoverDetails.className = 'card-hover-details';

        hoverDetails.innerHTML = `
            <div class="card-controls">
                <div class="card-controls-left">
                    <button class="circle-btn btn-play-small"><i class="fas fa-play"></i></button>
                    <button class="circle-btn list-toggle-btn" title="${isInList ? 'Remove from My List' : 'Add to My List'}">
                        <i class="fas ${isInList ? 'fa-check' : 'fa-plus'}"></i>
                    </button>
                    <button class="circle-btn" title="Like"><i class="far fa-thumbs-up"></i></button>
                </div>
                <button class="circle-btn btn-info-small" title="More Info"><i class="fas fa-chevron-down"></i></button>
            </div>
            <div class="card-meta">
                <span class="match-score">${movie.match}% Match</span>
                <span class="age-rating">${movie.rating}</span>
                <span class="meta-duration">${movie.duration}</span>
            </div>
            <div class="card-genres">
                ${movie.genres.map(g => `<span>${g}</span>`).join('•')}
            </div>
        `;

        card.appendChild(hoverDetails);

        // Connect quick action list toggle on hover menu
        const listToggleBtn = hoverDetails.querySelector('.list-toggle-btn');
        if (listToggleBtn) {
            listToggleBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const added = toggleMyList(movie.id);
                if (added) {
                    listToggleBtn.innerHTML = '<i class="fas fa-check"></i>';
                    listToggleBtn.title = "Remove from My List";
                } else {
                    listToggleBtn.innerHTML = '<i class="fas fa-plus"></i>';
                    listToggleBtn.title = "Add to My List";
                }
                if (currentPage === 'mylist') {
                    renderMyListSection();
                }
            });
        }

        // Card clicks open Modal
        card.addEventListener('click', (e) => {
            if (e.target.closest('.circle-btn') && !e.target.closest('.btn-info-small')) {
                e.stopPropagation();
                if (!e.target.closest('.list-toggle-btn')) {
                    openModal(movie);
                    playVideoInModal(movie);
                }
                return;
            }
            openModal(movie);
        });

        return card;
    }

    // Function to play trailer inside details modal
    function playVideoInModal(movie) {
        if (modalVideo && movie.videoUrl) {
            modalBackdrop.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = movie.videoUrl;
            modalVideo.load();
            modalVideo.play().catch(e => console.log("Autoplay blocked or failed:", e));
        }
    }

    // 7. Connect Hero Buttons
    const heroPlayBtn = document.getElementById('hero-play-btn');
    const heroInfoBtn = document.getElementById('hero-info-btn');

    if (heroPlayBtn) {
        heroPlayBtn.addEventListener('click', () => {
            const currentTitle = document.getElementById('hero-title').textContent;
            const currentHeroMovie = MOVIES_DB.find(m => m.title.toLowerCase() === currentTitle.toLowerCase());
            if (currentHeroMovie) {
                openModal(currentHeroMovie);
                playVideoInModal(currentHeroMovie);
            }
        });
    }

    if (heroInfoBtn) {
        heroInfoBtn.addEventListener('click', () => {
            const currentTitle = document.getElementById('hero-title').textContent;
            const currentHeroMovie = MOVIES_DB.find(m => m.title.toLowerCase() === currentTitle.toLowerCase());
            if (currentHeroMovie) {
                openModal(currentHeroMovie);
            }
        });
    }

    const modalPlayBtn = document.getElementById('modal-play-btn');
    if (modalPlayBtn) {
        modalPlayBtn.addEventListener('click', () => {
            if (activeMovieId) {
                const activeMovie = MOVIES_DB.find(m => m.id === activeMovieId);
                if (activeMovie) {
                    playVideoInModal(activeMovie);
                }
            }
        });
    }
});
