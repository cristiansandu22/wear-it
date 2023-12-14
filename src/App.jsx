import './App.css'

const App = () => {

    const categories = [
        {
            id: 1,
            title: 'Hats'
        },
        {
            id: 2,
            title: 'Jackets'
        },
        {
            id: 3,
            title: 'Sneakers'
        },
        {
            id: 4,
            title: 'Women'
        },
        {
            id: 5,
            title: 'Mens'
        },
    ]

    return (
        <div className='categories-container'>

            {/*TBD -> create components!!*/}

            {
                categories.map((category) => {
                    return(
                        <div key={category.id} className='category-container'>
                            <div className='background-image'/>
                            <div className='category-body-container'>
                                <h1>{category.title}</h1>
                                <p>Shop Now!</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default App
