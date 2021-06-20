import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService, HogeService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('num')
export class NumController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNum(): number {
    return this.appService.getNum();
  }
}

@Controller('hoge')
export class HogeController {
  constructor(private readonly hogeService: HogeService) {}

  @Post()
  async create(@Body() item: string) {
    this.hogeService.create(item);
  }

  @Get()
  async findAll(): Promise<string[]> {
    return this.hogeService.findAll();
  }
}
