const slugify = require('slugify');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');

  eleventyConfig.addCollection('recipes', collection =>
    collection.getFilteredByGlob('src/recipes/*.md').sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter('slug', str => slugify(str, { lower: true }));
  eleventyConfig.addFilter('date', dateObj =>
    new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  );

  return {
    pathPrefix: '/recipes/',
    dir: {
      input: 'src',
      output: '_site',
      layouts: 'layouts'
    }
  };
};
