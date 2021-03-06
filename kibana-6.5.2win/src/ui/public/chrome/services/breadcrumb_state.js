/*
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
import { Subject } from 'rxjs';
// @ts-ignore
import { uiModules } from '../../modules';
// A flag used to keep track of clearing between route changes.
var shouldClear = false;
// Subject used by Header component to subscribe to breadcrumbs changes.
// This is not exposed publicly.
var breadcrumbsSubject = new Subject();
/**
 * A rxjs subscribable that can be used to subscribe to breadcrumb updates.
 */
export var breadcrumbs = breadcrumbsSubject;
/**
 * Should be called by plugins to set breadcrumbs in the header navigation.
 *
 * @param breadcrumbs: Array<Breadcrumb> where Breadcrumb has shape
 *                     { text: '', href?: '' }
 */
export var set = function (newBreadcrumbs) {
    breadcrumbsSubject.next(newBreadcrumbs);
    // If a plugin called set, don't clear on route change.
    shouldClear = false;
};
uiModules.get('kibana').service('breadcrumbState', function ($rootScope) {
    // When a route change happens we want to clear the breadcrumbs ONLY if
    // the new route does not set any breadcrumbs. Deferring the clearing until
    // the route finishes changing helps avoiding the breadcrumbs from 'flickering'.
    $rootScope.$on('$routeChangeStart', function () { return (shouldClear = true); });
    $rootScope.$on('$routeChangeSuccess', function () {
        if (shouldClear) {
            set([]);
        }
    });
    return { set: set };
});
