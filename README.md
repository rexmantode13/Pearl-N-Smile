# Pearl'N Smile 🦷
> Dental Clinic Website for Client - Freelance Work ( 2021 - 2024 ).

Pearl'N Smile is a premium, calming, and professional web experience designed for a dental clinic in Jaipur, founded/Lead by Dr. Rishabh Jayaswani. 

Adhering to a ("Japandi") design aesthetic, the site features editorial typography, a curated earth-tone palette, rich micro-animations, and interactive components. The web application is built entirely from scratch to load instantly and deliver a premium first impression.

---

🎨 Design Philosophy

- Curated Palette: Built using soft warm creams (`#FAF8F5`), beige tones (`#F3EFE7`), and muted sage accents (`#768672`) to create a soothing, clinical-yet-warm environment.
- Editorial Typography: Styled using clean geometric headings (`Outfit`) and highly legible sans-serif body copy (`Inter`).
- Interactive Micro-animations: Subtle transitions, hover lifts, scaling cards, and interactive sliders provide a premium feel without overloading the client's browser.

---

✨ Key Features

1. Interactive Smile Transformation Slider: A custom, touch-friendly slider showing teeth whitening results using the same high-resolution close-up image layered with custom CSS color filters for 100% alignment accuracy and Clinic Image as Well.
2. Dynamic Testimonials Carousel: Auto-scrolling patient reviews featuring gold-star ratings, patient profiles, and automatic pause-on-hover behavior.
3. Smooth Accordion FAQ: Animated drop-down answers regarding treatments, pain management, and financing policies.
4. Validating Booking Form: Fully validated reservation form that triggers a glassmorphic success confirmation overlay upon successful entry.
5. Responsive Mobile Drawer: A custom hamburger navigation menu that slides in on tablet and mobile screens, optimized for all viewport breakpoints.
6. SEO & Performance Tuned: Uses HTML5 semantic elements, structured meta description tags, clear hierarchy, and SVG vector graphics to load instantly.
7. It Consist of multiple Section to help Users/Clients to Navigate easily through Website :-

   * About Pearl'N Smile Clinic with some glimpse.
   * About Dr.Rishabh Jayaswani and his Experiences with Qualifications.
   * Pearl'N Smile Workflow/approaches and their Services in detail.
   * Their Standards and Interactive Transformations through Dental clinic gallery.
   * Testimonials - Real Patient Experiences/Reviews and Location ( Address ).
   * Booking Request - Schedule Your Private Consultation.
   * And at the End a FAQ Section.

---

💻 Technology Stack

- Markup: `HTML5` (Semantic structures, SEO tags, and inline vector SVGs)
- Styling: `Vanilla CSS3` (Custom properties/variables, flexbox, grid, clip-paths, and media queries)
- Interactions: `Vanilla JavaScript (ES6)` (DOM event handlers, custom touch/mouse drag calculations, and carousel interval timers)
- Hosting-ready: 100% client-side code, requiring zero build steps or server-side dependencies.

---

📂 Project Structure

```bash
Pearl'N Smile/
├── .gitignore          # Excludes OS and local IDE settings from commits
├── index.html          # Core structure and page sections
├── style.css           # Custom Japandi design system and layouts
├── main.js             # Sticky header, mobile menu, slider, carousel, and FAQ logic
└── images/             # Localized high-quality photographic assets
    ├── clinic_interior.jpg
    ├── doctor_portrait.jpg
    ├── hero_clinic.png
    └── hero_lobby.jpg
```

---

🛠️ Quick Start ( Running Locally )

To launch the project locally:

Option A - Serve with Python (Recommended)
Run the following command in the project directory to launch a simple local development server:
```bash
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

Option B - Serve with Node.js
If you have Node.js installed, you can serve it via `npx`:
```bash
npx serve
```
Then open the port shown in your terminal (usually [http://localhost:3000](http://localhost:3000)).

Option C - Direct File Access
Simply double-click the `index.html` file to open the website directly in any web browser.
