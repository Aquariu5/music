import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from "path";
import * as uuid from 'uuid';
import * as fs from 'fs';
export enum FileType {
    AUDIO = 'audio',
    PICTURE = 'picture'
}

@Injectable()
export class FileService {
    async createFile(file, type: FileType) {
        try {
            const __dirname = path.resolve(path.dirname(''));
            //console.log('dirname', __dirname);
            //console.log('file', file);
            const format = file.originalname.split('.').pop(); // path
            //console.log('format', format);
            const pathName = path.resolve(__dirname, 'dist', 'static', type);
            //console.log('pathhane', pathName);
            const fileName = uuid.v4() + '.' + format;
            if (!fs.existsSync(pathName)) {
                fs.mkdirSync(pathName, {recursive: true});
            }

            fs.writeFileSync(path.resolve(pathName, fileName), file.buffer);
            return type + '/' + fileName;

        } catch(e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }
}