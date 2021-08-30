import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesModule } from '../../src/coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as request from 'supertest';
import { CreateCoffeeDto } from '../../src/coffees/dto/create-coffee.dto';
import arrayContaining = jasmine.arrayContaining;

describe('[Feature] Coffee - /coffees', () => {
  const coffee = {
    name: 'Shipwreck Roast',
    brand: 'Buddy Brew',
    flavors: ['chocolate', 'vanilla'],
  };

  // const expectedPartialCoffee = expect.objectContaining({
  //   ...coffee,
  //   flavors: expect.arrayContaining(
  //     coffee.flavors.map((name) => expect.objectContaining({ name })),
  //   ),
  // });

  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        CoffeesModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'pass123',
          database: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true, //do not need Type decorator (in PaginationQueryDto) if this option is used
        },
      }),
    );
    await app.init();
  });

  it('Create [POST /]', () => {
    return (
      request(app.getHttpServer())
        .post('/coffees')
        .send(coffee as CreateCoffeeDto)
        .expect(HttpStatus.CREATED)
        // .then((body) => {
        //   expect(body).toEqual(expectedPartialCoffee);
        // });
        .then(({ body }) => {
          const expectedCoffee = expect.objectContaining({
            ...coffee,
            flavors: expect.arrayContaining(
              coffee.flavors.map((name) => expect.objectContaining({ name })),
            ),
          });
          expect(body).toEqual(expectedCoffee);
        })
    );
  });

  it.todo('Get all [GET /]');
  it.todo('Get one [GET /:id]');
  it.todo('Update one [PATCH /:id]');
  it.todo('Delete one [DELETE /:id]');

  afterAll(async () => {
    await app.close();
  });
});
