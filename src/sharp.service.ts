import { Injectable } from '@nestjs/common';
import sharp = require('sharp');

@Injectable()
export class SharpService {
  public edit: (
    input?:
      | Buffer
      | Uint8Array
      | Uint8ClampedArray
      | Int8Array
      | Uint16Array
      | Int16Array
      | Uint32Array
      | Int32Array
      | Float32Array
      | Float64Array
      | string,
    options?: sharp.SharpOptions,
  ) => sharp.Sharp = sharp;
}
