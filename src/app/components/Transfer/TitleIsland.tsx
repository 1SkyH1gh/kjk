import * as React from 'react'
import {FunctionComponent} from 'react'
import {Button, ButtonType} from "app/components/form/Button";
import './TitleIslandStyles.module.scss'
export interface TitleIslandProps{
    title:string
}

export const TitleIsland:FunctionComponent<TitleIslandProps>=(props)=>{
    return(
        <div className={"titleIsland"}>
            <span>
                {props.title}
            </span>
            <Button type={ButtonType.MAIN}/>
        </div>
    )
}
