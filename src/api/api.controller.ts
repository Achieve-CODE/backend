import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import * as fs from 'fs';
import path from 'node:path';

const ObjectId = require('mongoose').Types.ObjectId;
let queue = []

function isValidObjectId(id) {
  if (ObjectId.isValid(id)) {
    return String(new ObjectId(id)) === id;
  }
  return false;
}

@Controller('api')
export class ApiController {
  constructor(
  ) {}

  @Get('transferToWallet')
  async transferToWallet() {
      queue.push("xD hardcoded")

      return 1;
  }

    @Get('getQueue')
    async getQueue() {
        return queue.join(",");
    }
}
