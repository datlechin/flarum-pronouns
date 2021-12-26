import app from 'flarum/admin/app';

app.initializers.add('datlechin/flarum-pronouns', () => {
  app.extensionData
    .for('datlechin-pronouns')
    .registerSetting({
      setting: 'datlechin-pronouns.icon',
      label: app.translator.trans('datlechin-pronouns.admin.settings.icon_label'),
      help: app.translator.trans('datlechin-pronouns.admin.settings.icon_help'),
      type: 'boolean',
    })
    .registerSetting({
      setting: 'datlechin-pronouns.pronouns_prefix',
      label: app.translator.trans('datlechin-pronouns.admin.settings.prefix_label'),
      help: app.translator.trans('datlechin-pronouns.admin.settings.prefix_help'),
      type: 'text',
    });
});
