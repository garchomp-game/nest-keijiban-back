import {MigrationInterface, QueryRunner} from "typeorm";

export class createUsers1603349509131 implements MigrationInterface {
    name = 'createUsers1603349509131'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "icon" varchar, "header" varchar, "login_id" varchar NOT NULL, "password" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "name", "icon", "header", "login_id", "password", "createdAt", "updatedAt", "deletedAt") SELECT "id", "name", "icon", "header", "login_id", "password", "createdAt", "updatedAt", "deletedAt" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "icon" varchar NOT NULL, "header" varchar NOT NULL, "login_id" varchar NOT NULL, "password" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updatedAt" datetime NOT NULL DEFAULT (datetime('now')), "deletedAt" datetime)`);
        await queryRunner.query(`INSERT INTO "user"("id", "name", "icon", "header", "login_id", "password", "createdAt", "updatedAt", "deletedAt") SELECT "id", "name", "icon", "header", "login_id", "password", "createdAt", "updatedAt", "deletedAt" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }

}
