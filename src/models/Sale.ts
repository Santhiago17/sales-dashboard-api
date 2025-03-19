import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Sale {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    productName!: string;

    @Column()
    quantity!: number;

    @Column("decimal", { precision: 10, scale: 2 })
    price!: number;

    @Column({ type: "date" })
    saleDate!: Date;
}