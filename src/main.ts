import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(helmet());
    const config = new DocumentBuilder()
    .setTitle('Movie Management System API Documentation')
    .setVersion('1.0')
        .addTag('Movies')
        .addBearerAuth()
        .addSecurityRequirements('bearer')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);
    
  await app.listen(3000);
}
bootstrap();
