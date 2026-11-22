import { CursorMetaEntity } from '@sellgar/pagination';
import { Expose, Type } from 'class-transformer';
import { IsDefined, IsArray, ValidateNested } from 'class-validator';

import { BrandEntity } from './brand.entity';

export class BrandPageEntity {
  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BrandEntity)
  items: BrandEntity[];

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => CursorMetaEntity)
  meta: CursorMetaEntity;
}
