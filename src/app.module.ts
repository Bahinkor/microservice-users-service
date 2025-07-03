import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'node:path';

import { AppController } from './app.controller';
import { envSchemaValidation } from './common/validation/env.schema-validation';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [path.join(process.cwd(), '.env')],
      validationSchema: envSchemaValidation,
    }),
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
