import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiModule } from './api/api.module';

// TODO: Authentifizierung hinzufügen (siehe NestJS Dokumentation)
@Module({
  imports: [
    ApiModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
