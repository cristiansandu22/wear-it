import './category-container.styles.scss'
import PropTypes from 'prop-types';
import {Category} from "../../App.tsx";

type CategoryContainerProps = {
    category: Category
}

const CategoryContainer = ({category}: CategoryContainerProps) => {
    return(
        <div className='category-container'>
            <div className='background-image' style={{
                backgroundImage: `url(${category.imageUrl})`
            }}/>
            <div className='category-body-container'>
                <h2>{category.title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

CategoryContainer.propTypes = {
    category: PropTypes.object.isRequired,
}

export default CategoryContainer;
