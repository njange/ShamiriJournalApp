import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../sequelize';
import User from './User';

interface JournalEntryAttributes {
  id: number;
  userId: number;
  title: string;
  content: string;
  category?: string;
  date?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface JournalEntryCreationAttributes extends Optional<JournalEntryAttributes, 'id'> {}

class JournalEntry extends Model<JournalEntryAttributes, JournalEntryCreationAttributes> implements JournalEntryAttributes {
  public id!: number;
  public userId!: number;
  public title!: string;
  public content!: string;
  public category?: string;
  public date!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

JournalEntry.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    title: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: new DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: new DataTypes.STRING(50),
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'journal_entries',
    sequelize,
  }
);

User.hasMany(JournalEntry, { foreignKey: 'userId', as: 'journalEntries' });
JournalEntry.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default JournalEntry;
