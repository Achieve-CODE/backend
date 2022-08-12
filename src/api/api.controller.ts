import {
    Controller,
    Get, Query,
} from '@nestjs/common';

let currAmount = 0

@Controller()
export class ApiController {
  constructor(
  ) {}

  @Get('transferToWallet')
  async transferToWallet(@Query() query) {
      currAmount = query.amount

      return 1;
  }

    @Get('getQueue')
    async getQueue() {
      let temp = currAmount
      currAmount = 0
      return temp;
    }
}
