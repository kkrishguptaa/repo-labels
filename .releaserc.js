module.exports = {
  branches: [{ name: "main" }],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "yarn.lock", "labels.json"],
        message: "chore(release): 🤖 ${nextRelease.version} [skip ci]",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: ["CHANGELOG.md", "labels.json", "reviewpad.yml"],
      },
    ],
    '@semantic-release/npm'
  ],
  preset: "angular",
  ci: true,
  debug: true,
};
