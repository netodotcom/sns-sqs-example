import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('receive-contact')
  receiveContact(@Body() contact: any) {
    console.log('Received contact:', contact);
    return 'Contact received';
  }
}