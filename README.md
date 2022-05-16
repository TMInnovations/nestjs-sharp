# NestJs Sharp

Very thin Layer to be able to import sharp as Module / inject sharp as Service in NestJs Applications.

## How to use

`npm i nestjs-sharp @types/sharp`

Import `SharpModule` in the Module you want to use it in:

```
@Module({
  imports: [SharpModule],
})
export class SomeModule {}
```

Inject `SharpService` into your Controller's or Service's `constructor`:

```
export class SomeServiceOrController {
  constructor(
    private sharpService: SharpService,
  ) {}
```

Use the `edit` method of the `SharpService` like the `sharp` function, more info: https://github.com/lovell/sharp, for example:

```
this.sharpService.edit(inputBuffer).rotate().toBuffer();
```
