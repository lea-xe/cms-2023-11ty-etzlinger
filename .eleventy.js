module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
    
    eleventyConfig.addPassthroughCopy("src/sass");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/favicons");
    eleventyConfig.addPassthroughCopy("src/js");
    // Add any other static directories or files you need to copy
  
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    };
  };
  
  