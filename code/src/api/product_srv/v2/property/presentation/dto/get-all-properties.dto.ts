import { Transform } from 'class-transformer';
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';

import { PaginationQueryDto } from '../../../shared/presentation/dto/pagination-query.dto';
import { PropertySortField } from '../../property-sort-field.enum';
import { PropertySortDirection } from '../../property-sort-direction.enum';

export class GetAllPropertiesDto extends PaginationQueryDto {
  @IsOptional()
  @IsString()
  @MaxLength(256)
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  search?: string;

  @IsOptional()
  @IsEnum(PropertySortField)
  sortBy?: PropertySortField;

  @IsOptional()
  @IsEnum(PropertySortDirection)
  sortDirection?: PropertySortDirection;
}
