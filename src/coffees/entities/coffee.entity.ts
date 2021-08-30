import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { Flavor } from './flavor.entity';

@Entity()
export class Coffee_postgres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  // @JoinTable() //on the owner side
  // @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
  //   cascade: true,
  // })
  // flavors: Flavor[];

  @Column({ default: 0 })
  recommendations: number;

  @Column({ nullable: true })
  description: string;
}
