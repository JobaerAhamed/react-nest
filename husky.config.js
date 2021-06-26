module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'pre-push': 'npm run test:cov && npm run build && npm run update:readme',
  },
};
