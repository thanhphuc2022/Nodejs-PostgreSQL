// db.ts
import { CONFIG } from "./config/configg";
import { Client } from 'pg';

import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

pool.connect()
    .then(() => {
        console.log('Connected to PostgreSQL');
    })
    .catch((error) => {
        console.log(error);
    });
export default pool;


// const client = new Client({
//   user: 'postgres',
//   host: 'localhost', // Thay 'localhost' bằng địa chỉ host của PostgreSQL
//   database: 'postgres', // Thay 'yourDatabase' bằng tên cơ sở dữ liệu của bạn
//   password: process.env.DTB_PASSWORD, 
//   port: 5432, // Cổng mặc định của PostgreSQL là 5432
// });

// client.connect()
//     .then(() => {
//         console.log('Connected to PostgreSQL');
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// export default client;


