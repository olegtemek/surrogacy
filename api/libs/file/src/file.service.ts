import { Injectable } from '@nestjs/common';
import { MemoryStoredFile } from 'nestjs-form-data';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, unlink, writeFile } from 'fs-extra';
import * as sharp from 'sharp';

@Injectable()
export class FileService {
  async saveFiles(files: MemoryStoredFile[]): Promise<string[] | false> {
    try {
      const now = new Date();
      const uploadedFiles: string[] = [];
      const dateFolder = format(new Date(), 'yyyy-MM-dd');
      const uploadFolder = `${path}/uploads/${dateFolder}`;
      await ensureDir(uploadFolder);
      for (let i = 0; i < files.length; i++) {
        const fileName = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}-${files[
          i
        ].originalName
          .split(' ')
          .join('-')
          .split('.')
          .shift()}.webp`;
        const fileWebP = await sharp(files[i].buffer).webp().toBuffer();

        await writeFile(`${uploadFolder}/${fileName}`, fileWebP);
        uploadedFiles.push(`${dateFolder}/${fileName}`);
      }

      return uploadedFiles;
    } catch (e) {
      console.log(e);

      return false;
    }
  }

  async removeMany(filePaths: string[]): Promise<boolean> {
    try {
      for (let i = 0; i < filePaths.length; i++) {
        const file = filePaths[i];
        await unlink(`${path}/uploads/${file}`);
      }

      return true;
    } catch (e) {
      return false;
    }
  }
}
