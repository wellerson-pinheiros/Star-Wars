import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NavesEntity } from "./entities/naves.entity";
import { NavesController } from "./controllers/naves.controller";
import { NavesService } from "./services/naves.service";


@Module({
     imports: [TypeOrmModule.forFeature([NavesEntity])],
     exports: [],
     controllers: [NavesController],
     providers: [NavesService],
})
export class NavesModule{}