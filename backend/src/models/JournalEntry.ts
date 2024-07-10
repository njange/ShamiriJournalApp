// backend/src/models/JournalEntry.ts

import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'journal_entries', // Optional: Define the table name explicitly
})
export default class JournalEntry extends Model<JournalEntry> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date!: Date;
}

