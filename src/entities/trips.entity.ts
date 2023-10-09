import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm';
import Wishlist from './wishlists.entity';
import Destination from './destinations.entity';

@Entity()
export default class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '255' })
  minimum_person: number;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'float', precision: 10, scale: 2, default: 0 })
  rating: string;

  @Column({ type: 'varchar', length: '255' })
  photo_cover: string;

  @Column({ type: 'longtext' })
  description: string;

  @Column({ type: 'boolean', default: false })
  is_popular: boolean;

  @OneToOne(() => Wishlist, (wishlist) => wishlist.id)
  wishlist: Wishlist;

  @ManyToOne(() => Destination, (destination) => destination.id)
  destination: Destination;
}
