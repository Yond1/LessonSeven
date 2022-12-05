import React from 'react'
import { New } from '../New/New'
import { Popular } from '../Popular/Popular'

export const NewOrPopular = (Component) => {
    return (props) => {
        const { views } = props

        return (
            (views < 100) ?
                <New>
                    <Component {...props} />
                </New>

                :
                <Popular>
                    <Component {...props} />
                </Popular>
        )
    }
}
