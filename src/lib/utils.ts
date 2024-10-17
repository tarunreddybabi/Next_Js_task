import mongoose from "mongoose";

interface ConnectionType {
  isConnected?: number;
}

const connection: ConnectionType = {};

export const ConnectToDB = async (): Promise<void> => {
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO as string);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error(error);
    throw new Error(error instanceof Error ? error.message : "Failed to connect to database");
  }
};
