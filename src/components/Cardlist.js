import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    const CardComponent = robots.map((user, i) => {
        return <Card key={i} name={robots[i].name} mail={robots[i].mail} imgSource={robots[i].imgSource} />

    })
    return (
        <div>
            {CardComponent}
        </div>
    )
}

export default CardList;