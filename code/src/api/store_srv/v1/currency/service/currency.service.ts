import { CursorQueryDto } from '@sellgar/pagination';
import { Injectable } from '@nestjs/common';

import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { CurrencyGateway } from '../gateway/currency.gateway';

@Injectable()
export class CurrencyService {
  constructor(private readonly currencyGateway: CurrencyGateway) {}

  findAll(query: Partial<CursorQueryDto> = {}) {
    return this.currencyGateway.findAll(query);
  }

  findByCode(code: string) {
    return this.currencyGateway.findByCode(code);
  }

  create(dto: CreateCurrencyDto) {
    return this.currencyGateway.create(dto);
  }

  update(dto: UpdateCurrencyDto) {
    return this.currencyGateway.update(dto);
  }

  remove(code: string) {
    return this.currencyGateway.remove(code);
  }
}
