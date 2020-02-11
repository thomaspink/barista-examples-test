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
import { NgModule } from '@angular/core';
import { DtCtaCardModule } from '@dynatrace/barista-components/cta-card';
import { DtIconModule } from '@dynatrace/barista-components/icon';
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtExampleCtaCardClosable } from './cta-card-closable-example/cta-card-closable-example';
import { DtExampleCtaCardDefault } from './cta-card-default-example/cta-card-default-example';

export const DT_CTA_CARD_EXAMPLES = [
  DtExampleCtaCardClosable,
  DtExampleCtaCardDefault,
];

@NgModule({
  imports: [DtCtaCardModule, DtIconModule, DtButtonModule],
  declarations: [...DT_CTA_CARD_EXAMPLES],
  entryComponents: [...DT_CTA_CARD_EXAMPLES],
})
export class DtCtaCardExamplesModule {}
