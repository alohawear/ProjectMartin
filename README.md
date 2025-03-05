# Bridge to AI Project

This repository contains the Bridge to AI website, built with [Eleventy](https://www.11ty.dev/) (11ty). The site serves as a resource for educators integrating AI in their teaching practices.

## Project Overview

The Bridge to AI project provides Nashville Public Schools teachers with ready-to-teach, AI-integrated lesson plans that are aligned to MNPS curriculum and compliant with MNPS AI policy.

## Key Features

- **AI Frameworks**: CRAFT, EVERY, 0 to Infinity, and OFFLINE
- **Lesson Plan Library**: Ready-to-use AI-integrated lesson plans for various subjects
- **Resources**: Curated collection of AI tools and educational resources

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/username/bridge-to-ai.git
   cd bridge-to-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build the site for production:
   ```bash
   npm run build
   ```

## Project Structure

```
bridge-to-ai/
├── .eleventy.js            # Eleventy configuration
├── _data/                  # Global data files
│   ├── site.json           # Site configuration
│   ├── navigation.json     # Navigation structure
│   └── frameworks.json     # Frameworks data
├── _includes/              # Reusable components
│   ├── header.njk          # Site header
│   └── footer.njk          # Site footer
├── _layouts/               # Layout templates
│   ├── base.njk            # Base layout
│   ├── page.njk            # Page layout
│   ├── lesson_plan.njk     # Lesson plan layout
│   └── post.njk            # Blog post layout
├── assets/                 # Static assets
│   ├── css/                # Stylesheets
│   └── js/                 # JavaScript files
├── frameworks/             # Frameworks section
│   ├── craft/              # CRAFT framework
│   ├── every/              # EVERY framework
│   ├── zero-infinity/      # 0 to Infinity continuum
│   ├── offline/            # OFFLINE principles
│   └── index.md            # Frameworks overview
├── lesson-plans/           # Lesson plan repository
│   ├── english/            # English lesson plans
│   ├── math/               # Math lesson plans
│   ├── science/            # Science lesson plans
│   ├── social-studies/     # Social Studies lesson plans
│   └── index.md            # Lesson plans overview
├── resources/              # Resources section
│   └── index.md            # Resources overview
└── .github/                # GitHub configuration
    └── workflows/          # GitHub Actions workflows
        └── build-deploy.yml # Deployment workflow
```

## Completed Features

- [x] Basic site structure and configuration
- [x] Framework pages (CRAFT, EVERY, 0 to Infinity, OFFLINE)
- [x] Lesson plan structure and examples
- [x] Resources page
- [x] Layout templates
- [x] CSS styling
- [x] JavaScript functionality
- [x] Deployment workflow

## To-Do Items

- [ ] Create blog section and sample posts
- [ ] Add more lesson plans for each subject
- [ ] Create resources subpages (tools, guides, etc.)
- [ ] Add images and visual content
- [ ] Implement search functionality
- [ ] Add user feedback mechanisms
- [ ] Create AI lab information pages
- [ ] Implement analytics

## Contributing

Contributions to improve the site are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the ISC License.