import { Module } from '@nestjs/common';
import { AppController, HogeController, NumController } from './app.controller';
import { AppService, HogeService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, NumController, HogeController],
  providers: [AppService, HogeService],
})
export class AppModule {}
