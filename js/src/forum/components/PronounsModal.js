import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import Stream from 'flarum/common/utils/Stream';

export default class PronounsModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);
    this.pronouns = Stream(app.session.user.pronouns());
  }

  className() {
    return 'PronounsModal Modal--small';
  }

  title() {
    return app.translator.trans('datlechin-pronouns.forum.change_pronouns.title');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <input type="text" autocomplete="off" name="pronouns" className="FormControl" bidi={this.pronouns} disabled={this.loading} />
          </div>
          <p class="helpText">
            {app.translator.trans('datlechin-pronouns.forum.change_pronouns.help', {
              a: <a href="https://www.mypronouns.org/what-and-why" target="_blank" />,
            })}
          </p>
          <div className="Form-group">
            {Button.component(
              {
                className: 'Button Button--primary Button--block',
                type: 'submit',
                loading: this.loading,
              },
              app.translator.trans('datlechin-pronouns.forum.change_pronouns.submit_button')
            )}
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();

    if (this.pronouns() === app.session.user.pronouns()) {
      this.hide();
      return;
    }

    this.loading = true;

    app.session.user
      .save(
        { pronouns: this.pronouns() },
        {
          errorHandler: this.onerror.bind(this),
        }
      )
      .then(this.hide.bind(this))
      .catch(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
