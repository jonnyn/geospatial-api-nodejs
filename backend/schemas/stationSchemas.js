export const allStationsSchema = {
  response: {
    200: {
      type: "array",
      items: {
        type: "object",
        required: ["id", "geometry", "provider", "quantity", "availability"],
        properties: {
          id: { type: "number" },
          geometry: {
            type: "object",
            properties: {
              type: { type: "string", value: "Point" },
              x: { type: "number" },
              y: { type: "number" },
            },
          },
          address: { type: "string" },
          provider: { type: "string" },
          quantity: { type: "number" },
          availability: { type: "boolean" },
          createdAt: { type: "string", format: "date-time" },
        },
      },
    },
  },
};

export const getStationSchema = {
  query: {
    type: "object",
    properties: {
      id: { type: "number" },
    },
  },
  response: {
    200: {
      type: "object",
      required: ["id"],
      properties: {
        id: { type: "number" },
        geometry: {
          type: "object",
          properties: {
            x: { type: "number" },
            y: { type: "number" },
          },
        },
        address: { type: "string" },
        provider: { type: "string" },
        quantity: { type: "number" },
        availability: { type: "boolean" },
        createdAt: { type: "string", format: "date-time" },
      },
    },
  },
};

export const addStationSchema = {
  body: {
    type: "object",
    required: ["provider"],
    properties: {
      geometry: { type: "string" },
      address: { type: "string", nullable: true },
      provider: { type: "string" },
      quantity: { type: "number" },
      availability: { type: "boolean", default: true },
    },
  },
  response: {
    201: {
      type: "object",
      properties: {
        created: { type: "boolean" },
      },
    },
  },
};

export const updateStationSchema = {
  query: {
    type: "object",
    properties: {
      id: { type: "number" },
    },
  },
  body: {
    type: "object",
    properties: {
      geometry: { type: "string" },
      address: { type: "string" },
      provider: { type: "string" },
      quantity: { type: "number" },
      availability: { type: "boolean" },
    },
  },
};

export const deleteStationSchema = {
  query: {
    type: "object",
    properties: {
      id: { type: "number" },
    },
  },
};
