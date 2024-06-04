import Container from "../shared/Container/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";
const Categories = () => {
  return (
    <Container>
       <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto cursor-pointer'>
       {
        categories?.map(item=><CategoryBox 
            label={item.label} 
            icon={item.icon} 
            key={item.label}/>
    
        )
       }
       </div>
    </Container>
  );
};

export default Categories;
