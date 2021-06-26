import { Body, Controller, Get, Post } from '@nestjs/common';
import { ServiceInterface } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: ServiceInterface['appService']) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('num')
export class NumController {
  constructor(private readonly appService: ServiceInterface['appService']) {}

  @Get()
  getNum(): number {
    return this.appService.getNum();
  }
}

@Controller('hoge')
export class HogeController {
  constructor(private readonly hogeService: ServiceInterface['hogeService']) {}

  @Post()
  async create(@Body() item: string) {
    this.hogeService.create(item);
  }

  @Get()
  async findAll(): Promise<string[]> {
    return this.hogeService.findAll();
  }
}
