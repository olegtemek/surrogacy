import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LangService } from 'lib/lang';

@Injectable()
export class BotService {
  private BOT_URI: string;
  private CHAT_ID: string;
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
    private readonly lang: LangService,
  ) {
    this.BOT_URI = `https://api.telegram.org/bot${configService.get<string>(
      'TOKEN_BOT',
    )}/sendMessage`;
    this.CHAT_ID = this.configService.get<string>('CHAT_ID');
  }

  async send(message: string) {
    try {
      const req = await this.httpService.axiosRef.post(this.BOT_URI, {
        chat_id: this.CHAT_ID,
        parse_mode: 'html',
        text: message,
      });
      return true;
    } catch (e) {
      console.log(e);

      throw new BadRequestException(
        this.lang.message('global.something_error'),
      );
    }
  }
}
