import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}

  @Get()
  getHello() {
    return { statusCode: 200, message: 'ok' };
  }

  @Get('config')
  getConfigForTest() {
    const envTest = this.configService.get<string>('TEST');

    return { statusCode: 200, data: envTest };
  }
}
