import * as mg from 'mongoose'
export class CreateCommentDto {
    readonly text;
    readonly name;
    readonly trackId: mg.Types.ObjectId
}