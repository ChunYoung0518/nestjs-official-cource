import { Process, Processor } from '@nestjs/bull';
import { Coffee } from '../entities/coffee.entity';
import { Job } from 'bull';

@Processor('delivery')
export class TaskConsumer {
  @Process()
  async deliverCoffee(job: Job<{ coffeeId: string; coffee: Coffee }>) {
    console.log('coffee delivery: ' + job.data.cofeeId);
  }
}
