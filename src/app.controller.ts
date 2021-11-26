import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // logic for post request
  @Post()
  create(): object {
    return { msg: 'New post request reseve!' };
  }

  // logic for get request
  @Get('ping')
  // this decorator will help us to return different status code
  @HttpCode(202)
  getHello(): object {
    return {
      msg: this.appService.getHello(),
    };
  }
}
