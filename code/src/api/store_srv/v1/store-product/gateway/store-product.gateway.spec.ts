import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';

import { GetAllStoreProductsCommand } from '../service/command/get-all-store-products.command';
import { StoreProductGateway } from './store-product.gateway';

describe('Store read contract', () => {
  it('accepts a Store product whose visible collection of offers is empty', async () => {
    const product = {
      uuid: '3012a751-2bbc-4300-a8f3-8dc744f7daf7',
      productUuid: '1b50b30d-e953-49d4-8f6f-c9a27ff447ae',
      shopUuid: 'f57aa71b-c9e8-4f87-8a61-09e6e2f1c348',
      version: 1,
      status: 'active',
      showing: false,
      categoryUuids: [],
      offers: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const send = jest.fn().mockReturnValue(of({ items: [product], meta: { limit: 50, nextToken: null } }));
    const gateway = new StoreProductGateway({ send } as unknown as ClientProxy);
    expect((await gateway.getAll(new GetAllStoreProductsCommand())).items[0].offers).toEqual([]);
    send.mockReturnValue(of(product));
    expect((await gateway.getByUuid(product.uuid)).offers).toEqual([]);
  });
});
