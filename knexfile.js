// do not make changes to this file
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/database.db3' },
    seeds: { directory: './data/seeds' },
    migrations:{ directory:'./data/migrations'},
    useNullAsDefault: true,
  },
  
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
};
