import { Module } from '@nestjs/common';
import { ItemController } from './items.controller';

@Module({
  controllers: [ItemController],
})
export class ItemModule {}
