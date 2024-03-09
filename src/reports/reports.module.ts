import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { Reports } from './reports.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Reports])],
  providers: [ReportsService],
  controllers: [ReportsController],
})
export class ReportsModule {}
