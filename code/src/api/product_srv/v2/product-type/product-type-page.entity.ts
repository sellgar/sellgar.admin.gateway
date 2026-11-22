import { CursorMetaEntity } from '@sellgar/pagination';
import { Expose, Type } from 'class-transformer';
import { IsDefined, IsArray, ValidateNested } from 'class-validator';

import { ProductTypeEntity } from './product-type.entity';

export class ProductTypePageEntity {
  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductTypeEntity)
  items: ProductTypeEntity[];

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => CursorMetaEntity)
  meta: CursorMetaEntity;
}
