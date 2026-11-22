import { CursorMetaEntity } from '@sellgar/pagination';
import { Expose, Type } from 'class-transformer';
import { IsDefined, IsArray, ValidateNested } from 'class-validator';

import { PropertyEntity } from './property.entity';

export class PropertyPageEntity {
  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PropertyEntity)
  items: PropertyEntity[];

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => CursorMetaEntity)
  meta: CursorMetaEntity;
}
