import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';
import SettingsPage from 'flarum/forum/components/SettingsPage';
import Button from 'flarum/common/components/Button';
import UserCard from 'flarum/forum/components/UserCard';
import PronounsModal from './components/PronounsModal';
import icon from 'flarum/common/helpers/icon';

app.initializers.add('datlechin/flarum-pronouns', () => {
  User.prototype.pronouns = Model.attribute('pronouns');

  extend(SettingsPage.prototype, 'accountItems', (items) => {
    items.add(
      'changePronouns',
      <Button className="Button" onclick={() => app.modal.show(PronounsModal)}>
        {app.translator.trans('datlechin-pronouns.forum.settings.change_pronouns_button')}
      </Button>
    );
  });

  extend(UserCard.prototype, 'infoItems', function (items) {
    const user = this.attrs.user;
    const pronous = user.pronouns();

    if (pronous === undefined || pronous === null || pronous === '') return;

    const pronounsPrefix = app.forum.attribute('pronounsPrefix');
    const pronounsIcon = app.forum.attribute('pronounsIcon');

    items.add(
      'pronouns',
      <span className="UserCard-personalPronouns">
        {pronounsIcon ? icon('fas fa-chess-queen') : pronounsPrefix}
        {pronous}
      </span>,
      10
    );
  });
});
