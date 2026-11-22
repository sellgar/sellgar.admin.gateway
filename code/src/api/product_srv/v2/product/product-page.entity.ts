import { CursorMetaEntity } from '@sellgar/pagination';
import { Expose, Type } from 'class-transformer';
import { IsDefined, IsArray, ValidateNested } from 'class-validator';

import { ProductEntity } from './product.entity';

export class ProductPageEntity {
  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductEntity)
  items: ProductEntity[];

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => CursorMetaEntity)
  meta: CursorMetaEntity;
}
