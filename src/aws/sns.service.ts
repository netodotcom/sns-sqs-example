import { IAM } from '@aws-sdk/client-iam';
import { SNS, Topic } from '@aws-sdk/client-sns';
import { SQS } from '@aws-sdk/client-sqs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SNSService {
    defaultConfig = {
        region: 'us-east-2',
        credentials: {
            accessKeyId: this.configService.get<string>('awsAccessKeyId'),
            secretAccessKey: this.configService.get<string>('awsSecretAccessKey'),
        },
    };
    sns = new SNS({
        ...this.defaultConfig,
    });

    iam = new IAM({
        ...this.defaultConfig,
        region: 'global',
    });

    sqs = new SQS({
        ...this.defaultConfig,
    });

    constructor(private configService: ConfigService) {}

    async addContactsToQueue(contacts: any[]) {
        const queueUrl = await this.getQueueUrl('contactsQueue');
        for (const contact of contacts) {
            await this.sqs.sendMessage({
                QueueUrl: queueUrl,
                MessageBody: JSON.stringify(contact),
            });
        }
        await this.notifyViaSNS(contacts);
    }

    async getQueueUrl(queueName: string) {
        const { QueueUrl } = await this.sqs.getQueueUrl({ QueueName: queueName });
        if (!QueueUrl) throw new NotFoundException('Queue not found');
        return QueueUrl;
    }

    async notifyViaSNS(contacts: any[]) {
        const topicArn = await this.getTopicArn('contactsTopic');
        for (const contact of contacts) {
            await this.sns.publish({
                Message: JSON.stringify(contact),
                TopicArn: topicArn,
            });
        }
    }

    async getTopicArn(topicName: string) {
        const { Topics } = await this.sns.listTopics({});
        const topic = Topics.find((t) => t.TopicArn.includes(topicName));
        if (!topic) throw new NotFoundException('Topic not found');
        return topic.TopicArn;
    }
}