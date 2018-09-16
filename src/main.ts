import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';
import { AppModule } from './app.module';

// const httpsOptions = {
//   key: fs.readFileSync('../secrets/private-key.pem'),
//   cert: fs.readFileSync('../secrets/public-certificate.pem'),
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true,
  // }));

  await app.listen(5000);
}
bootstrap();
