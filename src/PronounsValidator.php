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

use Flarum\Foundation\AbstractValidator;

class PronounsValidator extends AbstractValidator
{
    protected $rules = [
        'pronouns' => [
            'nullable',
            'string',
            'max:20',
        ],
    ];
}
