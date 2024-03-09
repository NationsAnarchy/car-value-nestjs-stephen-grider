import { Reports } from 'src/reports/reports.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Reports, (reports) => reports.user)
  reports: Reports[];

  // @AfterInsert()
  // logInsert() {
  //   console.log(`New user with id ${this.id} inserted`);
  // }

  // @AfterRemove()
  // logRemove() {
  //   console.log(`Removed user with id ${this.id}`);
  // }
}
