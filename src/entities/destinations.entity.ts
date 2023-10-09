import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export default class Destination {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '255' })
  destination_name: string;

  @Column({ type: 'varchar', length: '255' })
  destination_city: string;

  @Column({ type: 'varchar', length: '255' })
  destination_region: string;

  @Column({ type: 'varchar', length: '255' })
  destination_country: string;
}
