const { basename, join } = require("path");
const fs = require("fs/promises");

const overwiteFile = (options = {}) => {
  const {
    basePublicPath = "",
    basePublicPathWordPressDyamic = "",
    pathToMainAssets = "",
    isBuildingRTL = false,
    hook = "buildEnd",
  } = options;
  const ROOT_CSS_RTL_NAME = "not-delete-not-use-main-rtl.css";
  return {
    name: "overite-file",
    [hook]: () => {
      const copyCssRtlFileRootToAssets = async () => {
        try {
          const files = await fs.readdir(pathToMainAssets);
          for (const file of files) {
            if (file.includes(".css")) {
              const filePath = join(pathToMainAssets, file);
              if (file.search(/^main./g) > -1) {
                fs.copyFile(
                  `./${ROOT_CSS_RTL_NAME}`,
                  filePath.replace(".css", "-rtl.css")
                ).then(() => {
                  console.log(1, "----CSS File copied----");
                });
              }
            }
          }
        } catch (err) {
          console.error("----copyCssRtlFileRootToAssets----", err);
        }
      };

      const copyCssFileToRoot = async () => {
        try {
          const files = await fs.readdir(pathToMainAssets);
          for (const file of files) {
            if (file.includes(".css")) {
              const filePath = join(pathToMainAssets, file);
              if (file.search(/^style./g) > -1) {
                fs.copyFile(filePath, `./${ROOT_CSS_RTL_NAME}`).then(() => {
                  console.log(1, "---- CSS File copied----");
                });
              }
            }
          }
        } catch (err) {
          console.error("----copyCssFileToRoot----", err);
        }
      };

      const overwiteMainJsFile = async () => {
        try {
          const files = await fs.readdir(pathToMainAssets);
          for (const file of files) {
            if (file.includes(".js")) {
              const filePath = join(pathToMainAssets, file);
              if (file.search(/^main./g) > -1) {
                fs.readFile(filePath, "utf8").then((data) => {
                  console.log(123, "----- READING MAINJS FILE OK -----");
                  const newValue = data.replace(
                    `"${basePublicPath}"`,
                    basePublicPathWordPressDyamic
                  );
                  fs.writeFile(filePath, newValue).then(() => {
                    console.log(234, "----- OVERWRITE MAINJS FILE OK ------");
                  });
                });
              }
            }
          }
        } catch (err) {
          console.error("----overwiteMainJsFile----", err);
        }
      };
      setTimeout(() => {
        overwiteMainJsFile();
        //
        if (isBuildingRTL) {
          console.log("----BUIDING WITH RTL----");
          copyCssFileToRoot();
        } else {
          console.log("----BUIDING NOT RTL----");
          copyCssRtlFileRootToAssets();
        }
      }, 2000);
    },
  };
};

module.exports = overwiteFile;
