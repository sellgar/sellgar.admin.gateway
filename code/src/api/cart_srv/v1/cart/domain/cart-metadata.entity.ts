import { Expose } from 'class-transformer';
import { IsDateString, IsString, IsUUID, Matches, ValidateIf } from 'class-validator';

export class CartMetadataEntity {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @IsUUID()
  ownerUuid: string;

  @Expose()
  @IsString()
  @Matches(/^(0|[1-9]\d*)$/)
  version: string;

  @Expose()
  @IsDateString()
  createdAt: string;

  @Expose()
  @IsDateString()
  updatedAt: string;

  @Expose()
  @ValidateIf((_o, v) => v !== null)
  @IsDateString()
  closedAt: string | null;
}
