import { Injectable, Module, Scope } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';
import { BullModule } from '@nestjs/bull';

class ConfigService {}
class DevConfigService {}
class ProdConfigServie {}
@Injectable()
export class CoffeeBrandsFactory {
  create() {
    return ['buddy brew', 'nest'];
  }
}

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig), //partial registration
    BullModule.registerQueue({
      name: 'delivery',
    }),
  ],
  exports: [CoffeesService],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevConfigService
          : ProdConfigServie,
    },
    {
      provide: COFFEE_BRANDS,
      useFactory: async (connection: Connection): Promise<string[]> => {
        //real database query
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nest']);
        console.log('Async factory function');
        return coffeeBrands;
      },
      inject: [Connection],
    },
  ],
})
export class CoffeesModule {}
