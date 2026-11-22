import { CursorQueryDto } from '@sellgar/pagination';
import { IsUUID, ValidateIf } from 'class-validator';

export class GetAllFoldersDto extends CursorQueryDto {
  @ValidateIf((_object, value) => value !== undefined)
  @IsUUID()
  parentUuid?: string;
}
