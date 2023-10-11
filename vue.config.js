const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: `/Vue_App/`,
  transpileDependencies: true,
});

// module.exports = {
//   publicPath: "/",
//   indexPath: "dist/dist/index.html",
// };

// module.exports = {
//   productionSourceMap: false,
//   outputDir: "dist",
//   assetsDir: "static",
//   indexPath: "templates/index.html",
// };
