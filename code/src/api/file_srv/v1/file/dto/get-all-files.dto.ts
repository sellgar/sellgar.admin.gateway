import { CursorQueryDto } from '@sellgar/pagination';
import { IsUUID, ValidateIf } from 'class-validator';

export class GetAllFilesDto extends CursorQueryDto {
  @ValidateIf((_object, value) => value !== undefined)
  @IsUUID()
  folderUuid?: string;
}
