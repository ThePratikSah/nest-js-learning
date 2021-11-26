import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi Pratik Sah, thanks for learning nestjs';
  }
}
