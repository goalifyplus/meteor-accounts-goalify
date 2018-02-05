Package.describe({
  name: 'erictran:accounts-goalify',
  version: '0.0.1',
  summary: 'OAuth2 for Goalify',
  git: 'https://github.com/goalifyplus/meteor-accounts-goalify',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['underscore', 'random']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('erictran:goalify@0.0.1', ['client', 'server']);

  api.addFiles('accounts-goalify_login_button.css', 'client');

  api.addFiles('accounts-goalify.js');
});
