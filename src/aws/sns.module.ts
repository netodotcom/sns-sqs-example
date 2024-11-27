import { Module } from '@nestjs/common';
import { SnsController } from './sns.controller';
import { SNSService } from './sns.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule],
    controllers: [SnsController],
    providers: [SNSService],
    exports: [SNSService],
})
export class SnsModule {}