const slugify = require('slugify');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');

  eleventyConfig.addCollection('recipes', collection =>
    collection.getFilteredByGlob('src/recipes/*.md').sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter('slug', str => slugify(str, { lower: true }));

  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  };
};
