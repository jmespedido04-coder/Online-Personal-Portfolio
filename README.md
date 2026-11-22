# John Michael Espedido | Online Portfolio

A responsive, dark-themed personal portfolio website for John Michael Espedido, a student UI designer and front-end developer from the College of Computer Studies. It presents his background, skills, certification and selected projects in a single scrolling page.

## Features

- **Animated hero**: the intro text includes a role switcher that cycles through UI Designer, Student, UX Designer and Developer.
- **Certification badge**: shows the Pearson IT Specialist HTML and CSS badge.
- **Flip-card ID**: a lanyard-style ID card in the About section that sways gently. Hover to flip it (or tap on touch devices, or press Enter/Space) and reveal the skills list on the back.
- **Project deck**: a single stacked card deck in the Projects section. Hover to fan out the cards, click to shuffle to the next project. The title, description and tool icons change with the front card.
- **Scroll animations**: sections slide in from the left or right, rise up, pop in, or drop in (the ID card). Nothing fades in.
- **Contact form**: underline animations on focus, simple client-side validation and a confirmation message.
- **Navigation**: a fixed header with scroll-spy highlighting, a right-aligned menu on desktop and a collapsible menu on mobile.
- **Accessibility**: keyboard support for the ID card and project deck, visible focus states, and `prefers-reduced-motion` support that turns off animations.

## Built With

- HTML5
- CSS3 (custom properties, grid, flexbox, `color-mix`, animations)
- JavaScript (vanilla)
- [Bootstrap 5.3.3](https://getbootstrap.com/) (layout, navbar collapse)
- [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/)
- [Google Fonts](https://fonts.google.com/): Playfair Display and Inter

Bootstrap, Bootstrap Icons and the fonts are loaded from CDNs, so an internet connection is needed for them to appear.

## Project Structure

```
.
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── app.js
└── images/
    ├── profile.png      # hero photo (square, face centered)
    ├── id-front.png     # front of the ID card (portrait)
    ├── badge.png        # certification badge
    ├── project1.png     # Jama Cellphone Repair Shop (16:10)
    ├── project2.png     # Project Busilak logo (16:10)
    └──  project3.png     # Online Portfolio Figma design (16:10)
```

## Getting Started

No build step is required.

1. Download or clone the project and keep the folder structure above.
2. Put your images in the `images/` folder using the file names listed.
3. Open `index.html` in a browser, or serve the folder with any static server, for example:

   ```bash
   python3 -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

## Page Sections

| Section | Description |
|---|---|
| Home | Introduction, rotating roles, "Contact me" and "View my work" buttons, profile photo |
| Certification | IT Specialist HTML and CSS badge |
| About | Short bio, journey and goal, flip-card ID with skills (Frontend, Backend, Others) |
| Projects | Click-to-shuffle deck of three projects |
| Contact | Contact details, social links and message form |

## Projects Featured

1. **Jama Cellphone Repair Shop**: front-end and Figma design for a local repair shop (HTML, CSS, Figma).
2. **Project Busilak Logo**: logo design for a community project (Illustrator, Canva).
3. **Online Portfolio Figma Design**: a portfolio website designed in Figma (Figma).

## Customizing

**Images.** All image slots are filled from the `IMAGES` list at the top of `js/app.js`. Change a path there to point to a different file. If an image is missing, a built-in placeholder (gradient, text or icon) is shown instead, so the page still looks complete.

**Tool icons.** HTML, CSS, Illustrator and Canva icons use Bootstrap Icons by default, and are replaced by `images/html.png`, `images/css.png`, `images/ai.png` and `images/canva.png` if those files exist. The Figma icon is an inline SVG in `index.html`.

**Colors and theme.** Edit the CSS variables in `:root` at the top of `css/style.css` (`--accent`, `--bg`, `--text`, and so on).

**Adding a project.** In the Projects section of `index.html`:

1. Add another `.pcard` inside `#stack` and give it a `data-pos` value.
2. Add a matching `.info-panel` inside `.proj-info`.
3. Add its image path to `IMAGES` in `js/app.js`.

The deck script reads the number of cards automatically. The stack styles currently show three positions (`data-pos` 0, 1 and 2), so add styles for any further positions in `css/style.css`.

**Scroll animations.** Add `reveal` to an element's class list and set `data-reveal` to `left`, `right`, `pop` or `drop`. With no value it rises up from below. The effects are defined in the `REVEAL` block of `css/style.css`.

**Contact form.** The form currently validates the email and message and shows a confirmation, but it does not send anything. To receive messages, connect it to a form service or backend, in the submit handler in `js/app.js`.

## Browser Support

Works in current versions of Chrome, Edge, Firefox and Safari. The design uses `color-mix()` and `aspect-ratio`, so very old browsers are not supported.

## Author

**John Michael Espedido**, College of Computer Studies. Aspiring UI/UX designer and developer.
