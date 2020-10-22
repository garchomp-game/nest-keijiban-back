import {MigrationInterface, QueryRunner} from "typeorm";

export class createBoard1603296330202 implements MigrationInterface {
    name = 'createBoard1603296330202'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "board" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "discription" varchar NOT NULL, "idDone" boolean NOT NULL DEFAULT (0), "deletedAt" datetime, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "board"`);
    }

}
