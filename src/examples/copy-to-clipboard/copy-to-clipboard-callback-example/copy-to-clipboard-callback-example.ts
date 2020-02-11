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

import { ChangeDetectorRef, Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'dt-example-copy-to-clipboard-callback',
  templateUrl: 'copy-to-clipboard-callback-example.html',
})
export class DtExampleCopyToClipboardCallback {
  _value = 'https://barista.dynatrace.com/';
  _copyHint = 'Will change after copy.';

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  copyCallback(): void {
    this._copyHint = `Copied "${this._value}" to clipboard.`;
    // tslint:disable-next-line:no-magic-numbers
    timer(2500).subscribe((): void => {
      this._copyHint = 'Will change after copy.';
      this._changeDetectorRef.markForCheck();
    });
  }
}
