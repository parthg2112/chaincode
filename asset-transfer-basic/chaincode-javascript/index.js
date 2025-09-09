/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const herbTraceability = require('./lib/herbTraceability');

module.exports.HerbTraceability = herbTraceability;
module.exports.contracts = [herbTraceability];