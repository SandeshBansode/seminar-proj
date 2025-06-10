// Sample property data matching the target page
const properties = [
  {
    id: 1,
    bhk: "2BHK",
    title: "Spacious 2BHK in Cidco",
    locality: "Cidco",
    city: "Aurangabad",
    price: 15000,
    priceText: "₹15,000/month",
    area: 950,
    beds: 2,
    baths: 2,
    amenities: ["Parking", "WiFi", "Power Backup"],
    furnishing: "Semi-Furnished",
    image: "", // No image URL, placeholder used
  },
  {
    id: 2,
    bhk: "3BHK",
    title: "Modern 3BHK Near Prozone Mall",
    locality: "Chikalthana",
    city: "Aurangabad",
    price: 25000,
    priceText: "₹25,000/month",
    area: 1200,
    beds: 3,
    baths: 3,
    amenities: ["Parking", "WiFi", "Power Backup", "Water Supply"],
    furnishing: "Fully Furnished",
    image: "",
  },
  {
    id: 3,
    bhk: "1BHK",
    title: "Affordable 1BHK in Garkheda",
    locality: "Garkheda",
    city: "Aurangabad",
    price: 8000,
    priceText: "₹8,000/month",
    area: 600,
    beds: 1,
    baths: 1,
    amenities: ["Parking"],
    furnishing: "Unfurnished",
    image: "",
  },
  {
    id: 4,
    bhk: "4BHK",
    title: "Luxury 4BHK in Jalna Road",
    locality: "Jalna Road",
    city: "Aurangabad",
    price: 35000,
    priceText: "₹35,000/month",
    area: 1800,
    beds: 4,
    baths: 4,
    amenities: ["Parking", "WiFi", "Power Backup", "Water Supply"],
    furnishing: "Fully Furnished",
    image: "",
  },
  {
    id: 5,
    bhk: "2BHK",
    title: "Cozy 2BHK in Osmanpura",
    locality: "Osmanpura",
    city: "Aurangabad",
    price: 12000,
    priceText: "₹12,000/month",
    area: 800,
    beds: 2,
    baths: 2,
    amenities: ["WiFi", "Water Supply"],
    furnishing: "Semi-Furnished",
    image: "",
  },
  {
    id: 6,
    bhk: "3BHK",
    title: "Premium 3BHK in Beed Bypass",
    locality: "Beed Bypass",
    city: "Aurangabad",
    price: 22000,
    priceText: "₹22,000/month",
    area: 1100,
    beds: 3,
    baths: 2,
    amenities: ["Parking", "WiFi", "Power Backup"],
    furnishing: "Fully Furnished",
    image: "",
  },
];

// DOM elements
const priceRange = document.getElementById("price-range");
const priceRangeValue = document.getElementById("price-range-value");
const propertyType = document.getElementById("property-type");
const locality = document.getElementById("locality");
const furnishing = document.getElementById("furnishing");
const amenityCheckboxes = Array.from(document.querySelectorAll(".amenities-group input[type='checkbox']"));
const clearFiltersBtn = document.getElementById("clear-filters");
const propertyList = document.getElementById("property-list");
const propertiesFound = document.getElementById("properties-found");
const sortPrice = document.getElementById("sort-price");

// Update price range label
priceRangeValue.textContent = `₹${Number(priceRange.value).toLocaleString()}`;
priceRange.addEventListener("input", () => {
  priceRangeValue.textContent = `₹${Number(priceRange.value).toLocaleString()}`;
  filterAndRenderProperties();
});

// Clear all filters
clearFiltersBtn.addEventListener("click", () => {
  priceRange.value = 50000;
  priceRangeValue.textContent = `₹50,000`;
  propertyType.value = "";
  locality.value = "";
  furnishing.value = "";
  amenityCheckboxes.forEach(cb => cb.checked = false);
  sortPrice.value = "low-high";
  filterAndRenderProperties();
});

// Add event listeners to filters
[propertyType, locality, furnishing, sortPrice].forEach(el => {
  el.addEventListener("change", filterAndRenderProperties);
});
amenityCheckboxes.forEach(cb => cb.addEventListener("change", filterAndRenderProperties));

// Filter and render properties
function filterAndRenderProperties() {
  let filtered = properties.filter(p => {
    // Price filter
    if (p.price > Number(priceRange.value)) return false;

    // Property type filter
    if (propertyType.value && p.bhk !== propertyType.value) return false;

    // Locality filter
    if (locality.value && p.locality !== locality.value) return false;

    // Furnishing filter
    if (furnishing.value && p.furnishing !== furnishing.value) return false;

    // Amenities filter
    const selectedAmenities = amenityCheckboxes.filter(cb => cb.checked).map(cb => cb.value);
    for (const amenity of selectedAmenities) {
      if (!p.amenities.includes(amenity)) return false;
    }

    return true;
  });

  // Sort
  if (sortPrice.value === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProperties(filtered);
}

// Render properties
function renderProperties(propertiesToRender) {
  propertyList.innerHTML = "";
  propertiesFound.textContent = `${propertiesToRender.length} Properties Found`;

  if (propertiesToRender.length === 0) {
    propertyList.innerHTML = "<p>No properties found matching the filters.</p>";
    return;
  }

  propertiesToRender.forEach(p => {
    const card = document.createElement("div");
    card.className = "property-card";

    // Image placeholder SVG
    const imagePlaceholder = `
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    `;

    card.innerHTML = `
      <div class="image-container">
        <div class="bhk-label">${p.bhk}</div>
        <div class="favorite-icon" title="Add to favorites" role="button" tabindex="0" aria-label="Add to favorites">
          <svg viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="heart-icon">
            <path d="M20.8 4.6c-1.4-1.4-3.7-1.4-5.1 0l-1.7 1.7-1.7-1.7c-1.4-1.4-3.7-1.4-5.1 0-1.4 1.4-1.4 3.7 0 5.1l1.7 1.7 5.1 5.1 5.1-5.1 1.7-1.7c1.4-1.4 1.4-3.7 0-5.1z"></path>
          </svg>
        </div>
        ${p.image ? `<img src="${p.image}" alt="${p.title}" />` : imagePlaceholder}
      </div>
      <div class="property-content">
        <div class="property-title">${p.title}</div>
        <div class="property-location" title="${p.locality}, ${p.city}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin" viewBox="0 0 24 24"><path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${p.locality}, ${p.city}
        </div>
        <div class="price-area-row" style="display:flex; justify-content: space-between; align-items: center; margin-top: 0.25rem;">
          <div class="price">${p.priceText}</div>
          <div class="area">${p.area} sq ft</div>
        </div>
        <div class="details-row">
          <div title="${p.beds} Bed" style="display:flex; align-items:center; gap:0.25rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H9v4a2 2 0 0 1-2 2H3z"></path></svg>
            ${p.beds} Bed
          </div>
          <div title="${p.baths} Bath" style="display:flex; align-items:center; gap:0.25rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shower" viewBox="0 0 24 24"><path d="M3 16h18M12 3v13"></path><path d="M8 21h.01M12 21h.01M16 21h.01"></path></svg>
            ${p.baths} Bath
          </div>
        </div>
        <div class="amenities">
          ${p.amenities.map(a => `
            <div class="amenity-badge" title="${a}">
              ${getAmenityIcon(a)}
              ${a}
            </div>
          `).join('')}
        </div>
        <div class="furnishing">Furnishing: ${p.furnishing}</div>
        <div class="button-row">
          <button class="btn-contact">Contact Owner</button>
          <button class="btn-details">View Details</button>
        </div>
      </div>
    `;

    // Favorite icon toggle
    const favIcon = card.querySelector(".favorite-icon");
    favIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      favIcon.classList.toggle("favorited");
    });

    // Contact Owner button click
    const contactBtn = card.querySelector(".btn-contact");
    contactBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      alert(`Contact Owner for: ${p.title}\nPhone: +91-1234567890\nEmail: owner@example.com`);
    });

    // View Details button click
    const detailsBtn = card.querySelector(".btn-details");
    detailsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      alert(`Details for: ${p.title}\nLocation: ${p.locality}, ${p.city}\nPrice: ${p.priceText}\nArea: ${p.area} sq ft\nBeds: ${p.beds}\nBaths: ${p.baths}\nFurnishing: ${p.furnishing}\nAmenities: ${p.amenities.join(", ")}`);
    });

    propertyList.appendChild(card);
  });
}

// Helper to get SVG icon for amenities
function getAmenityIcon(name) {
  switch(name) {
    case "Parking":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle" viewBox="0 0 24 24" style="width:14px; height:14px;"><circle cx="12" cy="12" r="10"/></svg>`;
    case "WiFi":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wifi" viewBox="0 0 24 24" style="width:14px; height:14px;"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/></svg>`;
    case "Power Backup":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap" viewBox="0 0 24 24" style="width:14px; height:14px;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
    case "Water Supply":
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet" viewBox="0 0 24 24" style="width:14px; height:14px;"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`;
    default:
      return "";
  }
}

// Initial render
filterAndRenderProperties();
