import { Injectable } from '@angular/core';
import { S3Client, PutObjectCommand, ObjectCannedACL } from '@aws-sdk/client-s3';
import { environments } from '@environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: `${environments.S3.region}`,
      endpoint:`${environments.S3.endpoint}`,
      credentials: {
        accessKeyId: `${environments.S3.accessKeyId}`,
        secretAccessKey: `${environments.S3.secretAccessKey}`
      },
    });
    }

  async uploadFile(file: File, path: string): Promise<string> {
    const params = {
      Bucket: 'jfnnstorage', // Nombre de tu Space
      Key: path,
      Body: file,
      ACL: 'public-read' as ObjectCannedACL,
    };

    const command = new PutObjectCommand(params);
    try {
      await this.s3Client.send(command);
      return `https://jfnnstorage.sfo3.digitaloceanspaces.com/${path}`;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }
}
