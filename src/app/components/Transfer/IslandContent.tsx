import * as React from 'react'
import {FunctionComponent, useState} from 'react'
import {Button, ButtonType} from "app/components/form/Button";
import {ItemAndIcon} from "app/components/Transfer/ItemAndIcon";
import Icon from '@mdi/react'
import './IslandContentStyles.module.scss'
import { mdiCalendarAlert } from '@mdi/js'
import {BaseInput, BaseInputSize, BaseInputType} from "app/components/form/BaseInput";
import {ChangeEvent} from "react";


export interface IslandContentProps{


}
export interface CarsProps {
    id:number,
    model:string,
    size?:number,
    placeAmount?:number,
    invalidPlace?:number,
    color?:string,
    number?:number
}

export const Cars:CarsProps[]=[
    {model:"Rehaut",id:0},
    {model:"Tesla",id:1},
    {model:"Peugeot",id:2},
    {model:"BMW",id:3},
]



export const IslandContent:FunctionComponent<IslandContentProps>=(props)=>{

    const [validate,setValidate]=useState()
    const [inputValidate,setInputValidate]=useState()
    return(
        <div className={"islandContent"}>
            <table className={"table"}>
                <tr className={"tr"}>
                    <td>
                        request info
                    </td>
                    <td>
                        <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1}/>} text={"18.02.1999"}/>
                    </td>
                    <td>
                        <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1}/>} text={"18.02.1999"}/>
                    </td>
                    <td>
                        <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1}/>} text={3}/>
                    </td>

                </tr>
                <tr className={"tr"}>
                    <td>
                       return transfer
                    </td>
                    <td>
                        <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1}/>} text={"18.02.1999"}/>
                    </td>
                    <td>
                        <ItemAndIcon icon={<Icon path={mdiCalendarAlert} size={1}/>} text={"18.02.1999"}/>
                    </td>

                </tr>
                <tr>
                    Show more
                </tr>
            </table>
            <div className={"salary"}>


                   <BaseInput type={BaseInputType.TEXT} size={BaseInputSize.XS} placeholder={"1200$"} validate={() => setInputValidate(true)} />
                <select className={"select"}
                        onChange={(e:ChangeEvent<HTMLSelectElement>)=>setValidate(e.target.value)} >
                    {Cars.map(car=>

                        <option value={car.model} key={car.id}>{car.model}</option>

                    )}
                </select>

            </div>
            {
                validate&&inputValidate===true?
                    <Button type={ButtonType.YELLOW} children={"take order"}  />:
                    <Button type={ButtonType.__VK} children={"set price"}  />

            }


        </div>
    )
}

