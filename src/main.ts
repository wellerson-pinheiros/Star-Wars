import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Star Wars')
  .setDescription('Projeto para comunidade Front End Fusion')
  .setContact("Wellerson Pinheiro","https://portifolio-roan-pi-40.vercel.app/","wellerson.pinheiros@outlook.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
  process.env.TZ = '-03:00';
  await app.listen(process.env.PORT ?? 4000);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
