<?php

/*
 * This file is part of datlechin/flarum-pronouns.
 *
 * Copyright (c) 2021 Ngo Quoc Dat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

use Flarum\Database\Migration;

return Migration::addColumns('users', [
    'pronouns' => ['string', 'length' => 20, 'nullable' => true],
]);
