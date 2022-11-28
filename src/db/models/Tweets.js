import { DataTypes } from "sequelize";
import sequelizeConnection from "../config.js";

export const Tweet = sequelizeConnection.define("Tweet", {
  created_at: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  int: {
    type: DataTypes.BIGINT,
  },
  id_str: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  truncated: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  in_reply_to_status_id: {
    type: DataTypes.BIGINT,
  },
  in_reply_to_status_id: {
    type: DataTypes.BIGINT,
  },
  in_reply_to_status_id_str: {
    type: DataTypes.STRING,
  },
  in_reply_to_user_id: {
    type: DataTypes.BIGINT,
  },
  in_reply_to_user_id_str: {
    type: DataTypes.STRING,
  },
  in_reply_to_screen_name: {
    type: DataTypes.STRING,
  },
  user: {
    type: DataTypes.JSON,
  },
  coordinates: {
    type: DataTypes.GEOGRAPHY,
  },
  place: {
    type: DataTypes.GEOGRAPHY,
  },
  quoted_status_id: {
    type: DataTypes.BIGINT,
  },
  quoted_status_id_str: {
    type: DataTypes.STRING,
  },
});
