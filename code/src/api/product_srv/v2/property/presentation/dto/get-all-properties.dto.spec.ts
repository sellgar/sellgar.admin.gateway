import 'reflect-metadata';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

import { GetAllPropertiesDto } from './get-all-properties.dto';

describe('Property search query', () => {
  const pipe = new ValidationPipe({ transform: true, whitelist: true });

  it('keeps the search text and cursor while parsing an HTTP limit', async () => {
    const query = await pipe.transform(
      { search: ' матер ', limit: '20', nextToken: 'opaque-cursor', sortBy: 'name', sortDirection: 'desc' },
      { type: 'query', metatype: GetAllPropertiesDto },
    );
    expect(query).toMatchObject({
      search: 'матер',
      limit: 20,
      nextToken: 'opaque-cursor',
      sortBy: 'name',
      sortDirection: 'desc',
    });
  });

  it.each([{ sortBy: 'name; DROP TABLE property' }, { sortDirection: 'sideways' }])(
    'rejects unsupported sorting: %j',
    async (query) => {
      await expect(pipe.transform(query, { type: 'query', metatype: GetAllPropertiesDto })).rejects.toBeInstanceOf(
        BadRequestException,
      );
    },
  );

  it.each([['матер'], { text: 'матер' }, 'а'.repeat(257)])('rejects an invalid search: %j', async (search) => {
    await expect(pipe.transform({ search }, { type: 'query', metatype: GetAllPropertiesDto })).rejects.toBeInstanceOf(
      BadRequestException,
    );
  });
});
