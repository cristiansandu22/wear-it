import './categories.styles.scss'
import CategoryContainer from "../category-container/category-container.component.tsx";
import {Category} from "../../App.tsx";

type CategoriesProps = {
    categories: Category[]
}

const Categories = ({categories}: CategoriesProps) => {

    return(
        <div className='categories-container'>

            {
                categories.map((category) => {
                    return(
                        <CategoryContainer key={category.id} category={category} />
                    )
                })
            }

        </div>
    )
}


export default Categories;
