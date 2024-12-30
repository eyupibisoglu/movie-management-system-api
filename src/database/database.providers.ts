import * as mongoose from 'mongoose';


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb+srv://' + process.env.DATABASE_USER + ':' + process.env.DATABASE_PASSWORD + '@' + process.env.CLUSTER_INFO + '/' + process.env.DATABASE_NAME),
  },
];