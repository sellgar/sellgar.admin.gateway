import { CursorMetaEntity } from '@sellgar/pagination';
import { Expose, Type } from 'class-transformer';
import { IsDefined, IsArray, ValidateNested } from 'class-validator';

import { UnitEntity } from './unit.entity';

export class UnitPageEntity {
  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UnitEntity)
  items: UnitEntity[];

  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => CursorMetaEntity)
  meta: CursorMetaEntity;
}
