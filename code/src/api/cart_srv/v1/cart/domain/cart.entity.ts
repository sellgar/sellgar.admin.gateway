import { Expose, Type } from 'class-transformer';
import { IsArray, IsDefined, IsString, Matches, ValidateIf, ValidateNested } from 'class-validator';

import { CartItemEntity } from './cart-item.entity';
import { CartMetadataEntity } from './cart-metadata.entity';
import { CartShopEntity } from './cart-shop.entity';

export class CartEntity extends CartMetadataEntity {
  @Expose()
  @IsDefined()
  @ValidateNested()
  @Type(() => CartShopEntity)
  shop: CartShopEntity;

  @Expose()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemEntity)
  items: CartItemEntity[];

  @Expose()
  @IsString()
  @Matches(/^[A-Z]{3}$/)
  currencyCode: string;

  @Expose()
  @ValidateIf((_o, v) => v !== null)
  @IsString()
  @Matches(/^\d+\.\d{2}$/)
  itemsTotal: string | null;
}
