module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "nativewind/babel"],
    // Entfernen Sie die Zeile mit plugins, wenn dort keine weiteren Plugins angegeben sind
  };
};