import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './features/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VouchersModule } from './features/vouchers/vouchers.module';
import { CartsModule } from './features/carts/carts.module';
import { ProductsModule } from './features/products/products.module';
import { PromosModule } from './features/promos/promos.module';
import { AuthModule } from './features/auth/auth.module';
import { TransactionsModule } from './features/transactions/transactions.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.DB_CONNECTION,
      {
        dbName : process.env.DB_NAME,
      }
    ),
    UsersModule,
    AuthModule,
    VouchersModule,
    CartsModule,
    ProductsModule,
    PromosModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
