import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nestjs!';
  }

  getNum(): number {
    return 1;
  }
}
