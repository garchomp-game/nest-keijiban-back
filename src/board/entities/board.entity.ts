import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn
  } from "typeorm";
  
  @Entity()
  export class Board {
    @PrimaryGeneratedColumn()
    readonly id: number;
  
    @Column()
    title: string;
  
    @Column()
    discription: string;
  
    @Column("boolean", { default: false })
    idDone: boolean;
  
    @DeleteDateColumn()
    readonly deletedAt?: Date;
  
    @CreateDateColumn()
    readonly createdAt?: Date;
  
    @UpdateDateColumn()
    readonly updatedAt?: Date;
  }