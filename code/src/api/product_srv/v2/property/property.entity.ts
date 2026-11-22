import { Expose, Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

import { UnitEntity } from '../unit/unit.entity';
import { PropertyKind } from './property-kind.enum';
import { PropertyOptionEntity } from './property-option.entity';

export class PropertyEntity {
  @Expose()
  @IsString()
  code: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsOptional()
  @IsString()
  description: string | null;

  @Expose()
  @IsEnum(PropertyKind)
  kind: PropertyKind;

  @Expose()
  @IsOptional()
  @IsString()
  unitCode: string | null;

  @Expose()
  @ValidateIf((_object, value) => value !== null)
  @ValidateNested()
  @Type(() => UnitEntity)
  unit: UnitEntity | null;

  @Expose()
  @IsInt()
  version: number;

  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PropertyOptionEntity)
  options: PropertyOptionEntity[];

  @Expose()
  @IsDateString()
  createdAt: string;

  @Expose()
  @IsDateString()
  updatedAt: string;
}
