<?php

/*
 * This file is part of datlechin/flarum-pronouns.
 *
 * Copyright (c) 2021 Ngo Quoc Dat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Datlechin\Pronouns;

use Datlechin\Pronouns\Listeners\SavePronounsToDatabase;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Extend;
use Flarum\User\Event\Saving;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Event())
        ->listen(Saving::class, SavePronounsToDatabase::class),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(Listeners\AddUserPronounsAttribute::class),

    (new Extend\Settings())
        ->serializeToForum('pronounsPrefix', 'datlechin-pronouns.pronouns_prefix', null)
        ->serializeToForum('pronounsIcon', 'datlechin-pronouns.icon', 'boolval')
];
