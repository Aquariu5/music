import { Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TrackService } from "./track.service";
import * as mg from 'mongoose';
import { CreateCommentDto } from "./dto/create-comment.dto";
import { FileFieldsInterceptor } from "@nestjs/platform-express";

@Controller('/tracks')
export class TrackController {
    constructor(private trackService: TrackService) {}
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'picture', maxCount: 1},
        {name: 'audio', maxCount: 1}
    ]))
    create(@UploadedFiles() files,  @Body() dto: CreateTrackDto) {
        //console.log('files', files);
        const {picture, audio} = files;
        return this.trackService.create(dto, picture[0], audio[0]);
    }

    @Get()
    getAll(@Query('limit') limit: number, @Query('offset') offset: number) {
        return this.trackService.getAll(limit, offset);
    }

    
    @Get('/search')
    searchCont(@Query('query') query: string) {
        return this.trackService.search(query);
    }

    @Get(':id')
    getById(@Param('id')  id: mg.Types.ObjectId) {
        return this.trackService.getById(id);
    } 

    @Delete(':id')
    deleById(@Param('id') id: mg.Types.ObjectId) {
        return this.trackService.deleteById(id);
    }

    @Post('/comment')
    addComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto);
    }

    @Post('/listen/:id')
    addListen(@Param('id') id: mg.Types.ObjectId) {
        return this.trackService.addListen(id);
    }

}