
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import { CreateSurveys1614305239475 } from "../database/migrations/1614305239475-CreateSurveys";
@Entity("surveys")
class Survey{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column()
    description:string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Survey}