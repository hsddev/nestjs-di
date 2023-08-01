import { BatteryService } from './../battery/battery.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EngineService {
  constructor(private readonly batteryService: BatteryService) {}
  startEngine() {
    // Check if battery is working
    return `${this.batteryService.powerSupply()} and engine is working`;
  }
}
