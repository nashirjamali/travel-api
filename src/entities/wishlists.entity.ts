import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import Trip from './trips.entity';

@Entity()
export default class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Trip, { onDelete: 'CASCADE', nullable: false })
  @JoinColumn({ name: 'trip' })
  trip: Trip;
}
