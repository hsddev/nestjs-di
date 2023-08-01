import { NestFactory } from '@nestjs/core';
import { CarModule } from './car/car.module';

async function bootstrap() {
  const app = await NestFactory.create(CarModule);
  await app.listen(3000);
}
bootstrap();
