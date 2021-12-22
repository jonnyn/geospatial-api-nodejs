// controller to get all stations from database
export async function fetchAllStationsController(request, reply) {
  try {
    const { rows } = await this.db.client.query("SELECT * FROM stations");
    reply.send(rows);
  } catch (err) {
    throw new Error(err);
  }
}

// controller to fetch as single station
export async function fetchStationController(request, reply) {
  try {
    const { id, currency } = request.query;
    const { rows } = await this.db.client.query(
      "SELECT * FROM stations WHERE id = $1",
      [Number(id)]
    );
    reply.send(rows[0]);
  } catch (err) {
    throw new Error(err);
  }
}

// controller to add a new station
export async function postStationController(request, reply) {
  const { geometry, address, provider, quantity, availability } = request.body;
  const createdAt = new Date().toISOString();
  const query = {
    text: `INSERT INTO stations (id, geometry, address, provider, quantity, availability, "createdAt") 
          VALUES(nextval('stations_id_seq'), $1, $2, $3, $4, $5, $6) RETURNING *`,
    values: [geometry, address, provider, quantity, availability, createdAt],
  };
  try {
    const { row } = await this.db.client.query(query);
    reply.code(201);
    return { created: true };
  } catch (err) {
    throw new Error(err);
  }
}

// controller to update station
export async function updateStationController(request, reply) {
  const { id } = request.query;
  const { geometry, address, provider, quantity, availability } = request.body;
  const query = {
    text: `UPDATE stations SET 
          geometry = COALESCE($1, geometry), 
          address = COALESCE($2, address), 
          provider = COALESCE($3, provider), 
          quantity = COALESCE($4, quantity), 
          availability = COALESCE($5, availability) 
          WHERE id = $6 RETURNING *`,
    values: [geometry, address, provider, quantity, availability, Number(id)],
  };
  try {
    await this.db.client.query(query);
    reply.code(204);
  } catch (err) {
    throw new Error(err);
  }
}

// controller to delete station
export async function deleteStationController(request, reply) {
  const { id } = request.query;
  try {
    await this.db.client.query(
      `DELETE FROM stations WHERE id = $1 RETURNING *`,
      [Number(id)]
    );
    reply.code(204);
  } catch (err) {
    throw new Error(err);
  }
}
