module.exports = {
  "*.{js,jsx,ts,tsx,json,md,mdx,css,yml,yaml}":
    "prettier --write --list-different",
  "*.{js,jsx,ts,tsx,json}": "eslint --fix",
};
