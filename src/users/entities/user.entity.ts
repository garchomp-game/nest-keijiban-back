import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({width: 64})
    name: string;

    @Column({
        nullable: true,
        type: 'varchar',
        width: 128
    })
    icon: string;

    @Column({
        nullable: true,
        type: 'varchar',
        width: 128
    })
    header: string;

    @Column({width: 64})
    login_id: string;

    @Column({width: 64})
    password: string;

    @CreateDateColumn()
    readonly createdAt?: Date;

    @UpdateDateColumn()
    readonly updatedAt?: Date;

    @DeleteDateColumn()
    readonly deletedAt?: Date;
}