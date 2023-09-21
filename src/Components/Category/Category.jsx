import PropTypes from 'prop-types';
const Category = ({category}) => {
    const {logo,category_name,availability} = category;
    return (
        <div className="bg-violet-100 p-5 rounded-md space-y-8">
        <img src={logo} alt="" />
        <div className="space-y-3">
          <h3 className="text-xl font-extrabold">{category_name}</h3>
          <p className="text-base font-medium">{availability}</p>
        </div>
      </div>
    );
};
Category.propTypes = {
    category: PropTypes.object,
  }
export default Category;