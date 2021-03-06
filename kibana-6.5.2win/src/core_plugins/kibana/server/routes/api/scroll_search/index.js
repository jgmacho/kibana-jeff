'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollSearchApi = scrollSearchApi;

var _handle_es_error = require('../../../lib/handle_es_error');

var _handle_es_error2 = _interopRequireDefault(_handle_es_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollSearchApi(server) {
  server.route({
    path: '/api/kibana/legacy_scroll_start',
    method: ['POST'],
    handler: (req, reply) => {
      const { callWithRequest } = server.plugins.elasticsearch.getCluster('admin');
      const { index, size, body } = req.payload;
      const params = {
        index,
        size,
        body,
        scroll: '1m',
        sort: '_doc'
      };
      return callWithRequest(req, 'search', params).then(reply).catch(error => reply((0, _handle_es_error2.default)(error)));
    }
  });

  server.route({
    path: '/api/kibana/legacy_scroll_continue',
    method: ['POST'],
    handler: (req, reply) => {
      const { callWithRequest } = server.plugins.elasticsearch.getCluster('admin');
      const { scrollId } = req.payload;
      return callWithRequest(req, 'scroll', { scrollId, scroll: '1m' }).then(reply).catch(error => reply((0, _handle_es_error2.default)(error)));
    }
  });
} /*
   * Licensed to Elasticsearch B.V. under one or more contributor
   * license agreements. See the NOTICE file distributed with
   * this work for additional information regarding copyright
   * ownership. Elasticsearch B.V. licenses this file to you under
   * the Apache License, Version 2.0 (the "License"); you may
   * not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *    http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   */