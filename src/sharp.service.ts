import { Injectable } from '@nestjs/common';
import sharp = require('sharp');

@Injectable()
export class SharpService {
  public edit = sharp;
}
