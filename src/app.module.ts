import { Module } from '@nestjs/common';
import { AppController, NumController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, NumController],
  providers: [AppService],
})
export class AppModule {}
