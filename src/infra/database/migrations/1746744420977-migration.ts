import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1746744420977 implements MigrationInterface {
    name = 'Migration1746744420977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "preenchimentos" DROP COLUMN "fieldId"`);
        await queryRunner.query(`ALTER TABLE "preenchimentos" DROP CONSTRAINT "FK_8a4cdaa3ecb258507f2bb4ca2a2"`);
        await queryRunner.query(`ALTER TABLE "preenchimentos" ALTER COLUMN "campo_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "preenchimentos" ADD CONSTRAINT "FK_8a4cdaa3ecb258507f2bb4ca2a2" FOREIGN KEY ("campo_id") REFERENCES "campos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "preenchimentos" DROP CONSTRAINT "FK_8a4cdaa3ecb258507f2bb4ca2a2"`);
        await queryRunner.query(`ALTER TABLE "preenchimentos" ALTER COLUMN "campo_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "preenchimentos" ADD CONSTRAINT "FK_8a4cdaa3ecb258507f2bb4ca2a2" FOREIGN KEY ("campo_id") REFERENCES "campos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "preenchimentos" ADD "fieldId" uuid NOT NULL`);
    }

}
