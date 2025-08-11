//  <script id="filter-interactions">
        document.addEventListener('DOMContentLoaded', function () {
            const radioButtons = document.querySelectorAll('.radio-custom');
            const checkboxes = document.querySelectorAll('.checkbox-custom');
            const priceSlider = document.querySelector('input[type="range"]');
            const priceDisplay = document.querySelector('.font-medium.text-primary');
            radioButtons.forEach(radio => {
                radio.addEventListener('click', function () {
                    const input = this.previousElementSibling;
                    const name = input.name;
                    document.querySelectorAll(`input[name="${name}"]`).forEach(otherInput => {
                        const otherRadio = otherInput.nextElementSibling;
                        const dot = otherRadio.querySelector('div');
                        otherRadio.classList.remove('border-primary');
                        otherRadio.classList.add('border-gray-300');
                        dot.classList.add('hidden');
                    });
                    this.classList.remove('border-gray-300');
                    this.classList.add('border-primary');
                    const dot = this.querySelector('div');
                    dot.classList.remove('hidden');
                    input.checked = true;
                });
            });
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('click', function () {
                    const input = this.previousElementSibling;
                    const check = this.querySelector('div');
                    if (input.checked) {
                        input.checked = false;
                        this.classList.remove('border-primary');
                        this.classList.add('border-gray-300');
                        check.classList.add('hidden');
                    } else {
                        input.checked = true;
                        this.classList.remove('border-gray-300');
                        this.classList.add('border-primary');
                        check.classList.remove('hidden');
                    }
                });
            });
            if (priceSlider && priceDisplay) {
                priceSlider.addEventListener('input', function () {
                    priceDisplay.textContent = `$${this.value}/month`;
                });
            }
        });
    {/* </script> */}
    // <script id="load-more-properties">
        document.addEventListener('DOMContentLoaded', function () {
            const propertyGrid = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.xl\\:grid-cols-3.gap-6');
            const mapViewBtn = document.querySelector('button:has(.ri-map-line)');
            const listViewBtn = document.querySelector('button:has(.ri-list-unordered)');
            function toggleViewMode(mode) {
                if (mode === 'list') {
                    propertyGrid.classList.remove('grid-cols-1', 'md:grid-cols-2', 'xl:grid-cols-3', 'gap-6');
                    propertyGrid.classList.add('flex', 'flex-col', 'gap-4');
                    propertyGrid.querySelectorAll('.bg-white.rounded-xl').forEach(card => {
                        card.classList.add('flex', 'flex-row');
                        const imgContainer = card.querySelector('.relative');
                        const contentContainer = card.querySelector('.p-4');
                        imgContainer.classList.add('w-1/3', 'shrink-0');
                        imgContainer.classList.remove('w-full');
                        contentContainer.classList.add('flex-1');
                        const img = imgContainer.querySelector('img');
                        img.classList.remove('w-full');
                        img.classList.add('w-full', 'h-full');
                    });
                    listViewBtn.classList.remove('border', 'border-gray-300', 'hover:border-primary');
                    listViewBtn.classList.add('bg-primary', 'text-white', 'hover:bg-blue-600');
                    mapViewBtn.classList.remove('bg-primary', 'text-white', 'hover:bg-blue-600');
                    mapViewBtn.classList.add('border', 'border-gray-300', 'hover:border-primary');
                } else {
                    propertyGrid.classList.remove('flex', 'flex-col', 'gap-4');
                    propertyGrid.classList.add('grid-cols-1', 'md:grid-cols-2', 'xl:grid-cols-3', 'gap-6');
                    propertyGrid.querySelectorAll('.bg-white.rounded-xl').forEach(card => {
                        card.classList.remove('flex', 'flex-row');
                        const imgContainer = card.querySelector('.relative');
                        const contentContainer = card.querySelector('.p-4');
                        imgContainer.classList.remove('w-1/3', 'shrink-0');
                        imgContainer.classList.add('w-full');
                        contentContainer.classList.remove('flex-1');
                        const img = imgContainer.querySelector('img');
                        img.classList.remove('w-full', 'h-full');
                        img.classList.add('w-full');
                    });
                    mapViewBtn.classList.remove('border', 'border-gray-300', 'hover:border-primary');
                    mapViewBtn.classList.add('bg-primary', 'text-white', 'hover:bg-blue-600');
                    listViewBtn.classList.remove('bg-primary', 'text-white', 'hover:bg-blue-600');
                    listViewBtn.classList.add('border', 'border-gray-300', 'hover:border-primary');
                }
            }
            if (mapViewBtn && listViewBtn) {
                mapViewBtn.addEventListener('click', () => toggleViewMode('grid'));
                listViewBtn.addEventListener('click', () => toggleViewMode('list'));
            }
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            const loadingSpinner = document.getElementById('loadingSpinner');
            const resultsCount = document.querySelector('.text-sm.text-gray-500');
            let currentCount = 6;
            const totalResults = 248;
            const newProperties = [
                {
                    img: "https://readdy.ai/api/search-image?query=Modern%20student%20apartment%20with%20balcony%2C%20contemporary%20furniture%2C%20floor-to-ceiling%20windows%2C%20stylish%20decor%2C%20bright%20and%20airy%20living%20space%2C%20perfect%20for%20university%20life&width=400&height=250&seq=room007&orientation=landscape",
                    price: "780",
                    name: "Skyline Student Residences",
                    location: "0.4 miles from Yale University",
                    type: "Single Room",
                    availability: "Available Apr 1",
                    amenities: ["wifi", "car", "dumbbell"]
                },
                {
                    img: "https://readdy.ai/api/search-image?query=Cozy%20shared%20student%20living%20space%20with%20modern%20kitchen%2C%20study%20nook%2C%20comfortable%20seating%20area%2C%20natural%20lighting%2C%20contemporary%20design%20for%20college%20roommates&width=400&height=250&seq=room008&orientation=landscape",
                    price: "550",
                    name: "College Grove Commons",
                    location: "0.6 miles from Princeton",
                    type: "Shared Room",
                    availability: "3 spots left",
                    amenities: ["wifi", "washing-machine", "shield-check"]
                },
                {
                    img: "https://readdy.ai/api/search-image?query=Luxury%20student%20studio%20with%20city%20views%2C%20modern%20appliances%2C%20designer%20furniture%2C%20spacious%20layout%2C%20high-end%20finishes%2C%20perfect%20for%20graduate%20students&width=400&height=250&seq=room009&orientation=landscape",
                    price: "920",
                    name: "Elite Campus Studios",
                    location: "0.3 miles from Georgetown",
                    type: "Studio",
                    availability: "Available Now",
                    amenities: ["wifi", "car", "restaurant"]
                },
                {
                    img: "https://readdy.ai/api/search-image?query=Contemporary%20student%20housing%20with%20private%20bathroom%2C%20built-in%20storage%2C%20study%20desk%2C%20modern%20bed%2C%20large%20windows%2C%20minimalist%20design&width=400&height=250&seq=room010&orientation=landscape",
                    price: "690",
                    name: "Academic Heights Living",
                    location: "0.9 miles from Brown University",
                    type: "Single Room",
                    availability: "Available May 1",
                    amenities: ["wifi", "bike", "shield-check"]
                },
                {
                    img: "https://readdy.ai/api/search-image?query=Student%20shared%20apartment%20with%20modern%20common%20area%2C%20individual%20study%20spaces%2C%20contemporary%20furnishings%2C%20bright%20interior%2C%20perfect%20for%20socializing&width=400&height=250&seq=room011&orientation=landscape",
                    price: "495",
                    name: "Scholar's Retreat",
                    location: "0.5 miles from Duke University",
                    type: "Shared Room",
                    availability: "2 spots left",
                    amenities: ["wifi", "washing-machine", "restaurant"]
                },
                {
                    img: "https://readdy.ai/api/search-image?query=Premium%20student%20studio%20apartment%20with%20sleeping%20loft%2C%20modern%20kitchen%2C%20designer%20furniture%2C%20urban%20views%2C%20luxury%20finishes%20for%20upscale%20student%20living&width=400&height=250&seq=room012&orientation=landscape",
                    price: "880",
                    name: "Campus Luxury Lofts",
                    location: "0.2 miles from UCLA",
                    type: "Studio",
                    availability: "Available Jun 1",
                    amenities: ["wifi", "car", "dumbbell"]
                }
            ];
            function createPropertyCard(property) {
                return `
<div class="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
<div class="relative">
<img src="${property.img}" alt="Property" class="w-full h-48 object-cover object-top">
<button class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">
<div class="w-5 h-5 flex items-center justify-center">
<i class="ri-heart-line text-gray-600"></i>
</div>
</button>
<div class="absolute bottom-3 left-3 bg-primary text-white px-2 py-1 rounded text-sm font-medium">$${property.price}/month</div>
</div>
<div class="p-4">
<h3 class="font-semibold text-gray-900 mb-2">${property.name}</h3>
<p class="text-sm text-gray-600 mb-3">${property.location}</p>
<div class="flex items-center gap-4 mb-3">
<span class="text-sm text-gray-700">${property.type}</span>
<span class="text-sm text-secondary font-medium">${property.availability}</span>
</div>
<div class="flex items-center gap-3 mb-4">
${property.amenities.map(amenity => `
<div class="w-4 h-4 flex items-center justify-center text-gray-500">
<i class="ri-${amenity}-line"></i>
</div>
`).join('')}
</div>
<div class="flex gap-2">
<button class="flex-1 bg-primary text-white py-2 rounded-button! hover:bg-blue-600 text-sm font-medium whitespace-nowrap">View Details</button>
<button class="px-3 py-2 border border-gray-300 rounded-button! hover:border-primary text-sm">
<div class="w-4 h-4 flex items-center justify-center">
<i class="ri-message-line"></i>
</div>
</button>
</div>
</div>
</div>
`;
            }
            loadMoreBtn.addEventListener('click', function () {
                loadingSpinner.classList.remove('hidden');
                loadMoreBtn.querySelector('span').textContent = 'Loading...';
                setTimeout(() => {
                    const fragment = document.createDocumentFragment();
                    newProperties.forEach(property => {
                        const propertyElement = document.createElement('div');
                        propertyElement.innerHTML = createPropertyCard(property);
                        fragment.appendChild(propertyElement.firstChild);
                    });
                    propertyGrid.appendChild(fragment);
                    currentCount += newProperties.length;
                    resultsCount.textContent = `${currentCount} results found`;
                    loadingSpinner.classList.add('hidden');
                    loadMoreBtn.querySelector('span').textContent = 'Show All Results';
                    if (currentCount >= totalResults) {
                        loadMoreBtn.style.display = 'none';
                    }
                    const newFavoriteButtons = propertyGrid.querySelectorAll('button[class*="absolute top-3 right-3"]');
                    newFavoriteButtons.forEach(button => {
                        button.addEventListener('click', function () {
                            const icon = this.querySelector('i');
                            if (icon.classList.contains('ri-heart-line')) {
                                icon.classList.remove('ri-heart-line', 'text-gray-600');
                                icon.classList.add('ri-heart-fill', 'text-red-500');
                            } else {
                                icon.classList.remove('ri-heart-fill', 'text-red-500');
                                icon.classList.add('ri-heart-line', 'text-gray-600');
                            }
                        });
                    });
                }, 1000);
            });
        });
    {/* </script> */}
    // <script id="favorite-interactions">
        document.addEventListener('DOMContentLoaded', function () {
            const favoriteButtons = document.querySelectorAll('button[class*="absolute top-3 right-3"]');
            favoriteButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const icon = this.querySelector('i');
                    if (icon.classList.contains('ri-heart-line')) {
                        icon.classList.remove('ri-heart-line', 'text-gray-600');
                        icon.classList.add('ri-heart-fill', 'text-red-500');
                    } else {
                        icon.classList.remove('ri-heart-fill', 'text-red-500');
                        icon.classList.add('ri-heart-line', 'text-gray-600');
                    }
                });
            });
        });
    {/* </script> */}
    // <script id="mobile-menu">
        document.addEventListener('DOMContentLoaded', function () {
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const menuIcon = mobileMenuBtn.querySelector('i');
            let isMenuOpen = false;
            mobileMenuBtn.addEventListener('click', function () {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    mobileMenu.classList.remove('hidden');
                    menuIcon.classList.remove('ri-menu-line');
                    menuIcon.classList.add('ri-close-line');
                } else {
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('ri-close-line');
                    menuIcon.classList.add('ri-menu-line');
                }
            });
            window.addEventListener('resize', function () {
                if (window.innerWidth >= 768) {
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('ri-close-line');
                    menuIcon.classList.add('ri-menu-line');
                    isMenuOpen = false;
                }
            });
        });
    {/* </script> */}