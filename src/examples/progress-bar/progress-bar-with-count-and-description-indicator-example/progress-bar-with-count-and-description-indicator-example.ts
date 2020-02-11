/**
 * @license
 * Copyright 2020 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'dt-example-progress-bar-with-count-and-description-indicator',
  templateUrl: 'progress-bar-with-count-and-description-indicator-example.html',
  styleUrls: ['progress-bar-with-count-and-description-indicator-example.scss'],
})
export class DtExampleProgressBarWithCountAndDescriptionIndicator {
  oldValue: number | null = null;
  newValue: number | null = null;
  value = 70;
  max = 100;
  limit = 75;

  changed($event: { oldValue: number; newValue: number }): void {
    this.oldValue = $event.oldValue;
    this.newValue = $event.newValue;
  }

  metricHasProblem(value: number): boolean {
    return value > this.limit;
  }
}
