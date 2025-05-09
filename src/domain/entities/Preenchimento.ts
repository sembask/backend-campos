import "reflect-metadata";

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Campo } from "./Campo";

@Entity("preenchimentos")
export class Preenchimento {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "json" })
  value: string | number | boolean | Date;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt!: Date;

  @Column({ name: "campo_id", type: "uuid" })
  fieldId!: string;

  @ManyToOne(() => Campo, (campo) => campo.preenchimentos)
  @JoinColumn({ name: "campo_id" })
  campo: Campo;
}
