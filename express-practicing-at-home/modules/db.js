const mariadb = require('mariadb');

const pool = mariadb.createPool({
  user: 'root', password: 'Tina1975', database: 'webshop', connectionLimit: 5,
});
// itt át kell írni a database-t az aktuálisra! (korábban shop, employee volt)

module.exports = class DB {
  constructor() {
    pool.getConnection().then(conn => this.conn = conn);
  }

  async read() {
    const sql = `
      SELECT * FROM products
      `;

    const result = await this.conn.query(sql);
    return result;
  }

  async create(data) {
    const sql = `
    INSERT INTO products (product, price, manufacturerID)
    VALUES ('${data.product}', ${data.price}, ${data.manufacturerID})
  `;

    const result = await this.conn.query(sql);
    return result;
  }

  async update(data, id) {
    const sql = `
    UPDATE products
    SET product='${data.product}', price=${data.price}, manufacturerID=${data.manufacturerID}
    WHERE id=${id};
    `;

    const result = await this.conn.query(sql);
    return result;
  }

  async delete(id) {
    const sql = `
      DELETE FROM products
      WHERE id=${id};
      `;

    const result = await this.conn.query(sql);
    return result;
  }
};
