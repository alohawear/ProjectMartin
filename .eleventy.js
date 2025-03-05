module.exports = function(eleventyConfig) {
  // Copy assets directory
  eleventyConfig.addPassthroughCopy("assets");
  
  // Exclude implementation plan
  eleventyConfig.ignores.add("implementation-plan.md");
  eleventyConfig.ignores.add("implementation-plan.md:Zone.Identifier");
  
  // Create collections for lesson plans by subject
  eleventyConfig.addCollection("lessonPlans", function(collectionApi) {
    return collectionApi.getFilteredByGlob("lesson-plans/**/*.md");
  });
  
  eleventyConfig.addCollection("mathLessons", function(collectionApi) {
    return collectionApi.getFilteredByGlob("lesson-plans/math/**/*.md");
  });
  
  eleventyConfig.addCollection("scienceLessons", function(collectionApi) {
    return collectionApi.getFilteredByGlob("lesson-plans/science/**/*.md");
  });
  
  eleventyConfig.addCollection("englishLessons", function(collectionApi) {
    return collectionApi.getFilteredByGlob("lesson-plans/english/**/*.md");
  });
  
  eleventyConfig.addCollection("socialStudiesLessons", function(collectionApi) {
    return collectionApi.getFilteredByGlob("lesson-plans/social-studies/**/*.md");
  });
  
  eleventyConfig.addCollection("worldLanguagesLessons", function(collectionApi) {
    return collectionApi.getFilteredByGlob("lesson-plans/world-languages/**/*.md");
  });
  
  // Add collection for featured lessons
  eleventyConfig.addCollection("featured", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.tags && item.data.tags.includes("featured"))
      .sort((a, b) => a.date - b.date);
  });

  // Add filter for grade level formatting
  eleventyConfig.addFilter("formatGrade", function(grade) {
    if (!grade) return '';
    return `Grade${grade.includes("-") ? "s" : ""} ${grade}`;
  });
  
  // Add collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/**/*.md")
      .sort((a, b) => b.date - a.date);
  });
  
  // Set input and output directories
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    // Use .md, .html, .njk, and .liquid files
    templateFormats: ["md", "html", "njk", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};