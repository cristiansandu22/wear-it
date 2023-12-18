import './categories.styles.scss'
import CategoryContainer from "../category-container/category-container.component.jsx";
import PropTypes from "prop-types";

const Categories = ({categories}) => {

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

Categories.propTypes = {
    categories: PropTypes.array.isRequired
}

export default Categories;