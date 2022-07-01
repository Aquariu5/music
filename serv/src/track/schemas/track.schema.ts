import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoos from 'mongoose'
export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  picture: string;

  @Prop()
  audio: string;

  @Prop()
  listens: number;

  @Prop({type: [{type: mongoos.Types.ObjectId, ref: 'Comment'}]})
  comments: Comment[]
}

export const TrackSchema = SchemaFactory.createForClass(Track);