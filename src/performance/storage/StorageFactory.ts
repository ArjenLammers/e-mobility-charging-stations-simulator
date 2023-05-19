// Copyright Jerome Benoit. 2021-2023. All Rights Reserved.

import { JsonFileStorage } from './JsonFileStorage';
import { MikroOrmStorage } from './MikroOrmStorage';
import { MongoDBStorage } from './MongoDBStorage';
import type { Storage } from './Storage';
import { StorageType } from '../../types';

export class StorageFactory {
  private constructor() {
    // This is intentional
  }

  public static getStorage(type: StorageType, connectionUri: string, logPrefix: string): Storage {
    let storageInstance: Storage | null = null;
    switch (type) {
      case StorageType.JSON_FILE:
        storageInstance = new JsonFileStorage(connectionUri, logPrefix);
        break;
      case StorageType.MONGO_DB:
        storageInstance = new MongoDBStorage(connectionUri, logPrefix);
        break;
      // case StorageType.MYSQL:
      // case StorageType.MARIA_DB:
      // case StorageType.SQLITE:
      //   storageInstance = new MikroOrmStorage(connectionUri, logPrefix, type);
      //   break;
      default:
        throw new Error(`${logPrefix} Unknown storage type: ${type}`);
    }
    return storageInstance;
  }
}
