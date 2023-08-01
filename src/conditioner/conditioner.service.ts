import { Injectable } from '@nestjs/common';
import { EngineService } from 'src/engine/engine.service';

@Injectable()
export class ConditionerService {
  constructor(private readonly engineService: EngineService) {}

  conditionerOn() {
    return `${this.engineService.startEngine()} and the conditioner is on.`;
  }
}
