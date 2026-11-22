import { Expose, Type } from 'class-transformer';
import { IsArray, IsDefined, ValidateNested } from 'class-validator';

import { CartSummaryEntity } from './cart-summary.entity';
import { CartPageMetaEntity } from './cart-page-meta.entity';

export class CartPageEntity {
  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartSummaryEntity)
  items: CartSummaryEntity[];

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => CartPageMetaEntity)
  meta: CartPageMetaEntity;
}
