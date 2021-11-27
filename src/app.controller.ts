import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePostDto } from './dto/create-post.dto';
import { GetAll } from './dto/get-all.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // logic for post request
  @Post()
  create(@Body() body: CreatePostDto): object {
    return { msg: 'New post request!', name: body.name, age: body.age };
  }

  // logic for get request
  // this decorator will help us to return different status code
  @Get('ping/:name/:age')
  @HttpCode(202)
  getHello(@Param() reqParam: GetAll): object {
    return {
      msg: this.appService.getHello(),
      name: reqParam.name,
      age: reqParam.age,
    };
  }
}
