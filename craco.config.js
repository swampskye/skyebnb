const path = require("path");
const CracoLessPlugin = require("craco-less");
const pathResolve = (pathname) => path.resolve(__dirname, pathname);
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  webpack: {
    alias: {
      "@": pathResolve("src"),
      components: pathResolve("src/components/"),
      utils: pathResolve("src/utils/"),
    },
  },
};
