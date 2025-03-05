# Bridge to AI Website Implementation Plan

## Project Overview

The "Bridge to AI" project is creating a comprehensive resource for Nashville Public Schools teachers to effectively integrate AI in education. This implementation plan outlines the development of a static website using GitHub Pages and Eleventy (11ty) to host the lesson plan library and related frameworks, based on the NCDPI GenAI Implementation Guidelines.

## Key Project Elements

- **Bridge to AI Lesson Plan Library**: A repository of ready-to-teach, AI-integrated lesson plans aligned to MNPS curriculum and compliant with MNPS AI policy
- **AI Frameworks**:
  - CRAFT (prompting framework)
  - EVERY (responsible use framework)
  - "0 to Infinity" (student AI integration continuum)
  - OFFLINE (principles for data management)
- **AI Lab**: Physical AI lab located in the Pearl High Building at MLK

## GitHub Pages with Eleventy (11ty) Implementation Plan

### Step 1: Repository and Environment Setup

1. Create a new GitHub repository named `bridge-to-ai` (or similar)
2. Clone the repository to your local machine
3. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```
4. Install Eleventy and other dependencies:
   ```bash
   npm install @11ty/eleventy --save-dev
   npm install luxon markdown-it --save-dev
   ```
5. Create a basic Eleventy configuration file (`.eleventy.js`):
   ```javascript
   module.exports = function(eleventyConfig) {
     // Copy the assets directory to the output
     eleventyConfig.addPassthroughCopy("assets");
     
     // Add filters, shortcodes, etc. here
     
     return {
       dir: {
         input: "src",
         output: "_site",
         includes: "_includes",
         layouts: "_layouts",
         data: "_data"
       },
       templateFormats: ["md", "njk", "html"],
       markdownTemplateEngine: "njk",
       htmlTemplateEngine: "njk",
       dataTemplateEngine: "njk"
     };
   };
   ```
6. Configure your package.json scripts:
   ```json
   "scripts": {
     "build": "eleventy",
     "serve": "eleventy --serve",
     "debug": "DEBUG=* eleventy"
   }
   ```

### Step 2: Site Structure

```
bridge-to-ai/
├── .eleventy.js            # Eleventy configuration file
├── package.json            # Node.js project file
├── src/                    # Source directory
│   ├── index.md            # Homepage
│   ├── about.md            # About the project and team
│   ├── frameworks/         # Frameworks section
│   │   ├── index.md        # Overview of frameworks
│   │   ├── craft.md        # CRAFT framework
│   │   ├── every.md        # EVERY framework
│   │   ├── zero-infinity.md # 0 to Infinity continuum
│   │   └── offline.md      # OFFLINE principles
│   ├── lesson-plans/       # Lesson plan repository
│   │   ├── index.md        # Overview of lesson plans
│   │   ├── math/           # Math lesson plans
│   │   ├── science/        # Science lesson plans
│   │   ├── english/        # English/Language Arts lesson plans
│   │   ├── social-studies/ # Social Studies lesson plans
│   │   └── other/          # Other subjects
│   ├── resources/          # Additional resources
│   │   ├── index.md        # Resources overview
│   │   ├── tools.md        # AI tools approved for educational use
│   │   ├── guides.md       # Teacher guides
│   │   └── research.md     # Research and background
│   ├── policy/             # MNPS AI policy
│   │   ├── index.md        # Policy overview
│   │   └── guidelines.md   # Implementation guidelines
│   ├── lab/                # Information about the AI lab
│   │   ├── index.md        # Lab overview
│   │   ├── visit.md        # How to visit/use the lab
│   │   └── projects.md     # Current lab projects
│   ├── blog/               # Blog for updates and news
│   │   ├── index.md        # Blog overview
│   │   └── posts/          # Blog posts
│   ├── _includes/          # Reusable components
│   │   ├── header.njk      # Site header
│   │   ├── footer.njk      # Site footer
│   │   └── navigation.njk  # Navigation menu
│   ├── _layouts/           # Layout templates
│   │   ├── base.njk        # Base layout
│   │   ├── page.njk        # Standard page layout
│   │   ├── lesson-plan.njk # Lesson plan layout
│   │   └── post.njk        # Blog post layout
│   ├── _data/              # Global data files
│   │   ├── site.json       # Site configuration
│   │   ├── navigation.json # Navigation structure
│   │   └── frameworks.json # Frameworks data
│   └── contact.md          # Contact information
├── assets/                 # Static assets (copied to _site)
│   ├── css/                # Stylesheets
│   ├── js/                 # JavaScript files
│   └── images/             # Image files
└── _site/                  # Output directory (generated)
```

### Step 3: Content Development

#### Homepage (index.md)
```markdown
---
layout: page.njk
title: Bridge to AI
permalink: /
---

<div class="hero">
  <h1>{{ title }}</h1>
  <p>Empowering Nashville teachers with AI-integrated lesson plans</p>
</div>

## Welcome to Bridge to AI

The Bridge to AI project provides Nashville Public Schools teachers with ready-to-teach, AI-integrated lesson plans that are aligned to MNPS curriculum and compliant with MNPS AI policy.

> "In 1951, Mary W. Jackson started at NASA as a human computer. Educators at NASA gave her the right opportunities at the right time, and by 1958 she was an aerospace engineer. As our educators develop AI literacy, they'll need a bridge to help bring these new opportunities to as many students as possible."

### Explore Our Resources

- [AI Frameworks](/frameworks/) - Learn about CRAFT, EVERY, and more
- [Lesson Plans](/lesson-plans/) - Browse our collection of AI-integrated lessons
- [AI Lab](/lab/) - Visit our physical AI laboratory at MLK

### Featured Lesson Plans

{% for plan in collections.featured %}
<div class="lesson-card">
  <h3><a href="{{ plan.url }}">{{ plan.data.title }}</a></h3>
  <p>{{ plan.data.subject }} | Grades {{ plan.data.grade }}</p>
  <p>{{ plan.data.summary }}</p>
</div>
{% endfor %}

<div class="cta">
  <a href="/lesson-plans/" class="button">Explore All Lesson Plans</a>
</div>
```

#### About Page (about.md)
```markdown
---
layout: page.njk
title: About Bridge to AI
permalink: /about/
---

# About the Bridge to AI Project

The Bridge to AI project was created to help Nashville Public Schools teachers integrate AI literacy into their classrooms effectively and responsibly.

## Our Mission

To provide educators with high-quality, ready-to-teach, AI-integrated lesson plans that align with MNPS curriculum and comply with MNPS AI policy.

## The Curriculum Taskforce

Our curriculum taskforce consists of:
- Veteran teachers from across MNPS
- District curriculum experts
- Data scientists and AI specialists

## Timeline

- **Phase 1 (Spring 2024)**: Initial framework development and pilot lesson plans
- **Phase 2 (Summer 2024)**: Teacher training and expansion of lesson plan library
- **Phase 3 (Fall 2024)**: Full implementation and continuous improvement
```

#### Frameworks Section

**CRAFT Framework (craft.md)**
```markdown
---
layout: page.njk
title: The CRAFT Prompting Framework
permalink: /frameworks/craft/
---

# The CRAFT Prompting Framework

The CRAFT framework provides a structured approach to designing effective AI prompts:

- **C**ontext: Provide clear background information
- **R**ole: Specify the expertise needed
- **A**udience: Identify who the output is for 
- **F**ormat: Detail the desired output format
- **T**one: Set the appropriate style and approach

## Examples in Education

### Example 1: Math Word Problem Generator

```
Context: I'm teaching a 7th-grade math class on proportional relationships.
Role: You are an experienced middle school math teacher who specializes in creating engaging word problems.
Audience: The problems will be for 7th-grade students with varied math abilities.
Format: Create 5 word problems that involve proportional relationships in real-world contexts. Each problem should include the solution steps.
Tone: Make the problems relatable and interesting for 13-year-old students. Use scenarios they would find relevant.
```

### Example 2: Historical Document Analysis

```
Context: My 10th-grade history class is studying the Civil Rights Movement.
Role: You are a historian specializing in 20th century American civil rights history.
Audience: The analysis is for high school sophomores who have basic knowledge of the civil rights era.
Format: Analyze the attached speech excerpt, highlighting 3 key rhetorical devices and explaining their historical significance. Include 2-3 discussion questions.
Tone: Academic but accessible, avoiding overly complex terminology.
```

## Implementation Guide

1. **Identify Your Need**: Determine exactly what you want the AI to produce
2. **Complete Each Element**:
   - Context: What background information does the AI need?
   - Role: What expertise should the AI emulate?
   - Audience: Who will use the output?
   - Format: What structure should the output follow?
   - Tone: What style or voice is appropriate?
3. **Review and Refine**: Check your prompt for clarity and specificity
4. **Test and Iterate**: Try your prompt and refine based on results
```

Similar pages would be created for:
- EVERY framework
- 0 to Infinity continuum
- OFFLINE principles

#### Lesson Plan Structure

**Lesson Plan Front Matter and Template**
Each lesson plan will use a consistent structure with front matter:

```markdown
---
layout: lesson-plan.njk
title: "AI-Enhanced Data Analysis with Spreadsheets"
subject: Math
grade: "9-12"
duration: "2 class periods (90 minutes each)"
ai_level: "AI-Enhanced"
summary: "Students use AI to analyze and visualize real-world data sets while learning essential statistical concepts."
objectives: |
  - Apply statistical methods to analyze large datasets
  - Use AI tools to efficiently clean and organize data
  - Create compelling visualizations to communicate findings
  - Critically evaluate AI-generated interpretations of data
materials: |
  - Computers with internet access
  - Spreadsheet software (Google Sheets or Excel)
  - Access to approved AI tools (e.g., ChatGPT or similar)
  - Sample datasets (provided)
standards: |
  - CCSS.MATH.CONTENT.HSS.ID.A.1
  - CCSS.MATH.CONTENT.HSS.ID.A.2
  - CCSS.MATH.CONTENT.HSS.ID.A.3
assessment: |
  - Project rubric evaluating data analysis accuracy
  - Quality of visualizations and insights
  - Reflection on the role of AI in the analysis process
extensions: |
  - Students can collect their own datasets for analysis
  - Advanced students can compare AI analysis with manual methods
  - Cross-curricular extensions with science or social studies
teacher_notes: |
  - Review AI tool outputs before sharing with students
  - Emphasize critical thinking about AI-generated content
  - Consider pairing students with different technical abilities
tags:
  - math
  - statistics
  - data analysis
  - featured
---

## Day 1: Introduction to AI-Assisted Data Analysis

### Opening (15 minutes)

1. Begin with a discussion about how data is used in various fields and the role AI plays in modern data analysis.
2. Show examples of AI-generated data visualizations and discuss their strengths and limitations.
3. Introduce the project and datasets students will be working with.

### AI Tool Introduction (25 minutes)

1. Demonstrate how to use [specific AI tool] to assist with data analysis tasks:
   - Cleaning and formatting data
   - Generating initial visualizations
   - Identifying patterns and trends

2. Share the CRAFT and EVERY frameworks for interacting with AI tools responsibly.

### Hands-on Exploration (40 minutes)

1. Divide students into pairs and distribute the sample datasets.
2. Guide students through initial data exploration using both traditional methods and AI assistance.
3. Have students document differences in their approach and findings.

### Closing (10 minutes)

1. Discuss initial observations about using AI for data analysis.
2. Preview Day 2 activities and assign any preparation work.

## Day 2: Advanced Analysis and Presentation

[Day 2 content follows same structure...]
```

#### Eleventy Configuration for Lesson Plan Collections

Update `.eleventy.js` to handle lesson plan collections:

```javascript
module.exports = function(eleventyConfig) {
  // Pass through assets
  eleventyConfig.addPassthroughCopy("assets");

  // Create collections for lesson plans by subject
  eleventyConfig.addCollection("lessonPlans", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/lesson-plans/**/*.md");
  });
  
  eleventyConfig.addCollection("mathLessons", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/lesson-plans/math/**/*.md");
  });
  
  eleventyConfig.addCollection("scienceLessons", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/lesson-plans/science/**/*.md");
  });
  
  // Add collection for featured lessons
  eleventyConfig.addCollection("featured", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.tags && item.data.tags.includes("featured"))
      .sort((a, b) => a.date - b.date);
  });

  // Add filter for grade level formatting
  eleventyConfig.addFilter("formatGrade", function(grade) {
    return `Grade${grade.includes("-") ? "s" : ""} ${grade}`;
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
```

### Step 4: Technical Implementation

#### Base Layout Template (src/_layouts/base.njk)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{% if title %}{{ title }} | {% endif %}Bridge to AI</title>
  <meta name="description" content="{% if description %}{{ description }}{% else %}AI-integrated lesson plans for Nashville Public Schools{% endif %}">
  <link rel="stylesheet" href="/assets/css/styles.css">
</head>
<body>
  {% include "header.njk" %}
  
  <main>
    {{ content | safe }}
  </main>
  
  {% include "footer.njk" %}
  
  <script src="/assets/js/main.js"></script>
</body>
</html>
```

#### Page Layout (src/_layouts/page.njk)

```html
---
layout: base.njk
---
<div class="container">
  <div class="content">
    {{ content | safe }}
  </div>
</div>
```

#### Lesson Plan Layout (src/_layouts/lesson-plan.njk)

```html
---
layout: base.njk
---
<div class="container lesson-plan">
  <header class="lesson-header">
    <h1>{{ title }}</h1>
    <div class="lesson-meta">
      <span class="subject">{{ subject }}</span>
      <span class="grade">{{ grade | formatGrade }}</span>
      <span class="duration">{{ duration }}</span>
      <span class="ai-level">{{ ai_level }}</span>
    </div>
  </header>

  <div class="lesson-summary">
    <p>{{ summary }}</p>
  </div>

  <section class="objectives">
    <h2>Learning Objectives</h2>
    {{ objectives | safe }}
  </section>

  <section class="materials">
    <h2>Materials</h2>
    {{ materials | safe }}
  </section>

  <section class="procedure">
    <h2>Procedure</h2>
    {{ content | safe }}
  </section>

  <section class="assessment">
    <h2>Assessment</h2>
    {{ assessment | safe }}
  </section>

  <section class="standards">
    <h2>Curriculum Standards</h2>
    {{ standards | safe }}
  </section>

  {% if extensions %}
  <section class="extensions">
    <h2>Extensions</h2>
    {{ extensions | safe }}
  </section>
  {% endif %}

  {% if teacher_notes %}
  <section class="teacher-notes">
    <h2>Teacher Notes</h2>
    {{ teacher_notes | safe }}
  </section>
  {% endif %}
</div>
```

#### Navigation Data (src/_data/navigation.json)

```json
{
  "main": [
    {
      "text": "Home",
      "url": "/"
    },
    {
      "text": "About",
      "url": "/about/"
    },
    {
      "text": "Frameworks",
      "url": "/frameworks/"
    },
    {
      "text": "Lesson Plans",
      "url": "/lesson-plans/",
      "children": [
        {
          "text": "Math",
          "url": "/lesson-plans/math/"
        },
        {
          "text": "Science",
          "url": "/lesson-plans/science/"
        },
        {
          "text": "English",
          "url": "/lesson-plans/english/"
        },
        {
          "text": "Social Studies",
          "url": "/lesson-plans/social-studies/"
        }
      ]
    },
    {
      "text": "Resources",
      "url": "/resources/"
    },
    {
      "text": "Policy",
      "url": "/policy/"
    },
    {
      "text": "AI Lab",
      "url": "/lab/"
    },
    {
      "text": "Blog",
      "url": "/blog/"
    },
    {
      "text": "Contact",
      "url": "/contact/"
    }
  ]
}
```

#### Navigation Component (src/_includes/navigation.njk)

```html
<nav class="main-nav">
  <ul>
    {% for item in navigation.main %}
    <li {% if page.url == item.url %}class="active"{% endif %}>
      <a href="{{ item.url }}">{{ item.text }}</a>
      {% if item.children %}
      <ul class="sub-menu">
        {% for child in item.children %}
        <li {% if page.url == child.url %}class="active"{% endif %}>
          <a href="{{ child.url }}">{{ child.text }}</a>
        </li>
        {% endfor %}
      </ul>
      {% endif %}
    </li>
    {% endfor %}
  </ul>
</nav>
```

#### Filtering System for Lesson Plans

Create a JavaScript-based filtering system for lesson plans:

**src/lesson-plans/index.md**
```markdown
---
layout: page.njk
title: Lesson Plans
permalink: /lesson-plans/
---

# AI-Integrated Lesson Plans

Browse our collection of ready-to-teach, AI-integrated lesson plans aligned to MNPS curriculum.

<div class="filter-controls">
  <div class="filter-group">
    <label for="subject-filter">Subject:</label>
    <select id="subject-filter">
      <option value="all">All Subjects</option>
      <option value="math">Math</option>
      <option value="science">Science</option>
      <option value="english">English</option>
      <option value="social-studies">Social Studies</option>
      <option value="other">Other</option>
    </select>
  </div>
  
  <div class="filter-group">
    <label for="grade-filter">Grade Level:</label>
    <select id="grade-filter">
      <option value="all">All Grades</option>
      <option value="k-5">K-5</option>
      <option value="6-8">6-8</option>
      <option value="9-12">9-12</option>
    </select>
  </div>
  
  <div class="filter-group">
    <label for="ai-level-filter">AI Integration Level:</label>
    <select id="ai-level-filter">
      <option value="all">All Levels</option>
      <option value="AI-Free">AI-Free/AI-Resistant</option>
      <option value="AI-Assisted">AI-Assisted</option>
      <option value="AI-Enhanced">AI-Enhanced</option>
      <option value="AI-Empowered">AI-Empowered</option>
    </select>
  </div>
  
  <div class="filter-group">
    <label for="search">Search:</label>
    <input type="text" id="search" placeholder="Keywords...">
  </div>
</div>

<div class="lesson-plan-grid">
  {% for plan in collections.lessonPlans %}
  <div class="lesson-card" 
       data-subject="{{ plan.data.subject | lower }}" 
       data-grade="{{ plan.data.grade | lower }}" 
       data-ai-level="{{ plan.data.ai_level }}">
    <h3><a href="{{ plan.url }}">{{ plan.data.title }}</a></h3>
    <div class="lesson-meta">
      <span class="subject">{{ plan.data.subject }}</span>
      <span class="grade">{{ plan.data.grade | formatGrade }}</span>
      <span class="duration">{{ plan.data.duration }}</span>
      <span class="ai-level">{{ plan.data.ai_level }}</span>
    </div>
    <p>{{ plan.data.summary }}</p>
    <a href="{{ plan.url }}" class="button">View Lesson</a>
  </div>
  {% endfor %}
</div>

<div class="no-results" style="display: none;">
  <p>No lesson plans match your current filters. Try adjusting your criteria.</p>
</div>

<script src="/assets/js/lesson-filter.js"></script>
```

**assets/js/lesson-filter.js**
```javascript
document.addEventListener('DOMContentLoaded', function() {
  const subjectFilter = document.getElementById('subject-filter');
  const gradeFilter = document.getElementById('grade-filter');
  const aiLevelFilter = document.getElementById('ai-level-filter');
  const searchInput = document.getElementById('search');
  const lessonCards = document.querySelectorAll('.lesson-card');
  const noResults = document.querySelector('.no-results');
  
  function filterLessons() {
    const subjectValue = subjectFilter.value;
    const gradeValue = gradeFilter.value;
    const aiLevelValue = aiLevelFilter.value;
    const searchValue = searchInput.value.toLowerCase();
    
    let visibleCount = 0;
    
    lessonCards.forEach(card => {
      const subject = card.dataset.subject;
      const grade = card.dataset.grade;
      const aiLevel = card.dataset.aiLevel;
      const text = card.textContent.toLowerCase();
      
      const matchesSubject = subjectValue === 'all' || subject === subjectValue;
      const matchesGrade = gradeValue === 'all' || grade.includes(gradeValue);
      const matchesAiLevel = aiLevelValue === 'all' || aiLevel === aiLevelValue;
      const matchesSearch = searchValue === '' || text.includes(searchValue);
      
      if (matchesSubject && matchesGrade && matchesAiLevel && matchesSearch) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }
  
  subjectFilter.addEventListener('change', filterLessons);
  gradeFilter.addEventListener('change', filterLessons);
  aiLevelFilter.addEventListener('change', filterLessons);
  searchInput.addEventListener('input', filterLessons);
});
```

### Step 5: Design and Branding

Create a simple, clean, and accessible design that matches MNPS branding:

**assets/css/styles.css**
```css
/* Base styles */
:root {
  --primary-color: #0056b3; /* Adjust to match MNPS branding */
  --secondary-color: #004080;
  --accent-color: #ff9800;
  --text-color: #333;
  --light-bg: #f5f7fa;
  --border-color: #e1e4e8;
  --success-color: #28a745;
  --warning-color: #ffc107;
  --danger-color: #dc3545;
  --font-main: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  --font-headings: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

/* Reset and base elements */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-main);
  line-height: 1.6;
  color: var(--text-color);
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-headings);
  margin-bottom: 1rem;
  line-height: 1.3;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.75rem;
}

p {
  margin-bottom: 1rem;
}

a {
  color: var(--primary-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

main {
  padding: 2rem 0;
}

/* ... Additional styles for components, layout, etc. ... */

/* Lesson plan styles */
.lesson-card {
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.lesson-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.lesson-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.lesson-meta span {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: var(--light-bg);
}

.ai-level {
  background-color: var(--primary-color);
  color: white;
}

/* Filter controls */
.filter-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--light-bg);
  border-radius: 4px;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.filter-group select,
.filter-group input {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-family: inherit;
}

/* Responsive design */
@media (max-width: 768px) {
  .filter-controls {
    flex-direction: column;
  }
  
  .lesson-plan-grid {
    grid-template-columns: 1fr;
  }
}
```

### Step 6: GitHub Pages Deployment

To deploy to GitHub Pages using Eleventy, add the following to your workflow:

1. Create a GitHub Actions workflow file at `.github/workflows/build-deploy.yml`:

```yaml
name: Build and Deploy
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build site
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        if: github.ref == 'refs/heads/main'
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

2. Configure your custom domain by adding a `CNAME` file to your `src` directory with your domain:

```
bridgetoai.org
```

3. Update your `.eleventy.js` to copy the CNAME file to the output directory:

```javascript
// Add this line to your .eleventy.js file
eleventyConfig.addPassthroughCopy("src/CNAME");
```

### Step 7: Content Population Strategy

Follow this sequence to populate your site with content:

1. **Core Framework Pages**:
   - Start with detailed documentation of the CRAFT, EVERY, 0 to Infinity, and OFFLINE frameworks
   - Include visual diagrams and practical examples for each

2. **Initial Lesson Plans**:
   - Create 3-5 high-quality lesson plans for each core subject area
   - Ensure diversity in grade levels and AI integration levels
   - Mark a few as "featured" for the homepage

3. **Resource Pages**:
   - Develop guides on approved AI tools
   - Create documentation on MNPS AI policy
   - Add teacher training materials

4. **AI Lab Information**:
   - Add details about the physical lab space
   - Create a calendar/booking system for lab visits
   - Document current projects and initiatives

### Step 8: Launch and Maintenance

1. **Testing Phase**:
   - Test locally using `npm run serve`
   - Verify responsive design across devices
   - Check accessibility using automated tools and manual testing
   - Gather feedback from curriculum taskforce