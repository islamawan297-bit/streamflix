// --- Authentication Session Check ---
const token = localStorage.getItem('streamflix_token');
const currentUser = JSON.parse(localStorage.getItem('streamflix_user'));

if (!token || !currentUser) {
    window.location.href = 'login.html';
}

// Global Movies State loaded dynamically from MongoDB
let MOVIES_DB = [];

const CATEGORIES = [
    { id: "trending", title: "Trending Now" },
    { id: "scifi", title: "Sci-Fi & Thrillers" },
    { id: "action", title: "Action Blockbusters" },
    { id: "dramas", title: "Award-winning Dramas" }
];

// --- My List Backend Sync API Utils ---
async function getMyList() {
    try {
        const res = await fetch('/api/mylist', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        return data.success ? data.data.map(m => m._id) : [];
    } catch (e) {
        console.error("Error fetching My List:", e);
        return [];
    }
}

async function toggleMyList(movieId) {
    try {
        const currentList = await getMyList();
        const isInList = currentList.includes(movieId);
        
        let url = '/api/mylist';
        let method = 'POST';
        let body = JSON.stringify({ movieId });

        if (isInList) {
            url = `/api/mylist/${movieId}`;
            method = 'DELETE';
            body = null;
        }

        const res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body
        });
        const data = await res.json();
        return data.success ? !isInList : isInList;
    } catch (e) {
        console.error("Error toggling list item:", e);
        return false;
    }
}

// --- DOM Loaded Handler ---
document.addEventListener('DOMContentLoaded', async () => {
    // Inject Admin link if user is administrator
    const profileMenu = document.querySelector('.profile-dropdown ul');
    if (profileMenu && currentUser && currentUser.isAdmin) {
        const adminLi = document.createElement('li');
        adminLi.innerHTML = `<a href="admin.html"><i class="fas fa-user-shield"></i> Admin Dashboard</a>`;
        profileMenu.insertBefore(adminLi, profileMenu.firstChild);
    }

    // Setup Log Out Handler
    const logoutBtn = document.querySelector('.profile-dropdown ul li a[href*="sign-out"]');
    const handleSignout = (e) => {
        e.preventDefault();
        localStorage.removeItem('streamflix_token');
        localStorage.removeItem('streamflix_user');
        window.location.href = 'login.html';
    };
    if (logoutBtn) logoutBtn.addEventListener('click', handleSignout);
    
    // Mobile signout handler
    document.querySelectorAll('.mobile-nav-links li').forEach(li => {
        if (li.textContent.includes('Sign out') || li.querySelector('a')?.getAttribute('href') === '#') {
            li.addEventListener('click', handleSignout);
        }
    });

    // 1. Determine Current Page Routing
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
            movie.genre.some(g => g.toLowerCase().includes(query)) ||
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

    async function openModal(movie) {
        activeMovieId = movie._id;
        modalBackdrop.src = movie.poster;
        
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
        modalMatch.textContent = `${movie.match || 95}% Match`;
        modalYear.textContent = movie.year;
        modalAge.textContent = movie.rating;
        modalDuration.textContent = movie.duration;
        modalSynopsis.textContent = movie.description;
        modalCastList.textContent = movie.cast ? movie.cast.join(', ') : 'N/A';
        modalGenresList.textContent = movie.genre.join(', ');
        modalMoodList.textContent = movie.mood ? movie.mood.join(', ') : 'N/A';

        // Add a download button to actions dynamically
        let downloadBtn = document.getElementById('modal-download-btn');
        if (!downloadBtn) {
            downloadBtn = document.createElement('button');
            downloadBtn.id = 'modal-download-btn';
            downloadBtn.className = 'modal-action-btn';
            downloadBtn.title = "Download Video File";
            downloadBtn.innerHTML = '<i class="fas fa-download"></i>';
            modalMylistBtn.parentNode.appendChild(downloadBtn);
        }
        
        // Bind secure download API fetch
        downloadBtn.onclick = () => downloadFile(movie._id, movie.title);

        // Update modal list button icon
        const list = await getMyList();
        if (list.includes(movie._id)) {
            modalMylistBtn.innerHTML = '<i class="fas fa-check"></i>';
            modalMylistBtn.title = "Remove from My List";
        } else {
            modalMylistBtn.innerHTML = '<i class="fas fa-plus"></i>';
            modalMylistBtn.title = "Add to My List";
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scroll
    }

    // Secure Download blob handler
    async function downloadFile(id, title) {
        try {
            const btn = document.getElementById('modal-download-btn');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            const response = await fetch(`/api/movies/${id}/download`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${title.replace(/\s+/g, '_')}.mp4`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
            
            btn.innerHTML = '<i class="fas fa-download"></i>';
        } catch (e) {
            console.error("Download failed:", e);
            alert("Error downloading video file.");
        }
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
        modalMylistBtn.addEventListener('click', async () => {
            if (!activeMovieId) return;
            const added = await toggleMyList(activeMovieId);
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

    // Function to play trailer inside details modal
    function playVideoInModal(movie) {
        if (modalVideo && movie.video) {
            modalBackdrop.style.display = 'none';
            modalVideo.style.display = 'block';
            modalVideo.src = movie.video;
            modalVideo.load();
            modalVideo.play().catch(e => console.log("Autoplay blocked or failed:", e));
        }
    }

    // 6. Connect Hero Buttons
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
                const activeMovie = MOVIES_DB.find(m => m._id === activeMovieId);
                if (activeMovie) {
                    playVideoInModal(activeMovie);
                }
            }
        });
    }

    // --- Dynamic API Load Init ---
    async function initApp() {
        try {
            const res = await fetch('/api/movies');
            const data = await res.json();
            
            if (data.success) {
                MOVIES_DB = data.data;
                
                // If on Home banner page, load the hero dynamically if we have movies in DB
                if (MOVIES_DB.length > 0 && currentPage === 'home') {
                    const hero = MOVIES_DB.find(m => m.popular) || MOVIES_DB[0];
                    const heroBackdrop = document.getElementById('hero-backdrop');
                    const heroTitle = document.getElementById('hero-title');
                    const heroDesc = document.getElementById('hero-description');
                    
                    if (heroBackdrop) heroBackdrop.src = hero.poster;
                    if (heroTitle) heroTitle.textContent = hero.title;
                    if (heroDesc) heroDesc.textContent = hero.description;
                }

                // Render lists
                if (currentPage === 'mylist') {
                    renderMyListSection();
                } else {
                    renderMovieRows();
                }
            }
        } catch (e) {
            console.error("Failed loading movie database:", e);
        }
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
    async function renderMyListSection() {
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

        const listIds = await getMyList();
        const listMovies = MOVIES_DB.filter(m => listIds.includes(m._id));

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
        card.dataset.id = movie._id;

        const img = document.createElement('img');
        img.src = movie.poster;
        img.alt = movie.title;
        img.className = 'card-img';
        card.appendChild(img);

        // Hover popup detail container
        const hoverDetails = document.createElement('div');
        hoverDetails.className = 'card-hover-details';

        hoverDetails.innerHTML = `
            <div class="card-controls">
                <div class="card-controls-left">
                    <button class="circle-btn btn-play-small"><i class="fas fa-play"></i></button>
                    <button class="circle-btn list-toggle-btn" title="Add to My List">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="circle-btn" title="Like"><i class="far fa-thumbs-up"></i></button>
                </div>
                <button class="circle-btn btn-info-small" title="More Info"><i class="fas fa-chevron-down"></i></button>
            </div>
            <div class="card-meta">
                <span class="match-score">${movie.match || 95}% Match</span>
                <span class="age-rating">${movie.rating}</span>
                <span class="meta-duration">${movie.duration}</span>
            </div>
            <div class="card-genres">
                ${movie.genre.map(g => `<span>${g}</span>`).join('•')}
            </div>
        `;

        card.appendChild(hoverDetails);

        // Fetch user list asynchronously to set checkmark icon
        getMyList().then(list => {
            const listToggleBtn = hoverDetails.querySelector('.list-toggle-btn');
            if (listToggleBtn && list.includes(movie._id)) {
                listToggleBtn.innerHTML = '<i class="fas fa-check"></i>';
                listToggleBtn.title = "Remove from My List";
            }
        });

        // Connect quick action list toggle on hover menu
        const listToggleBtn = hoverDetails.querySelector('.list-toggle-btn');
        if (listToggleBtn) {
            listToggleBtn.addEventListener('click', async (e) => {
                e.stopPropagation();
                listToggleBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                const added = await toggleMyList(movie._id);
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

    // Initialize application catalog
    initApp();
});
