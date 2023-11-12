import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { UserRepository } from 'src/user/user.repository';
import { ProductRepository } from 'src/product/product.repository';
import { LangService } from 'lib/lang';
import { PrismaService } from 'lib/prisma';

@Module({
  controllers: [OrderController],
  providers: [
    OrderService,
    OrderRepository,
    UserRepository,
    ProductRepository,
    LangService,
    PrismaService,
  ],
})
export class OrderModule {}
