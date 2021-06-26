import { Injectable } from '@nestjs/common';

export interface ServiceInterface {
  appService: AppService;
  hogeService: HogeService;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nestjs!';
  }

  getNum(): number {
    return 1;
  }
}

@Injectable()
export class HogeService {
  private readonly list: string[] = [];

  create(item: string) {
    this.list.push(item);
  }

  findAll(): string[] {
    return this.list;
  }
}
