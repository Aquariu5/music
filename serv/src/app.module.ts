import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import {MongooseModule} from '@nestjs/mongoose'
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from '@nestjs/serve-static';
import {resolve } from 'path';
@Module( {
     imports: [
         ServeStaticModule.forRoot({rootPath: resolve(__dirname, 'static')}),
         TrackModule,
         FileModule,
         MongooseModule.forRoot('mongodb+srv://aydar:aydar@cluster0.xuc8l.mongodb.net/music?retryWrites=true&w=majority')
     ],
     controllers: [],
     providers: []
})
export class AppModule {

}  