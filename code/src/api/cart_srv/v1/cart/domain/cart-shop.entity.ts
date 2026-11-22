import { Expose } from 'class-transformer';
import { IsString, IsUUID, ValidateIf } from 'class-validator';

export class CartShopEntity {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @ValidateIf((_o, v) => v !== null)
  @IsString()
  name: string | null;
}
