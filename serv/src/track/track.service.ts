import { Injectable } from "@nestjs/common";
import { Track, TrackDocument } from "./schemas/track.schema";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import {Model} from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTrackDto } from "./dto/create-track.dto";
import * as mg from 'mongoose';
import { CreateCommentDto } from "./dto/create-comment.dto";
import { FileService, FileType } from "src/file/file.service";
import { copyFileSync } from "fs";
@Injectable()
export class TrackService {

    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
        private fileService: FileService
    ) {}


    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const picturePath = await this.fileService.createFile(picture, FileType.PICTURE); // picture/fname.jpg
        const audioPath = await this.fileService.createFile(audio, FileType.AUDIO);
        console.log('picpath', picturePath);
        console.log('audiopath', audioPath);
        const track = await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: picturePath});
        return track;
    }

    async getAll(limit: number = 10, offset: number = 0) {
        const tracks = await this.trackModel.find().skip(offset).limit(limit);
        return tracks;
    }

    async getById(id: mg.Types.ObjectId) {
        const track = await this.trackModel.findById(id).populate('comments');
        return track;
    }

    async deleteById(id: mg.Types.ObjectId) {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track._id;
    }

    async addComment(dto: CreateCommentDto) {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.commentModel.create({...dto,});
        track.comments.push(comment._id);
        await track.save();
        return comment;
    }

    async addListen(id: mg.Types.ObjectId) {
        const track = await this.trackModel.findById(id);
        track.listens += 1;
        track.save();
        return 'success';
    }

    async search(query: string) {
        const tracks = await this.trackModel.find({
            name: {$regex: new RegExp(query, 'i')}
        })
        return tracks;
    }
}