/**
 * @copyright Copyright (c) 2020 Fon E. Noel NFEBE <fenn25.fn@gmail.com>
 *
 * @author Fon E. Noel NFEBE <fenn25.fn@gmail.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { getLoggerBuilder } from '@nextcloud/logger'
import { getRequestToken } from '@nextcloud/auth'
import { translate as t, translatePlural as n } from '@nextcloud/l10n'
import Vue from 'vue'

import GlobalSearch from './views/GlobalSearch.vue'

// eslint-disable-next-line camelcase
__webpack_nonce__ = btoa(getRequestToken())

const logger = getLoggerBuilder()
	.setApp('global-search')
	.detectUser()
	.build()

Vue.mixin({
	data() {
		return {
			logger,
		}
	},
	methods: {
		t,
		n,
	},
})

export default new Vue({
	el: '#global-search',
	// eslint-disable-next-line vue/match-component-file-name
	name: 'GlobalSearchRoot',
	render: h => h(GlobalSearch),
})
