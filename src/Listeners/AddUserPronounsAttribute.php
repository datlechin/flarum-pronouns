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

use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

class AddUserPronounsAttribute
{
    public function __invoke(UserSerializer $serializer, User $user, array $attributes): array
    {
        $attributes['pronouns'] = $user->pronouns;

        return $attributes;
    }
}
