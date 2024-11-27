import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SNSService } from './sns.service';

@ApiTags('SNS')
@Controller('sns')
export class SnsController {
    constructor(private readonly snsService: SNSService) {}

    @Post('contacts')
    @ApiResponse({
        description: 'Add contacts to SQS queue and notify via SNS',
    })
    async addContacts(@Body() contacts: any[]) {
        await this.snsService.addContactsToQueue(contacts);
        return 'Contacts added to queue and notifications sent';
    }
}