import { EngineService } from 'src/engine/engine.service';
import { Controller, Get } from '@nestjs/common';
import { ConditionerService } from 'src/conditioner/conditioner.service';

@Controller('car')
export class CarController {
  constructor(
    private readonly engineService: EngineService,
    private readonly conditionerService: ConditionerService,
  ) {}

  @Get()
  carMove() {
    return [
      this.engineService.startEngine(),
      this.conditionerService.conditionerOn(),
    ];
  }
}
