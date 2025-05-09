import "reflect-metadata";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Preenchimento } from "./Preenchimento";

export enum DataType {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean",
  DATE = "date",
}

@Entity("campos")
export class Campo {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 100 })
  name: string;

  @Column({
    type: "enum",
    enum: DataType,
    default: DataType.STRING,
  })
  datatype: DataType;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt!: Date;

  @OneToMany(() => Preenchimento, (preenchimento) => preenchimento.campo)
  preenchimentos: Preenchimento[];
}
