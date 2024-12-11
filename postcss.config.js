const postcssNormalize = require("postcss-normalize");

module.exports = {
  plugins: [
    require("postcss-nested"),
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-assets")({
      loadPaths: ["**"],
    }),
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 0,
    }),
    postcssNormalize(),
  ],
};
