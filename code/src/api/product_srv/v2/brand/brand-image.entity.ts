import { Expose, Transform } from 'class-transformer';
import { IsInt, IsString, IsUUID } from 'class-validator';

export class BrandImageEntity {
  @Expose()
  @IsUUID()
  imageUuid: string;

  @Expose()
  @Transform(({ value, obj }) => value ?? obj.image?.fileName, { toClassOnly: true })
  @IsString()
  fileName: string;

  @Expose()
  @IsInt()
  sortOrder: number;
}
