Package.describe({
  name: 'barbatus:angular-wizard',
  version: '0.5.3',
  summary: 'Wrap your Angular UI logic into a series of steps (pages/slides)',
  git: 'https://github.com/barbatus/angular-wizard',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('urigo:angular@0.9.1');
  api.addFiles([
    'src/dist/angular-wizard.min.js',
    'src/dist/angular-wizard.min.css'],
    'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('barbatus:angular-wizard');
  api.addFiles('barbatus:angular-wizard-tests.js');
});
