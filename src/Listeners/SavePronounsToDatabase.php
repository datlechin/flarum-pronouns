<?php

/*
 * This file is part of datlechin/flarum-pronouns.
 *
 * Copyright (c) 2021 Ngo Quoc Dat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Datlechin\Pronouns\Listeners;

use Datlechin\Pronouns\PronounsValidator;
use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;

class SavePronounsToDatabase
{
    public function __construct(PronounsValidator $pronousValidator)
    {
        $this->pronousValidator = $pronousValidator;
    }

    public function handle(Saving $event)
    {
        $user = $event->user;
        $data = $event->data;
        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['pronouns'])) {
            $this->pronousValidator->assertValid($attributes);
            $pronous = $attributes['pronouns'];
            $user->pronouns = $pronous;
        }
    }
}
