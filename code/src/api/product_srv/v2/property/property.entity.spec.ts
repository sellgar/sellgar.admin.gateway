import 'reflect-metadata';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { PropertyEntity } from './property.entity';
import { UnitEntity } from '../unit/unit.entity';

describe('Property unit response', () => {
  it.each([
    null,
    {
      code: 'mm',
      name: 'Миллиметр',
      symbol: 'мм',
      description: null,
      version: 1,
      createdAt: '2026-11-22T00:00:00.000Z',
      updatedAt: '2026-11-22T00:00:00.000Z',
    },
  ])('preserves nullable unit metadata through the admin response', async (unit) => {
    const property = plainToInstance(
      PropertyEntity,
      {
        code: 'width',
        name: 'Ширина',
        description: null,
        kind: 'DECIMAL',
        unitCode: unit?.code ?? null,
        unit,
        options: [],
        version: 1,
        createdAt: '2026-11-22T00:00:00.000Z',
        updatedAt: '2026-11-22T00:00:00.000Z',
      },
      { excludeExtraneousValues: true },
    );

    expect(await validate(property)).toHaveLength(0);
    expect(instanceToPlain(property).unit).toEqual(unit);
    if (unit) expect(property.unit).toBeInstanceOf(UnitEntity);
  });
});
